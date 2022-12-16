import React from 'react';
import styles from './form.module.css';
// import formImg from './formImg.png';

function form() {
  return (
    <form className={styles.mainContainer}>
      {/* <input type="text" /> */}
      {/* <input type="submit" /> */}
      <div style={{ width: '100%', height: '30px' }}></div>
      <div id={styles.title}>여기서 분양 서류를 작성하세요!!</div>
      <img id={styles.img} src="/images/form/form2.jpg" alt="form" />
    </form>
  );
}
export default form;
