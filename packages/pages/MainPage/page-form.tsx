import React from "react";
import './styles.css'
export const BaseMP = () => {
    return (
        <div>
            <h2 className="Title">Welcome to Boba Tea</h2>
            <p className='body-MP'>where your love for matcha and cats comes to life! We pride ourselves on using the freshest, highest-quality ingredients to craft our signature matcha drinks and delightful boba creations.</p>
            <img
                id="cat_img"
                src={"../../../packages/images/cat_cake.png"}
                alt="Siamese cat with a strawberry cake cartoon"
            />
        </div>
    );
};
