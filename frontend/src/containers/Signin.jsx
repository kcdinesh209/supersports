import React from 'react';
import background from '../assets/img/background.png';
import batball from '../assets/img/batball.png';
import football from '../assets/img/football.png';
import hockey from '../assets/img/hocky.png';
import badminton from '../assets/img/badminton.png';
import cross from '../assets/img/cross01.svg';
function Signin() {
    return (
        <div>
            <section class="background">
                <img src={background} alt="" />
                {/* <img src="img/background01.png" alt="" /> */}
            </section>
            <section class="text">
                <ul class="food-items">
                    <li class="row">
                        <img src={batball} alt="" />
                        {/* <img src="img/batball.png" class="food-image" alt> */}
                        <div class="info">
                            <div class="name">
                                Nike <br /> Runner Orange
                            </div>
                            <div class="info-bottom">
                                <div class="price">$ 380</div>
                                <button class="add"> Add +</button>
                            </div>
                        </div>
                    </li>
                    <li class="row">
                        <img src={football} alt="" />
                        {/* <img src="img/football.png" class="food-image" alt> */}
                        <div class="info">
                            <div class="name">
                                Nike <br /> Track Suit Pink
                            </div>
                            <div class="info-bottom">
                                <div class="price">$ 1000</div>
                                <button class="add"> Add +</button>
                            </div>
                        </div>
                    </li>
                    <li class="row">
                        <img src={hockey} alt="" />
                        {/* <img src="img/hocky.png" class="food-image" alt> */}
                        <div class="info">
                            <div class="name">
                                Nike <br /> Flex Runner
                            </div>
                            <div class="info-bottom">
                                <div class="price">$ 1000</div>
                                <button class="add"> - 1 +</button>
                            </div>
                        </div>
                    </li>
                    <li class="row">
                        <img src={badminton} alt="" />
                        {/* <img src="img/badminton.png" class="food-image" alt> */}
                        <div class="info">
                            <div class="name">
                                Nike <br /> Black track pants{' '}
                            </div>
                            <div class="info-bottom">
                                <div class="price">$ 300</div>
                                <button class="add"> Add +</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
            <section class="popup01">
                <div class="popup-inner01">
                    <img src={cross} alt="" />
                    {/* <img src="img/cross01.svg" class="cross01" alt=""> */}
                    <h1 class="heading01"> SuperSports </h1>
                    <h2 class="head2">SIGN IN</h2>
                    <div class="popup-input01">
                        <input type="email" required placeholder="Email-address" />
                        <br />
                        <br />
                        <input type="password" required placeholder="Password" />
                        <br /> <br />
                        <button>Join Us</button>
                        <br />
                        <br />
                        <p>
                            Already a Member? <a href="./login.html">Join Us</a>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Signin;
