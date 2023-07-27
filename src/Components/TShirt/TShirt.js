import React from 'react';
import './TShirt.css'

const TShirt = (props) => {
    const { name, comment, reding,picture } = props.tShirt;
    return (
        <div className='t-Shirt-style'>
        <img src={picture} alt="" />
            <div>
            <h1>Name:{name}</h1>
            <h4 className='comment'>Comment: {comment}</h4>
            <h4><small>Reding:  {reding}</small></h4>
            </div>

        </div>
    );
};

export default TShirt;