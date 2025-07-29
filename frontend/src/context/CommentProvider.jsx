import React, { useState, useEffect } from 'react';
import CommentContext from './CommentContext';

const CommentProvider = ({ children }) => { 
    const [triggerRefresh, setTriggerRefresh] = useState(false);
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const fetchComments = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:3000/comments/',{
                credentials: 'include'
            });

            if (!response.ok) {
                throw new Error("Error fetching comments");
            }
            const result = await response.json();
            setComments(result);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
      }

      fetchComments();
    }, [ triggerRefresh ])
    
    
    return (
        <CommentContext.Provider value={{ 
      triggerRefresh, 
      setTriggerRefresh, 
      comments, 
      setComments,
      loading 
    }}>  
        {/* The outer braces { } are JSX syntax for embedding JavaScript expressions in your markup, 
            The inner braces { } create a JavaScript object literal */}
            { children }
        </CommentContext.Provider>
    )
 }

 export default CommentProvider;