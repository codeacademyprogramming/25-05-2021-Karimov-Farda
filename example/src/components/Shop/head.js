import React from 'react';
const Head = () => {
    return (
        <div className="container">
        <div className="row">
            <div className="col-5">

                <ul>
                    <li><a href="#"> Payment </a></li>
                    <li><a href="#"> About us </a></li>
                    <li><a href="#"> Contacts </a></li>

                </ul>
            </div>
            <div className="col-2">
                <img src={process.env.PUBLIC_URL + '/logos 1.png'} />
            </div>
            <div className="col-5">
                <ol>
                    <li><a href="#" style={{ letterSpacing: 1 + "px" }}>Daily 11am - 9pm</a></li>
                    <li><i className="fas fa-phone"></i></li>

                    <li><a href="#">0 800 33 08 98</a></li>

                </ol>
            </div>
        </div>
        <div class="intro">
            <h1> Food delivery in Kovel</h1>
            <h5>If you decide to relax or have unexpected guests, call us. We make sure that your vacation is comfortable, enjoyable and delicious</h5>
            <img class="center" src={process.env.PUBLIC_URL + '/image 25.png'}></img>
            <img class="tomato" src={process.env.PUBLIC_URL + '/image 19.png'}></img>
            <img class="olives" src={process.env.PUBLIC_URL + '/imagenew.jpeg'}></img>
            <img class="garlic" src={process.env.PUBLIC_URL + '/image 27.png'}></img>
            <img class="mushroom" src={process.env.PUBLIC_URL + '/Vector (1).png'}></img>
            <img class="cucumber" src={process.env.PUBLIC_URL + '/image 20 1.png'}></img>
            <img class="pizza" src={process.env.PUBLIC_URL + '/Vector.png'}></img>
        </div>

    </div>
    );
}

export default Head;