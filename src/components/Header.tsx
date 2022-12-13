import React from 'react';
import HeaderStyle from './Header.module.css';
import logo from '../Logo/mypageLogo.png';  
import menuIcon from '../Logo/menuIcon.svg';
import FacebookIcon from '../Logo/Facebook.png';
import InstaIcon from '../Logo/Insta.png';
import NaverIcon from '../Logo/Naver.png';
import ChatIcon from '../Logo/Chat.png';
import MainLogo from '../Logo/MainLogo.png';
import { Route, Link } from 'react-router-dom';
import Search from './search/search';
import shrink from './shrinkMenubar/shrink';
import { useSpring, animated } from '@react-spring/web'
import { useState } from 'react';


function Header() {
//  if user's first visit, show the tutorial
//  if user's not first visit, show the main page
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const [onClicked, setOnClicked] = useState(false);
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);

  // confirm user's first visi

  const props = useSpring({
    from: { transform: onClicked? 'rotate(0deg)' : 'rotate(360deg)',
            opacity: 1 },
    to: { transform: onClicked? 'rotate(360deg)' : 'rotate(0deg)',
          opacity: 1 },
    config: { duration: 300 }
  });

  const hover1 = useSpring({
    from: { opacity: hovered1? 0 : 1},
    to: { opacity: hovered1? 1 : 0},
    config: { duration: 300 }
  });
  const hover2 = useSpring({
    from: { opacity: hovered2? 0 : 1},
    to: { opacity: hovered2? 1 : 0},
    config: { duration: 300 }
  });
  const hover3 = useSpring({
    from: { opacity: hovered3? 0 : 1},
    to: { opacity: hovered3? 1 : 0},
    config: { duration: 300 }
  });
  const hover4 = useSpring({
    from: { opacity: hovered4? 0 : 1},
    to: { opacity: hovered4? 1 : 0},
    config: { duration: 300 }
  });


  return (
    // <BrowserRouter>/
    <>
      <header className={HeaderStyle.header}>
        <div className={HeaderStyle.headerSearch}>
          {/* <Link to='/' className={HeaderStyle.linktoMain}> */}
            {/* <animated.div style={props} onClick={() => setOnClicked(!onClicked)}>
              <img src={MainLogo} alt="MainLogo"  className={HeaderStyle.MainLogo}/>
            </animated.div> */}
            <div className={HeaderStyle.Logo}>
              <Link to='/' className={HeaderStyle.naturaLogo}>
                <animated.div style={props} onClick={() => setOnClicked(!onClicked)}>
                <img src={MainLogo} alt="MainLogo"  className={HeaderStyle.MainLogo}/>
                </animated.div>
                {/* NATURA */}
                <span style={{marginTop: '7px'}}>NATURA</span>
              </Link>
            </div>
            <div className={HeaderStyle.search}>
              <Search/>
            </div>  
          <div className={HeaderStyle.Icons}>
              <Link to='/mypage' style={{marginRight: '8px'}}><img src={logo} alt="logo" className={HeaderStyle.logo}/></Link>
              <Link to='/chat'><img src={ChatIcon} alt="menuIcon" className={HeaderStyle.ChatIcon}/></Link>
          </div>
        </div>
        {/* <div className={HeaderStyle.collapsingPart}> */}
          <hr className={HeaderStyle.headerHr}/> 
          <div className={HeaderStyle.HeaderUtils}>
            <div className={HeaderStyle.Menus}>
              <a href="#">
                <img src={FacebookIcon} alt="FacebookIcon" />
              </a>
              <a href="#">
                <img src={InstaIcon} alt="InstaIcon" />
              </a>
              <a href="#">
                <img src={NaverIcon} alt="NaverIcon" />
              </a>
              
            </div>
            <div className={HeaderStyle.Links}>
              <a href="#">Q&A</a>
              <div></div>
              <a href="#">마켓후기</a>
              <div></div>
              <a href="#">로그인</a>
              <div></div>
              <a href="#">회원가입</a>
            </div>
          </div>
        <hr className={HeaderStyle.headerHr}/>
      </header>

      <div className={HeaderStyle.menuContainer}>
        <nav className={HeaderStyle.Menubar}>
          <div style={{width: '20px'}}></div>
          <div>
            <Link to='./AllCategories' className={HeaderStyle.menubarComponents}>
              <div className={HeaderStyle.seeAllMenu}>
                <img src={menuIcon} alt="menuIcon" className={HeaderStyle.menuIcon} />
                전체 카테고리
              </div>
            </Link>
          </div>
          <div style={{marginTop: '8px'}} onMouseOver={() => setHovered1(true)} onMouseOut={() => setHovered1(false)}>
            <Link to ='/adopt' className={HeaderStyle.menubarComponents}>동물분양</Link>
            <animated.div style={hover1} className={HeaderStyle.dot}/>
          </div>
          <div style={{marginTop: '8px'}} onMouseOver={() => setHovered2(true)} onMouseOut={() => setHovered2(false)}>
            <Link to='/community' className={HeaderStyle.menubarComponents}>커뮤니티</Link>
            <animated.div style={hover2} className={HeaderStyle.dot}/>
          </div>
          <div style={{marginTop: '8px'}} onMouseOver={() => setHovered3(true)} onMouseOut={() => setHovered3(false)}>
            <Link to ='/donation' className={HeaderStyle.menubarComponents}>모금</Link>
            <animated.div style={hover3} className={HeaderStyle.dot}/>
          </div>
          <div style={{marginTop: '8px'}} onMouseOver={() => setHovered4(true)} onMouseOut={() => setHovered4(false)}>
            <Link to="/aboutus" className={HeaderStyle.menubarComponents}>ABOUT US</Link>
            <animated.div style={hover4} className={HeaderStyle.dot}/>
          </div>
        </nav>
      </div>
    </>
  );
}
export default Header

