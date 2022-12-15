import HeaderStyle from './donationHeader.module.css';
import { useSpring, animated } from '@react-spring/web';
import { useState } from 'react';

function DonationHeader() {
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [selected, setSelected] = useState(0);

  const hover1 = useSpring({
    from: { opacity: hovered1 || selected === 0 ? 0 : 1 },
    to: { opacity: hovered1 || selected === 0 ? 1 : 0 },
    config: { duration: 300 },
  });
  const hover2 = useSpring({
    from: { opacity: hovered2 || selected === 1 ? 0 : 1 },
    to: { opacity: hovered2 || selected === 1 ? 1 : 0 },
    config: { duration: 300 },
  });
  const hover3 = useSpring({
    from: { opacity: hovered3 || selected === 2 ? 0 : 1 },
    to: { opacity: hovered3 || selected === 2 ? 1 : 0 },
    config: { duration: 300 },
  });

  return (
    <header className={HeaderStyle.header}>
      <li className={HeaderStyle.menuBar}>
        <a
          // href="#"
          className={HeaderStyle.inProgress}
          onMouseOver={() => setHovered1(true)}
          onMouseOut={() => setHovered1(false)}
          onClick={() => setSelected(0)}
          style={{ color: selected === 0 ? '#000' : '' }}
        >
          모금 진행 중<animated.div style={hover1} className={HeaderStyle.dot}></animated.div>
        </a>
        <a
          // href="#"
          className={HeaderStyle.finished}
          onMouseOver={() => setHovered2(true)}
          onMouseOut={() => setHovered2(false)}
          onClick={() => setSelected(1)}
          style={{ color: selected === 1 ? '#000' : '' }}
        >
          모금 완료<animated.div style={hover2} className={HeaderStyle.dot}></animated.div>
        </a>
        <a
          // href="#"
          className={HeaderStyle.review}
          onMouseOver={() => setHovered3(true)}
          onMouseOut={() => setHovered3(false)}
          onClick={() => setSelected(2)}
          style={{ color: selected === 2 ? '#000' : '' }}
        >
          모금 후기<animated.div style={hover3} className={HeaderStyle.dot}></animated.div>
        </a>
      </li>
    </header>
  );
}
export default DonationHeader;
