import React from 'react';
import'./Reviews.css'
import ReviewsTShirt from '../ReviewsTShirt/ReviewsTShirt';
import useTShirt from '../../hooks/useTshirt';

const Reviews = () => {
    const [reviews, setReviews] = useTShirt();
    return (
        <div className='reviews-container'>

            {
                reviews.map(review => <ReviewsTShirt
                    key={review._id}
                    review={review}
                    ></ReviewsTShirt>)
            }
        </div>
    );
};

export default Reviews;