import React from 'react';
import supersports from '../../assets/img/SuperSports.png';
import signup from '../../assets/img/signup.svg';

export default function Header() {
    return (
        <>
            <nav>
                <img src={supersports} alt="" />
                {/* <img src="img/SuperSports.png" alt="" /> */}
                <div class="signup">
                    <a href="">Sign In</a>
                    <img src={signup} alt="" />
                    {/* <img src="img/signup.svg" alt="" /> */}
                </div>
            </nav>
        </>
    );
}
