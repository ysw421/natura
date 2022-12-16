import React from 'react';
import Style from './form.module.css';
import SignatureCanvas from 'react-signature-canvas';

// / import formImg from './formImg.png';

function form() {
  return (
    <form className={Style.mainContainer}>
      {/* <input type="text" /> */}
      {/* <input type="submit" /> */}
      <div style={{ width: '100%', height: '30px' }}></div>
      <div id={Style.title}>여기서 분양 서류를 작성하세요!!</div>
      <img id={Style.img} src="/images/form/form2.jpg" alt="form" />
      <div id={Style.title}>여기서 서명하세요!!</div>
      <div id={Style.canvas}>
        <SignatureCanvas penColor="black" canvasProps={{ width: 500, height: 200, className: Style.sigCanvas }} />
      </div>
      <div id={Style.nextBtn}>다음</div>
    </form>
  );
}
export default form;
