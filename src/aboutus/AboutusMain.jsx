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
          <p id={AboutUsMainStyle.t1}>엄마, 이 개구리는 왜 색이 달라?</p>
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
            국립생태원 자체 자연환경 조사에 따르면 외래생물 유입은 2011녀 1천109종에서 2021년 2천253종으로<br></br>
            10년사이에 두배 이상 급증한 것으로 확인되었다. 이렇게 다양한 경로를 통해 유입된 외래생물은<br></br>
            생태계를 교란하고, 다양한 문제를 야기한다.
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
              특수동물,<br></br>
              우리 삶에 스며든 색다른 가족
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
            <p id={AboutUsMainStyle.t5}>합법적 분양을 돕는 나뚜라의 서비스 내용</p>
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
            <p id={AboutUsMainStyle.t6}>특수 동물의 분양 절차를 알고 계신가요?</p>
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
          <p id={AboutUsMainStyle.t8}>나뚜라가 혁신하는 가치</p>
          <img src="/images/aboutus/i10.png" alt="images" id={AboutUsMainStyle.i10} />
          <p id={AboutUsMainStyle.t9}>
            나뚜라는 생태계의 법칙과 본질,<br></br>그 일부로써 살아가는 다양한 생명들의 아름다운 조화를 추구한다.
            <br></br>
            인간이 만드는 모든 것은 반드시 아름답거나 추한 모습을 띄게된다. 자연과 조화를 이루지 못하거나, 위협한다면,
            그것은 추하다.<br></br>
            -윌리엄 모리스<br></br>
            <br></br>
            나뚜라는 아름다운 조화의 본래 가치를 수호하고, 나아가 본원적 의미를 잃지않는 변함없는 기업이 되고자 한다.
          </p>
          <p id={AboutUsMainStyle.t10}>Members</p>
          <p id={AboutUsMainStyle.t11}>나뚜라의 가치를 만드는 사람들</p>
          <p id={AboutUsMainStyle.t12}>4 HEROS</p>
          <img src="/images/aboutus/i11.png" alt="images" id={AboutUsMainStyle.i11} />
          <img src="/images/aboutus/i12.png" alt="images" id={AboutUsMainStyle.i12} />
          <p id={AboutUsMainStyle.t13}>Journey Map</p>
          <p id={AboutUsMainStyle.t14}>나뚜라의 여정</p>
          <img src="/images/aboutus/i13.png" alt="images" id={AboutUsMainStyle.i13} />
          <img src="/images/aboutus/i14.png" alt="images" id={AboutUsMainStyle.i14} />
          <p id={AboutUsMainStyle.t15}>
            합법적 분양과정 제시 통해<br></br>
            사용자들을 보호하고<br></br>
            욕구를 충족
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
