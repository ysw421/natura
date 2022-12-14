import React from 'react';
import HeaderStyle from './Header.module.css';
import logo from '../Logo/mypageLogo.png';
import menuIcon from '../Logo/menuIcon.svg';
import FacebookIcon from '../Logo/Facebook.png';
import InstaIcon from '../Logo/Insta.png';
import NaverIcon from '../Logo/Naver.png';
import ChatIcon from '../Logo/Chat.png';
import MainLogo from '../Logo/MainLogo.png';
import MainLogo2 from '../Logo/mainLogo2.png';
import { Route, Link } from 'react-router-dom';
import Search from './search/search';
import shrink from './shrinkMenubar/shrink';
import { useSpring, animated } from '@react-spring/web';
import { useState } from 'react';
import { atom, useAtom } from 'jotai';

export const pageAtom = atom(-1);

function Header() {
  //  if user's first visit, show the tutorial
  //  if user's not first visit, show the main page
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const [selectedPage, setSelectedPage] = useAtom(pageAtom);
  const [onClicked, setOnClicked] = useState(false);
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);
  const [isRollOpened, setIsRollOpened] = useState(false);

  // confirm user's first visi

  const props = useSpring({
    from: { transform: onClicked ? 'rotate(0deg)' : 'rotate(360deg)', opacity: 1 },
    to: { transform: onClicked ? 'rotate(360deg)' : 'rotate(0deg)', opacity: 1 },
    config: { duration: 300 },
  });

  const roll = useSpring({
    from: { height: isRollOpened ? '0px' : '204px' },
    to: { height: isRollOpened ? '204px' : '0px' },
    config: { duration: 300 },
  });

  const hover1 = useSpring({
    from: { opacity: hovered1 || selectedPage === 0 ? 0 : 1 },
    to: { opacity: hovered1 || selectedPage === 0 ? 1 : 0 },
    config: { duration: 300 },
  });
  const hover2 = useSpring({
    from: { opacity: hovered2 || selectedPage === 1 ? 0 : 1 },
    to: { opacity: hovered2 || selectedPage === 1 ? 1 : 0 },
    config: { duration: 300 },
  });
  const hover3 = useSpring({
    from: { opacity: hovered3 || selectedPage === 2 ? 0 : 1 },
    to: { opacity: hovered3 || selectedPage === 2 ? 1 : 0 },
    config: { duration: 300 },
  });
  const hover4 = useSpring({
    from: { opacity: hovered4 || selectedPage === 3 ? 0 : 1 },
    to: { opacity: hovered4 || selectedPage === 3 ? 1 : 0 },
    config: { duration: 300 },
  });

  return (
    // <BrowserRouter>/
    <>
      <div className={HeaderStyle.whiteMenuBar}></div>
      <header className={HeaderStyle.header}>
        <div className={HeaderStyle.headerSearch}>
          {/* <Link to='/' className={HeaderStyle.linktoMain}> */}
          {/* <animated.div style={props} onClick={() => setOnClicked(!onClicked)}>
              <img src={MainLogo} alt="MainLogo"  className={HeaderStyle.MainLogo}/>
            </animated.div> */}
          <div className={HeaderStyle.Logo}>
            <Link to="/" className={HeaderStyle.naturaLogo}>
              <animated.div style={props} onClick={() => setOnClicked(!onClicked)}>
                <img src={MainLogo} alt="MainLogo" className={HeaderStyle.MainLogo} />
              </animated.div>
              {/* NATURA */}
              <img src={MainLogo2} alt="MainLogo" className={HeaderStyle.MainLogo2} />
              {/* <span style={{ marginTop: '7px' }}>NATURA</span> */}
            </Link>
          </div>
          <div className={HeaderStyle.search}>
            <Search />
          </div>
          {/* <div className={HeaderStyle.Icons}>
            <Link to="/mypage" style={{ marginRight: '8px' }}>
              <img src={logo} alt="logo" className={HeaderStyle.logo} />
            </Link>
            <Link to="/chat">
              <img src={ChatIcon} alt="menuIcon" className={HeaderStyle.ChatIcon} />
            </Link>
          </div> */}
          <div className={HeaderStyle.Icons}>
            <Link to="/mypage">
              <img src={logo} alt="logo" className={HeaderStyle.logo} />
            </Link>
            <Link to="/chat">
              <img src={ChatIcon} alt="menuIcon" className={HeaderStyle.ChatIcon} />
            </Link>
          </div>
        </div>
        {/* <div className={HeaderStyle.collapsingPart}> */}
        <hr className={HeaderStyle.headerHr} />
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
        <hr className={HeaderStyle.headerHr} />
      </header>

      <div className={HeaderStyle.menuContainer}>
        <nav className={HeaderStyle.Menubar}>
          <Link to="/AllCategories">
            <div className={HeaderStyle.menubarComponents}>
              <div className={HeaderStyle.seeAllMenu}>
                <img src={menuIcon} alt="menuIcon" className={HeaderStyle.menuIcon} />
                전체 카테고리
              </div>
            </div>
          </Link>
          <Link
            to="/adopt"
            style={{ marginTop: '8px' }}
            onMouseOver={() => setHovered1(true)}
            onMouseOut={() => setHovered1(false)}
          >
            <div className={HeaderStyle.menubarComponents}>동물분양</div>
            <animated.div style={hover1} className={HeaderStyle.dot} />
          </Link>
          <Link
            to="/community"
            style={{ marginTop: '8px' }}
            onMouseOver={() => setHovered2(true)}
            onMouseOut={() => setHovered2(false)}
          >
            <div className={HeaderStyle.menubarComponents}>커뮤니티</div>
            <animated.div style={hover2} className={HeaderStyle.dot} />
          </Link>
          <Link
            to="/donation"
            style={{ marginTop: '8px' }}
            onMouseOver={() => setHovered3(true)}
            onMouseOut={() => setHovered3(false)}
          >
            <div className={HeaderStyle.menubarComponents}>모금</div>
            <animated.div style={hover3} className={HeaderStyle.dot} />
          </Link>
          <Link
            to="/aboutus"
            style={{ marginTop: '8px' }}
            onMouseOver={() => setHovered4(true)}
            onMouseOut={() => setHovered4(false)}
          >
            <div className={HeaderStyle.menubarComponents}>ABOUT US</div>
            <animated.div style={hover4} className={HeaderStyle.dot} />
          </Link>
        </nav>
        {/* <animated.div style={roll} className={HeaderStyle.rollBar}>
          <div className={HeaderStyle.rollContainer}>
            <div style={{ width: '100%', height: '100%', backgroundColor: '#13B861' }}></div>
            <div className={HeaderStyle.rollBox}>
              조류<br></br>파충류<br></br>설치류<br></br>양서류<br></br>곤충류<br></br>포유류<br></br>절지동물
              <br></br>
              기타
            </div>
            <div className={HeaderStyle.rollBox}></div>
            <div className={HeaderStyle.rollBox}>
              모금 참여<br></br>함께하는 파트너
            </div>
            <div className={HeaderStyle.rollBox}></div>
          </div>
        </animated.div> */}
      </div>
    </>
  );
}
export default Header;
