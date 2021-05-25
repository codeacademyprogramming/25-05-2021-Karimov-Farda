import React from 'react';

export default function Footer(){
    return (
        <div class="contact">
        <div>
            <h1>Fill out the form
    and we will call you</h1>
            <form>
                <input type="text" placeholder="Your Name"></input>
                <input type="tel" placeholder="Phone Number"></input>
                <button type="button"> Call Back <i class="fas fa-arrow-right"></i></button>
            </form>
            <img class="car" src={process.env.PUBLIC_URL + '/car (1).jpg'}></img>
            <img class="right-side" src={process.env.PUBLIC_URL + '/imageright.jpeg'}></img>
            <img class="left-side" src={process.env.PUBLIC_URL + '/imagex.jpeg'}></img>
        </div>
    </div>
    );
}

