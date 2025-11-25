import React from 'react';
import macbook from '../../assets/images/home/macbookair-new-sm.jpg';

export default function Sectionn() {
    return (
        <section 
            className="second-hightlight-wrapper" 
            style={{ 
                backgroundImage: `url(${macbook})`, 
                height: '580px', 
                backgroundPosition: 'bottom', 
                backgroundRepeat: 'no-repeat', 
                backgroundSize: 'cover'
            }}
        >
            <div className="container">
                <div className="new-alert">Neww</div>
                <div className="title-wraper bold black">MacBook Air</div> 
                <div className="description-wrapper black">Twice the speed. Twice the storage.</div>
                <div className="price-wrapper grey">From $999.</div>
                <div className="links-wrapper">
                    <ul>
                        <li><a href="">Learn more</a></li>
                        <li><a href="">Buy</a></li>
                    </ul> 
                </div>
            </div>
        </section>
    )
}
