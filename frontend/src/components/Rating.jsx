import React, { useContext, useEffect, useState } from 'react'
import CommentContext from '../context/CommentContext'

const Rating = () => {
  const { comments } = useContext(CommentContext);
  const [categoryRatings, setCategoryRatings] = useState({});
  const [avgRating, setAvgRating] = useState(0);

  useEffect(() => {
    if (comments && comments.length > 0) {
      // Group by categories and calculate average
      const categoryTotals = {};
      const categoryCounts = {};
      
      // Process each comment
      comments.forEach(comment => {
        const category = comment.categories; // Match the field name from your model
        const rating = comment.rating;
        
        if (!categoryTotals[category]) {
          categoryTotals[category] = 0;
          categoryCounts[category] = 0;
        }
        
        categoryTotals[category] += rating;
        categoryCounts[category] += 1;
      });
      
      // Calculate average for each category
      const ratings = {};
      let totalRating = 0;
      let categoryCount = 0;
      
      Object.keys(categoryTotals).forEach(category => {
        const average = Math.round(categoryTotals[category] / categoryCounts[category]);
        ratings[category] = average;
        totalRating += average;
        categoryCount++;
      });
      
      setCategoryRatings(ratings);
      setAvgRating(categoryCount > 0 ? Math.round(totalRating / categoryCount) : 0);
    }
  }, [comments]);

  return (
    <div className='bg-white rounded-2xl p-3'>
      <div className='flex justify-between'>
        <h3 className='text-xl font-bold'>Rating</h3>
        <span className='text-2xl'>
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={i < avgRating ? 'text-yellow-400' : 'text-gray-300'}>
              ★
            </span>
          ))}
        </span>
      </div>
      <div className='my-2'>
        <h4 className='mb-1'>CATEGORIES</h4>
        <ul>
          {Object.entries(categoryRatings).map(([category, rating], index) => (
            <li className='flex justify-between' key={category}>
              {index + 1}. {formatCategoryName(category)}
              <span>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
                    ★
                  </span>
                ))}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Helper to format category names (convert camelCase to Title Case)
function formatCategoryName(category) {
  // Handle camelCase conversion
  const formatted = category
    .replace(/([A-Z])/g, ' $1') // Add space before capital letters
    .replace(/^./, str => str.toUpperCase()); // Capitalize first letter
  return formatted;
}

export default Rating;