// MyDialog.jsx
import React, { useEffect } from 'react';
import { Dialog } from "radix-ui";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useForm } from 'react-hook-form';

const MyDialog = ({ showForm, setShowForm, setIsLoggedin }) => {
	const { register, handleSubmit, formState:{errors}, reset} = useForm();

	useEffect(() => {
	  if (showForm) {
		reset(); // This clears all form values when dialog type changes
	  }
	//   React Hook Form maintains state across submissions. When you submit the registration form, the values stay in the form state even when you switch to the login form.
	}, [showForm])
	
	const onsubmit = async (data) => { 
		try {
			if (showForm === 'register') {
			await postData('http://localhost:3000/users/', data);
			// Show success message
			alert("Registration successful! Please login.");
			}
			if (showForm === 'login') {
			const result = await postData('http://localhost:3000/users/login/', data);
			if (result) {
				setIsLoggedin(true);
			}
			}
			setShowForm(null);  // Close dialog after form submission
		} catch (error) {
			// Show error message to user
			alert(`Error: ${error.message}`);
		}
	}

	async function postData(url,payload) {
		try {
			const response = await fetch(url,{
				method: 'POST',
				headers: {
					'Content-Type' : 'application/json',
				},
				credentials: 'include',  // IMPORTANT: This enables sending cookies
				body: JSON.stringify(payload),
			})
			if (!response.ok) {
				const errorBody = await response.text(); // Get response body for more info
            	throw new Error(`Invalid crentials ${errorBody}`);
			}
			const reasult = await response.json();
			return reasult
		} catch (error) {
			console.error(error)
			throw error
		}
	}

  return (
    <Dialog.Root open={!!showForm} onOpenChange={open => !open && setShowForm(null)}>  {/* When the dialog closes (open becomes false), !open is true, so setShowForm(null) runs.*/}
		{/* Single ! negates the value (e.g., !null is true).
			Double !! ensures the result is strictly true or false.(null, !!showForm is false (dialog closed)) */}
		<Dialog.Portal>
			<Dialog.Overlay className="fixed inset-0 bg-black-a6 data-[state=open]:animate-overlayShow" />

			<Dialog.Content 
			aria-describedby={undefined} 
			className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-gray1 p-[25px] shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-contentShow"
			>
				<Dialog.Title className="m-0 text-2xl font-bold text-mauve12 text-center">
					{showForm == 'register' && 'Register'}
					{showForm == 'login' && 'Login'}
				</Dialog.Title>

				{/* Form */}
				<form action="" onSubmit={handleSubmit(onsubmit)}>
					<fieldset className='flex flex-col gap-1 p-1 '>
						<label htmlFor="username">Username: </label>
						<input 
						className='px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' 
						type="text" id='username' placeholder={(showForm == 'register') ? 'e.g., john_doe123':'Enter your username'}
						{...register("username",{
							required: { value: true, message: 'It is an required field'}
						})}
						/>
					</fieldset>
					{errors.username && <span className="text-red-500 text-sm">{errors.username.message}</span>}

					{(showForm == 'register') && (
						<fieldset className='flex flex-col gap-1 p-1 '>
							<label htmlFor="email">Email: </label>
							<input 
							className='px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' 
							type="email" id='email' placeholder='Enter your email'
							{...register("email",{
								required: { value: true, message: 'It is an required field'}
							})}
							/>
						</fieldset>
					)}
					{errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}


					<fieldset className='flex flex-col gap-1 p-1 '>
						<label htmlFor="password">Password: </label>
						<input 
						className='px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' 
						min={4}
						max={12}
						type="password" id='password'
						{...register("password",{
							required: { value: true, message: 'It is an required field'},
							minLength: {value: 4, message: 'The password must be minimum 4 char long'},
							maxLength: {value: 12, message: 'The password can be Maximum of 12 char'}
						})}

						/>
					</fieldset>
					{errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}

					
					<button 
					className='bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded-lg cursor-pointer w-full my-2'
					type='submit'>Submit</button>
				</form>

				<Dialog.Close asChild>
					<button
						className=" cursor-pointer absolute right-2.5 top-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full text-violet11 bg-gray3 hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none"
						aria-label="Close"
					>
						<Cross2Icon onClick={() => setShowForm(null)} />
					</button>
				</Dialog.Close>
			</Dialog.Content>
		</Dialog.Portal>
	</Dialog.Root>

  );
};

export default MyDialog;
