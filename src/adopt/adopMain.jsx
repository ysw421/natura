import adoptMainStyles from './adoptMain.module.css';
import { Posts, PopularAnimals, Community, Donations, shops } from '../components/items';
import { useState } from 'react';

const Items = function Items(props) {
  return (
    <div className={adoptMainStyles.shops}>
      <div>
        {props.e.map((post) => (
          <a href="#" className={adoptMainStyles.shopsContainer} key={post.post_id}>
            <img src={post.img} alt={post.post_id} className={adoptMainStyles.shopImg} />
            <div className={adoptMainStyles.ShopHeader}>
              <div className={adoptMainStyles.shopName}>{post.title}</div>
              {/* <Likes className={categoryMainStyles.likes}/> */}
            </div>
            <div className={adoptMainStyles.shopInfo}>
              <div>{post.detail}</div>
              <div>{post.detail2}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

function AdoptMain() {
  const [page, setPage] = useState(1);

  const changePage = (page) => {
    setPage(page);
  };

  return (
    <div className={adoptMainStyles.container}>
      <div className={adoptMainStyles.popContainer}>
        <div className={adoptMainStyles.subtitle}>동물 분양</div>
        {/* 동물 종류별 선택 */}
        <div className={adoptMainStyles.contentOfcontent}>
          {PopularAnimals.map((name, index) => (
            <div className={adoptMainStyles.contentBorder} key={name.species}>
              {/* <a href={name.link}> */}
              <a onClick={() => changePage(index)}>
                {/* {page === index? <img src={name.imgHovered} alt = {name.species} /> : <img src={name.img} alt = {name.species}/>} */}
                {/* {page === index? null : <img src={name.img} alt = {name.species}/>} */}
                <img src={name.img} alt={name.species} />
                <img
                  src={name.imgHovered}
                  alt={name.species}
                  className={`${adoptMainStyles.hoveredImg} ${page === index && adoptMainStyles.selectedImg}`}
                />
                {/* <img src={name.imgHovered} alt = {name.species} className={ContentsStyle.popAnimalsHovered}/> */}

                {/* <img className={ContentsStyle.line} src={line} alt="line"/> */}
                <div className={adoptMainStyles.Text}>{name.species}</div>
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
export default AdoptMain;
