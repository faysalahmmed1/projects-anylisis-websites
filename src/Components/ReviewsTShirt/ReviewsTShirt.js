import React from 'react';
import'./ReviewsTShirt.css'

const ReviewsTShirt = (props) => {
    const { name, comment, reding,picture } = props.review;
    return (
        <div className='reviews-style'>
        <img src={picture} alt="" />
            <div>
            <h1>Name:{name}</h1>
            <h4 className='comment'>Comment: {comment}</h4>
            <h4><small>Reding:  {reding}</small></h4>
            </div>
            
        </div>
    );
};

export default ReviewsTShirt;