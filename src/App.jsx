import { useState } from 'react';

import AppStyle from './App.module.css';

import Header from './components/Header';
import Contents from './components/Contents';
import Donation from './donations/donationMain';
import AboutUs from './aboutus/AboutusMain';
import AllCategories from './allCategories/categoryMain';
import AdoptMain from './adopt/adopMain';
import Community from './community/communityMain';
import Chat from './chat/chatMain';
import Kokatoo from './adoptionPosts/kokatoo';
import NaturaHouse from './adoptionPosts/NaturaHouse';
// import {RemoveScroll} from 'react-remove-scroll';
import { atom, useAtom } from 'jotai';
import { pageAtom } from './components/Header';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Scrollbar from 'smooth-scrollbar';

// smooth scroll 설정
// scrollbar.init(document.querySelector('#smooth-scroll'));
// Scrollbar.init(document.querySelector('#mainContainer'));

const Page_1 = function Page_1() {
  const [selectedPage, setSelectedPage] = useAtom(pageAtom);
  setSelectedPage(-1);
  return <></>;
};

const Page0 = function Page0() {
  const [selectedPage, setSelectedPage] = useAtom(pageAtom);
  setSelectedPage(0);
  return <></>;
};

const Page1 = function Page1() {
  const [selectedPage, setSelectedPage] = useAtom(pageAtom);
  setSelectedPage(1);
  return <></>;
};

const Page2 = function Page2() {
  const [selectedPage, setSelectedPage] = useAtom(pageAtom);
  setSelectedPage(2);
  return <></>;
};

const Page3 = function Page3() {
  const [selectedPage, setSelectedPage] = useAtom(pageAtom);
  setSelectedPage(3);
  return <></>;
};

function App() {
  const [selectedPage, setSelectedPage] = useAtom(pageAtom);

  return (
    // <RemoveScroll>
    <BrowserRouter>
      <div className={AppStyle.wrapper}>
        {/* dont display header when page is tutorial */}
        {/* <Routes> */}
        {/* <Route path="/" element={<Header />} /> */}
        {/* <Route path="/tutorial" element={<></>} /> */}
        {/* </Routes> */}

        {/* <Header/> */}
        {/* < img src={Banner} alt="banner" className={AppStyle.Banner} /> */}

        <Routes>
          <Route
            path="/"
            element={
              <div style={{ width: '1000px' }}>
                <Page_1 />
                <Header />
                <Contents />
              </div>
            }
          />
          <Route
            path="/donation"
            element={
              <div style={{ width: '1000px' }}>
                <Page2 />
                <Donation />
              </div>
            }
          />
          <Route
            path="/aboutus"
            element={
              <div style={{ width: '1000px' }}>
                <Page3 />
                <AboutUs />
              </div>
            }
          />
          <Route
            path="/allCategories"
            element={
              <div style={{ width: '1000px' }}>
                <Page_1 />
                <AllCategories />
              </div>
            }
          />
          <Route
            path="/adopt"
            element={
              <div style={{ width: '1000px' }}>
                <Page0 />
                <Header />
                <AdoptMain />
              </div>
            }
          />
          <Route
            path="/community"
            element={
              <div style={{ width: '1000px' }}>
                <Page1 />
                <Header />
                <Community />
              </div>
            }
          />
          <Route
            path="/chat"
            element={
              <div style={{ width: '1000px' }}>
                <Page_1 />
                <Header hideMenu="hide" />
                <Chat />
              </div>
            }
          />
          <Route
            path="/adopt/kokatoo"
            element={
              <div style={{ width: '1000px' }}>
                <Page0 />
                <Header />
                <Kokatoo />
              </div>
            }
          />
          {/* <Route path='/allCategories' />/ */}
          <Route
            path="/adopt/kokatoo/NaturaHouse"
            element={
              <div style={{ width: '1000px' }}>
                <Page0 />
                <Header />
                <NaturaHouse />
              </div>
            }
          />
          <Route
            path="/adopt/kokatoo/NotYet"
            element={
              <div style={{ width: '1000px' }}>
                <Page0 />
                <Header />
                <NaturaHouse />
              </div>
            }
          />
          {/* <Route path ='/login' element={<div><Login/></div>}/> */}
          {/* <Route path='/tutorial' element={<Tutorial/>} /> */}
          {/* <Route path='/tutorial/result' element={<SearchResult/>} /> */}
          {/* <Route path='/tutorial/result/NaturaHouse' element={<TutorialNaturaHouse/>} /> */}
          {/* <Route path='/tutorial/result/NaturaHouse/TutorialChat' element={<TutorialChat/>} /> */}
          {/* <Route path='/tutorial/result/NaturaHouse/TutorialChat/ChatBot' element={<TutorialChatBot/>} /> */}
        </Routes>
      </div>
    </BrowserRouter>
    // <RemoveScroll/>
  );
}

export default App;
