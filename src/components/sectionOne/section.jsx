import React from 'react';
import ipadBg from '../../assets/images/home/apple-card.jpg'; // make sure this path is correct

export default function Section() {
  return (
    <section
      className="first-hightlight-wrapper"
      style={{
        backgroundImage: `url(${ipadBg})`,
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '580px',
        backgroundColor: '#fbfbfd',
        textAlign: 'center',
        padding: '65px 20px',
        color: '#fff',
        marginBottom: '10px',
      }}
    >
      <div className="container">

        <div className="new-alert">
          New
        </div>

        <div className="title-wraper bold black">
          iPad Pro 
        </div> 

        <div className="links-wrapper">
          <ul>
            <li><a href="">Learn more</a></li>
            <li><a href="">Order</a></li>
          </ul> 
        </div>

        <div className="ipod-caption row">
          <div className="col-sm-12 col-md-6 text-md-right">
            iPad Pro available starting 3.25
          </div>
          <div className="col-sm-12 col-md-6 text-md-left">
            Magic Keyboard coming in May
          </div>
        </div>

      </div>
    </section>
  );
}
