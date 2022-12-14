import categoryMainStyles from './categoryMain.module.css';
// import link from route
import Search from '../components/search/search';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { Posts, PopularAnimals, Community, Donations, shops } from '../components/items';
import { useState } from 'react';

const Items = function Items(props) {
  return (
    <div className={categoryMainStyles.shops}>
      <div>
        {props.e.map((post) => (
          <a href="#" className={categoryMainStyles.shopsContainer} key={post.post_id}>
            <img src={post.img} alt={post.post_id} className={categoryMainStyles.shopImg} />
            <div className={categoryMainStyles.ShopHeader}>
              <div className={categoryMainStyles.shopName}>{post.title}</div>
              {/* <Likes className={categoryMainStyles.likes}/> */}
            </div>
            <div className={categoryMainStyles.shopInfo}>
              <div>{post.detail}</div>
              <div>{post.detail2}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

function AllCategories() {
  const [page, setPage] = useState(1);

  const changePage = (page) => {
    setPage(page);
  };

  return (
    <div className={categoryMainStyles.container}>
      <Header />

      <div className={categoryMainStyles.popContainer}>
        <div className={categoryMainStyles.subtitle}>동물 분양</div>
        {/* 동물 종류별 선택 */}
        <div className={categoryMainStyles.contentOfcontent}>
          {PopularAnimals.map((name, index) => (
            <div className={categoryMainStyles.contentBorder} key={name.species}>
              {/* <a href={name.link}> */}
              <a onClick={() => changePage(index)}>
                {/* {page === index? <img src={name.imgHovered} alt = {name.species} /> : <img src={name.img} alt = {name.species}/>} */}
                {/* {page === index? null : <img src={name.img} alt = {name.species}/>} */}
                <img src={name.img} alt={name.species} />
                <img
                  src={name.imgHovered}
                  alt={name.species}
                  className={`${categoryMainStyles.hoveredImg} ${page === index && categoryMainStyles.selectedImg}`}
                />
                {/* <img src={name.imgHovered} alt = {name.species} className={ContentsStyle.popAnimalsHovered}/> */}

                {/* <img className={ContentsStyle.line} src={line} alt="line"/> */}
                <div className={categoryMainStyles.Text}>{name.species}</div>
              </a>
            </div>
          ))}
        </div>

        <Items e={shops} />
        <div style={{ width: '100%', height: '50px' }}></div>
        <Items e={shops} />
        <div style={{ width: '100%', height: '50px' }}></div>
        <Items e={shops} />
        <div style={{ width: '100%', height: '50px' }}></div>
        <Items e={shops} />
        <div style={{ width: '100%', height: '50px' }}></div>
      </div>
    </div>
  );
}

export default AllCategories;
