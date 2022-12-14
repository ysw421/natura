import ContentsStyle from './Contents.module.css';
import { Posts, PopularAnimals, Community, Donations, shops } from './items';
import { useSpring, animated } from '@react-spring/web';

import Banner from './Banner/utils';

import { useState } from 'react';

const Items = function Items(props) {
  return (
    <div className={ContentsStyle.shops}>
      <div>
        {props.e.map((post) => (
          <a href="#" className={ContentsStyle.shopsContainer} key={post.post_id}>
            <img src={post.img} alt={post.post_id} className={ContentsStyle.shopImg} />
            <div className={ContentsStyle.ShopHeader}>
              <div className={ContentsStyle.shopName}>{post.title}</div>
              {/* <Likes className={ContentsStyle.likes}/> */}
            </div>
            <div className={ContentsStyle.shopInfo}>
              <div>{post.detail}</div>
              <div>{post.detail2}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

function Contents() {
  const [page, setPage] = useState(1);
  const [isMorePop, setIsMorePop] = useState(false);

  const morePopContainer = useSpring({
    from: { height: isMorePop ? '0px' : '611px' },
    to: { height: isMorePop ? '611px' : '0px' },
    config: { duration: 600 },
  });

  const changePage = (page) => {
    setPage(page);
  };

  console.log(isMorePop);
  return (
    <div className={ContentsStyle.contentContainer} style={{ paddingRight: '5%' }}>
      {/* <div className = {ContentsStyle.whiteSpace}></div> */}
      <div className={ContentsStyle.banner}>
        <Banner />
      </div>

      {/* <BannerSwipe/> */}
      {/* <div className = {ContentsStyle.whiteSpace}></div> */}
      <div className={ContentsStyle.popContainer}>
        <div className={ContentsStyle.subtitle}>인기동물 둘러보기</div>
        {/* 동물 종류별 선택 */}
        <div className={ContentsStyle.contentOfcontent}>
          {PopularAnimals.map((name, index) => (
            <div className={ContentsStyle.contentBorder} key={name.species}>
              {/* <a href={name.link}> */}
              <a onClick={() => changePage(index)}>
                {/* {page === index? <img src={name.imgHovered} alt = {name.species} /> : <img src={name.img} alt = {name.species}/>} */}
                {/* {page === index? null : <img src={name.img} alt = {name.species}/>} */}
                <img src={name.img} alt={name.species} />
                <img
                  src={name.imgHovered}
                  alt={name.species}
                  className={`${ContentsStyle.hoveredImg} ${page === index && ContentsStyle.selectedImg}`}
                />
                {/* <img src={name.imgHovered} alt = {name.species} className={ContentsStyle.popAnimalsHovered}/> */}

                {/* <img className={ContentsStyle.line} src={line} alt="line"/> */}
                <div className={ContentsStyle.Text}>{name.species}</div>
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* <div className={ContentsStyle.subT}</div> */}
      <div className={ContentsStyle.whiteSpace}></div>
      {/* <hr className={ContentsStyle.line}/> */}
      {/* <div className = {ContentsStyle.whiteSpace2}></div> */}

      <Items e={shops} />
      <div style={{ width: '90%', height: 'auto', flexWrap: 'wrap' }}>
        <animated.div style={morePopContainer}>
          <div style={{ height: '100%', overflowY: 'hidden' }}>
            <div style={{ width: '100%', height: '50px' }}></div>
            <Items e={shops} />
            <div style={{ width: '100%', height: '50px' }}></div>
            <Items e={shops} />
          </div>
        </animated.div>
      </div>
      <div className={ContentsStyle.whiteSpace2}></div>
      <div className={ContentsStyle.moreShops}>
        <a onClick={() => setIsMorePop(!isMorePop)}>{isMorePop ? '축소' : '더보기'}</a>
      </div>
      <hr className={ContentsStyle.line} />
      <div className={ContentsStyle.whiteSpace2}></div>
      <div className={ContentsStyle.subT}>커뮤니티</div>
      <div className={ContentsStyle.shops}>
        <div>
          {Donations.map((post) => (
            <a href="#" className={ContentsStyle.shopsContainer} key={post.post_id}>
              <img src={post.img} alt={post.post_id} className={ContentsStyle.shopImg} />
              <div className={ContentsStyle.ShopHeader}>
                <div className={ContentsStyle.shopName}>{post.title}</div>
                {/* <Likes className={ContentsStyle.likes}/> */}
              </div>
              <div className={ContentsStyle.shopInfo}>
                <div>{post.detail}</div>
                <div>{post.detail2}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className={ContentsStyle.moreShops}>
        <a href="#">더보기</a>
      </div>
      <hr className={ContentsStyle.line} />
      <div className={ContentsStyle.whiteSpace2}></div>
      <div className={ContentsStyle.subT}>진행중인 모금</div>
      <div className={ContentsStyle.shops}>
        <div>
          {Community.map((post) => (
            <a href="#" className={ContentsStyle.shopsContainer} key={post.post_id}>
              <img src={post.img} alt={post.post_id} className={ContentsStyle.shopImg} />
              <div className={ContentsStyle.ShopHeader}>
                <div className={ContentsStyle.shopName}>{post.title}</div>
                {/* <Likes className={ContentsStyle.likes}/> */}
              </div>
              <div className={ContentsStyle.shopInfo}>
                <div>{post.detail}</div>
                <div>{post.detail2}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className={ContentsStyle.moreShops}>
        <a href="#">더보기</a>
      </div>
      {/* <DropDownMenu></DropDownMenu> */}
      {/* add white space */}
      <div className={ContentsStyle.whiteSpace2}></div>
      {/* <div className = {ContentsStyle.whiteSpace2}></div> */}
      {/* <div className = {ContentsStyle.whiteSpace2}></div>      */}

      {/* <h1>dsjhfskhdf</h1> */}
    </div>
  );
}
export default Contents;
