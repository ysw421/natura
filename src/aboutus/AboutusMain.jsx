import React from 'react';
import AboutUsMainStyle from './AboutusMain.module.css';
import Header from '../components/Header';
// import AboutUsImg from './AboutUsImg/AboutUs.png';
import title from './AboutUsImg/title.png';
import Plx from 'react-plx';

function AboutusMain() {
  const parallaxData1 = [
    {
      startOffset: '0px',
      endOffset: '300px',
      start: 0,
      end: 50,
      easing: 'ease-in',
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: 'opacity',
        },
        {
          startValue: -50,
          endValue: 0,
          property: 'translateX',
          unit: '%',
        },
      ],
    },
  ];
  const parallaxData2 = [
    {
      startOffset: '500px',
      endOffset: '600px',
      start: 0,
      end: 50,
      easing: 'ease-in',
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: 'opacity',
        },
      ],
    },
  ];
  return (
    <div>
      <div style={{ height: '15000px' }}>
        {/* <div className={AboutUsMainStyle.whiteMenuBar}></div> */}
        <Header hideMenu="hide" />
        <img src="/images/aboutus/AboutUs.png" alt="AboutUsImg" className={AboutUsMainStyle.AboutUsImg} />
        {/* <div className={AboutUsMainStyle.titleContainer}><img src={title} alt="title" className={AboutUsMainStyle.title} /></div> */}

        <Plx parallaxData={parallaxData1}>
          <img src={title} alt="title" className={AboutUsMainStyle.title} />
        </Plx>
        <Plx
          parallaxData={[
            {
              startOffset: '600px',
              endOffset: '1200px',
              start: 0,
              end: 50,
              easing: 'ease-in',
              properties: [
                {
                  startValue: 0,
                  endValue: 1,
                  property: 'opacity',
                },
                {
                  startValue: -50,
                  endValue: 0,
                  property: 'translateX',
                  unit: '%',
                },
              ],
            },
          ]}
        >
          <p id={AboutUsMainStyle.t1}>??????, ??? ???????????? ??? ?????? ???????</p>
        </Plx>
        <Plx
          parallaxData={[
            {
              startOffset: '700px',
              endOffset: '1300px',
              start: 0,
              end: 50,
              easing: 'ease-in',
              properties: [
                {
                  startValue: 0,
                  endValue: 1,
                  property: 'opacity',
                },
                {
                  startValue: -50,
                  endValue: 0,
                  property: 'translateX',
                  unit: '%',
                },
              ],
            },
          ]}
        >
          <p id={AboutUsMainStyle.t2}>
            ??????????????? ?????? ???????????? ????????? ????????? ???????????? ????????? 2011??? 1???109????????? 2021??? 2???253?????????<br></br>
            10???????????? ?????? ?????? ????????? ????????? ???????????????. ????????? ????????? ????????? ?????? ????????? ???????????????<br></br>
            ???????????? ????????????, ????????? ????????? ????????????.
          </p>
        </Plx>
        <Plx
          parallaxData={[
            {
              startOffset: '600px',
              endOffset: '1500px',
              start: 0,
              end: 50,
              easing: 'ease-in',
              properties: [
                {
                  startValue: 0,
                  endValue: 1,
                  property: 'opacity',
                },
                {
                  startValue: 200,
                  endValue: 0,
                  property: 'translateY',
                  unit: '%',
                },
              ],
            },
          ]}
        >
          <img src="/images/aboutus/i1.png" alt="i1" id={AboutUsMainStyle.i1} />
        </Plx>
        <div style={{ width: '100%', height: '430px' }}></div>
        <div id={AboutUsMainStyle.c2_1}>
          <Plx
            parallaxData={[
              {
                startOffset: '1600px',
                endOffset: '2000px',
                start: 0,
                end: 50,
                easing: 'ease-in',
                properties: [
                  {
                    startValue: 0,
                    endValue: 1,
                    property: 'opacity',
                  },
                  {
                    startValue: -50,
                    endValue: 0,
                    property: 'translateX',
                    unit: '%',
                  },
                ],
              },
            ]}
          >
            <p id={AboutUsMainStyle.t3}>
              ????????????,<br></br>
              ?????? ?????? ????????? ????????? ??????
            </p>
          </Plx>
          <Plx
            parallaxData={[
              {
                startOffset: '1600px',
                endOffset: '2000px',
                start: 0,
                end: 50,
                easing: 'ease-in',
                properties: [
                  {
                    startValue: 0,
                    endValue: 1,
                    property: 'opacity',
                  },
                  {
                    startValue: 50,
                    endValue: 0,
                    property: 'translateX',
                    unit: '%',
                  },
                ],
              },
            ]}
          >
            <img src="/images/aboutus/i2.png" alt="i2" id={AboutUsMainStyle.i2} />
          </Plx>
          <div style={{ width: '1000px', height: '50px' }}></div>
          <Plx
            parallaxData={[
              {
                startOffset: '1400px',
                endOffset: '2200px',
                start: 0,
                end: 50,
                easing: 'ease-in',
                properties: [
                  {
                    startValue: 0,
                    endValue: 1,
                    property: 'opacity',
                  },
                  {
                    startValue: -50,
                    endValue: 0,
                    property: 'translateX',
                    unit: '%',
                  },
                ],
              },
            ]}
          >
            <p id={AboutUsMainStyle.t4}>Service</p>
          </Plx>
          <Plx
            parallaxData={[
              {
                startOffset: '1600px',
                endOffset: '2200px',
                start: 0,
                end: 50,
                easing: 'ease-in',
                properties: [
                  {
                    startValue: 0,
                    endValue: 1,
                    property: 'opacity',
                  },
                  {
                    startValue: -50,
                    endValue: 0,
                    property: 'translateX',
                    unit: '%',
                  },
                ],
              },
            ]}
          >
            <p id={AboutUsMainStyle.t5}>????????? ????????? ?????? ???????????? ????????? ??????</p>
          </Plx>
          <div style={{ width: '1000px', height: '115px' }}></div>
          <div id={AboutUsMainStyle.c2_1}>
            <Plx
              parallaxData={[
                {
                  startOffset: '2000px',
                  endOffset: '2500px',
                  start: 0,
                  end: 50,
                  easing: 'ease-in',
                  properties: [
                    {
                      startValue: 0,
                      endValue: 1,
                      property: 'opacity',
                    },
                    {
                      startValue: -20,
                      endValue: 0,
                      property: 'translateX',
                      unit: '%',
                    },
                    {
                      startValue: 5,
                      endValue: 0,
                      property: 'rotate',
                    },
                  ],
                },
              ]}
            >
              <img src="/images/aboutus/i3.png" alt="i3" id={AboutUsMainStyle.i3} />
            </Plx>
            <Plx
              parallaxData={[
                {
                  startOffset: '2000px',
                  endOffset: '2500px',
                  start: 0,
                  end: 50,
                  easing: 'ease-in',
                  properties: [
                    {
                      startValue: 0,
                      endValue: 1,
                      property: 'opacity',
                    },
                    {
                      startValue: 20,
                      endValue: 0,
                      property: 'translateX',
                      unit: '%',
                    },
                    {
                      startValue: -5,
                      endValue: 0,
                      property: 'rotate',
                    },
                  ],
                },
              ]}
            >
              <img src="/images/aboutus/i4.png" alt="i4" id={AboutUsMainStyle.i4} />
            </Plx>
          </div>
          <Plx
            parallaxData={[
              {
                startOffset: '2400px',
                endOffset: '2800px',
                start: 0,
                end: 50,
                easing: 'ease-in',
                properties: [
                  {
                    startValue: 0,
                    endValue: 1,
                    property: 'opacity',
                  },
                  {
                    startValue: -60,
                    endValue: 0,
                    property: 'translateY',
                    unit: '%',
                  },
                ],
              },
            ]}
          >
            <p id={AboutUsMainStyle.t6}>?????? ????????? ?????? ????????? ?????? ?????????????</p>
          </Plx>
          <Plx
            parallaxData={[
              {
                startOffset: '2400px',
                endOffset: '2800px',
                start: 0,
                end: 50,
                easing: 'ease-in',
                properties: [
                  {
                    startValue: 0,
                    endValue: 1,
                    property: 'opacity',
                  },
                  {
                    startValue: -20,
                    endValue: 0,
                    property: 'translateX',
                    unit: '%',
                  },
                ],
              },
            ]}
          >
            <img src="/images/aboutus/i5.png" alt="images" id={AboutUsMainStyle.i5} />
          </Plx>
          <Plx
            parallaxData={[
              {
                startOffset: '2400px',
                endOffset: '2800px',
                start: 0,
                end: 50,
                easing: 'ease-in',
                properties: [
                  {
                    startValue: 0,
                    endValue: 1,
                    property: 'opacity',
                  },
                  {
                    startValue: 20,
                    endValue: 0,
                    property: 'translateX',
                    unit: '%',
                  },
                ],
              },
            ]}
          >
            <img src="/images/aboutus/i6.png" alt="images" id={AboutUsMainStyle.i6} />
          </Plx>
          <Plx
            parallaxData={[
              {
                startOffset: '2600px',
                endOffset: '3200px',
                start: 0,
                end: 50,
                easing: 'ease-in',
                properties: [
                  {
                    startValue: 0,
                    endValue: 1,
                    property: 'opacity',
                  },
                  {
                    startValue: -60,
                    endValue: 0,
                    property: 'translateX',
                    unit: '%',
                  },
                ],
              },
            ]}
          >
            <img src="/images/aboutus/i8.png" alt="images" id={AboutUsMainStyle.i8} />
          </Plx>
          <Plx
            parallaxData={[
              {
                startOffset: '2700px',
                endOffset: '3200px',
                start: 0,
                end: 50,
                easing: 'ease-in',
                properties: [
                  {
                    startValue: 0,
                    endValue: 1,
                    property: 'opacity',
                  },
                  {
                    startValue: -30,
                    endValue: 0,
                    property: 'translateX',
                    unit: '%',
                  },
                ],
              },
            ]}
          >
            <img src="/images/aboutus/i5.png" alt="images" id={AboutUsMainStyle.i7} />
          </Plx>
          <Plx
            parallaxData={[
              {
                startOffset: '2700px',
                endOffset: '3200px',
                start: 0,
                end: 50,
                easing: 'ease-in',
                properties: [
                  {
                    startValue: 0,
                    endValue: 1,
                    property: 'opacity',
                  },
                  {
                    startValue: 30,
                    endValue: 0,
                    property: 'translateX',
                    unit: '%',
                  },
                ],
              },
            ]}
          >
            <img src="/images/aboutus/i9.png" alt="images" id={AboutUsMainStyle.i9} />
          </Plx>
          <p id={AboutUsMainStyle.t7}>Vision</p>
          <p id={AboutUsMainStyle.t8}>???????????? ???????????? ??????</p>
          <img src="/images/aboutus/i10.png" alt="images" id={AboutUsMainStyle.i10} />
          <p id={AboutUsMainStyle.t9}>
            ???????????? ???????????? ????????? ??????,<br></br>??? ???????????? ???????????? ????????? ???????????? ???????????? ????????? ????????????.
            <br></br>
            ????????? ????????? ?????? ?????? ????????? ??????????????? ?????? ????????? ????????????. ????????? ????????? ????????? ????????????, ???????????????,
            ????????? ?????????.<br></br>
            -????????? ?????????<br></br>
            <br></br>
            ???????????? ???????????? ????????? ?????? ????????? ????????????, ????????? ????????? ????????? ???????????? ???????????? ????????? ????????? ??????.
          </p>
          <p id={AboutUsMainStyle.t10}>Members</p>
          <p id={AboutUsMainStyle.t11}>???????????? ????????? ????????? ?????????</p>
          <p id={AboutUsMainStyle.t12}>4 HEROS</p>
          <img src="/images/aboutus/i11.png" alt="images" id={AboutUsMainStyle.i11} />
          <img src="/images/aboutus/i12.png" alt="images" id={AboutUsMainStyle.i12} />
          <p id={AboutUsMainStyle.t13}>Journey Map</p>
          <p id={AboutUsMainStyle.t14}>???????????? ??????</p>
          <img src="/images/aboutus/i13.png" alt="images" id={AboutUsMainStyle.i13} />
          <img src="/images/aboutus/i14.png" alt="images" id={AboutUsMainStyle.i14} />
          <p id={AboutUsMainStyle.t15}>
            ????????? ???????????? ?????? ??????<br></br>
            ??????????????? ????????????<br></br>
            ????????? ??????
          </p>
          <img src="/images/aboutus/i15.png" alt="images" id={AboutUsMainStyle.i15} />
          <img src="/images/aboutus/i16.png" alt="images" id={AboutUsMainStyle.i16} />
          <img src="/images/aboutus/i17.png" alt="images" id={AboutUsMainStyle.i17} />
          <img src="/images/aboutus/i18.png" alt="images" id={AboutUsMainStyle.i18} />
          <img src="/images/aboutus/i19.png" alt="images" id={AboutUsMainStyle.i19} />
          <img src="/images/aboutus/i20.png" alt="images" id={AboutUsMainStyle.i20} />
        </div>
      </div>
    </div>
  );
}

export default AboutusMain;
