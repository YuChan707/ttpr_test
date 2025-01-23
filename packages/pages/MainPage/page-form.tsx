import React from "react";
import './styles.css'
import background from '../../../packages/images/looping-img-green.gif'
export const BaseMP = () => {

    const backgroundGif = {
        backgroundImage: `url(${background})`, // Correctly use the imported background
        backgroundSize: 'cover', // Adjust how the image is displayed
        backgroundPosition: 'center', // Center the image
        //height: '200px', // Set height to make the div visible
        //width: '300px', // Set width
        width: '100%',
        height: '100%',

    };


    return (
        <>
        <br></br>
            <div>
                <div className="background-Img"
                    style={backgroundGif}>
                        <div className="main-part">
                            WELCOME
                        </div>
                </div>
            </div>
            <div className="information">
                <h2 className="Title">Welcome to Boba Tea</h2>
                <p className='body-MP'>where your love for matcha and cats comes to life! We pride ourselves on using the freshest, highest-quality ingredients to craft our signature matcha drinks and delightful boba creations.</p>
                <img
                    id="cat_img"
                    src={"../../../packages/images/cat_cake.png"}
                    alt="Siamese cat with a strawberry cake cartoon"
                />
            </div>
        </>
    );
};
