// import React from 'react';
import DonationBodyStyle from './donationBody.module.css';
import { donationImg } from './donationItems';
import { useSpring, animated } from '@react-spring/web';

function DonationBody() {
  const graphPercent = useSpring({
    from: { width: '0%' },
    to: { width: '100%' },
    config: { duration: 300 },
  });
  return (
    <div className={DonationBodyStyle.wrapper}>
      <div className={DonationBodyStyle.preview}>
        <div>
          {donationImg.map((item) => (
            <div className={DonationBodyStyle.contentBorder} key={item.id}>
              <a href="#">
                <img src={item.img} />
                <div className={DonationBodyStyle.content}>
                  <div className={DonationBodyStyle.imgTitle}>{item.title}</div>
                  <div className={DonationBodyStyle.imgSource}>{item.source}</div>
                  <div className={DonationBodyStyle.graphBar}>
                    <span className={DonationBodyStyle.imgPercent}>{item.percent}% </span>
                    {/* create a vertical bar chart */}
                    {/* <div> */}
                    <div style={{ width: '100px' }}>
                      <div className={DonationBodyStyle.graph}></div>
                      <div style={{ width: `${item.percent}px` }}>
                        <animated.div className={DonationBodyStyle.graph2} style={graphPercent}></animated.div>
                      </div>
                      {/* <animated.div className={DonationBodyStyle.graph2} style={graphPercent}></animated.div> */}
                    </div>
                    {/* </div> */}

                    <span className={DonationBodyStyle.imgCurrent}>{item.current}원</span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DonationBody;
