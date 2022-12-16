import styles from './dog.module.css';

function Dog() {
  return (
    <div>
      <img src="/images/dog/back.png" alt="back" id={styles.back}></img>
    </div>
  );
}

export default Dog;
