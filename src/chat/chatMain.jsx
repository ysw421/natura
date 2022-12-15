import chatMainStyles from './chatMain.module.css';
// import AiOutlineCheckCircle from 'react-icons/ai';
import { AiOutlineCheckCircle, AiOutlineFileImage } from 'react-icons/ai';
import { BsPatchQuestion, BsEmojiSmile } from 'react-icons/bs';
import { GrDocumentText } from 'react-icons/gr';
import { useState, useRef, useEffect } from 'react';

const Logo = () => {
  return (
    <div className={chatMainStyles.logoContainer}>
      <img id={chatMainStyles.logo1} src="images/MainLogo.png" alt="logo"></img>
      <img id={chatMainStyles.logo2} src="images/mainLogo2.png" alt="logo"></img>
    </div>
  );
};

const LeftBar = (props) => {
  return (
    <div id={chatMainStyles.leftBar}>
      <center>
        <img
          id={chatMainStyles.profile1}
          src="images/MainLogo.png"
          alt="profile1"
          onClick={() => props.setChat(0)}
        ></img>
        <img
          id={chatMainStyles.profile2}
          src="images/chat/profile/cat.png"
          alt="profile2"
          onClick={() => props.setChat(1)}
        ></img>
        <img
          id={chatMainStyles.profile3}
          src="images/chat/profile/tiger.png"
          alt="profile3"
          onClick={() => props.setChat(2)}
        ></img>
      </center>
    </div>
  );
};

const SideBar = (props) => {
  return (
    <div id={chatMainStyles.sideBar}>
      <p id={chatMainStyles.title}>나뚜라 채팅</p>
      <div className={chatMainStyles.sideBarHr}></div>
      <div id={chatMainStyles.massageContainer}>
        <div id={chatMainStyles.massageContainer2}>
          <p id={chatMainStyles.massage}>안 읽은 메시지 보기</p>
          <AiOutlineCheckCircle id={chatMainStyles.checked} />
        </div>
      </div>
      <div className={chatMainStyles.sideBarHr}></div>
      <div
        className={`${chatMainStyles.chatContainer} ${props.chat === 0 && chatMainStyles.selectedChatContainer}`}
        onClick={() => props.setChat(0)}
      >
        <img id={chatMainStyles.chat} src="images/MainLogo.png" alt="profile1"></img>
        <div style={{ paddingLeft: '15px' }}>
          <p id={chatMainStyles.chatTitle}>나뚜라</p>
          <p id={chatMainStyles.chatSub}></p>
        </div>
      </div>
      <div className={chatMainStyles.sideBarHr}></div>

      <div
        className={`${chatMainStyles.chatContainer} ${props.chat === 1 && chatMainStyles.selectedChatContainer}`}
        onClick={() => props.setChat(1)}
      >
        <img id={chatMainStyles.chat} src="images/chat/profile/cat.png" alt="profile2"></img>
        <div style={{ paddingLeft: '15px' }}>
          <p id={chatMainStyles.chatTitle}>나는 고양이</p>
          <p id={chatMainStyles.chatSub}>저는 앵무새가 제일 좋아요!</p>
        </div>
      </div>
      <div className={chatMainStyles.sideBarHr}></div>

      <div
        className={`${chatMainStyles.chatContainer} ${props.chat === 2 && chatMainStyles.selectedChatContainer}`}
        onClick={() => props.setChat(2)}
      >
        <img id={chatMainStyles.chat} src="images/chat/profile/tiger.png" alt="profile3"></img>
        <div style={{ paddingLeft: '15px' }}>
          <p id={chatMainStyles.chatTitle}>호랑이</p>
          <p id={chatMainStyles.chatSub}>으르렁!!!</p>
        </div>
      </div>
      <div className={chatMainStyles.sideBarHr}></div>
      <div style={{ width: '100%', height: '156px' }}></div>
      <div className={chatMainStyles.sideBarHr}></div>

      <div id={chatMainStyles.massageContainer} style={{ paddingLeft: '173px' }}>
        <div id={chatMainStyles.question}>
          <p id={chatMainStyles.massage}>자주 묻는 질문</p>
          <BsPatchQuestion />
        </div>
      </div>
    </div>
  );
};

const ChatMe = (props) => {
  return (
    <div style={{ width: '100%', display: 'table' }}>
      <div className={chatMainStyles.me}>{props.chat}</div>
    </div>
  );
};

const ChatOther = (props) => {
  return (
    <div style={{ width: '100%', display: 'table' }}>
      <div className={chatMainStyles.otherImg}>
        <img id={chatMainStyles.chat} src={props.img} alt="profile2"></img>
        <div className={chatMainStyles.other}>{props.chat}</div>
      </div>
    </div>
  );
};

const Chat1 = () => {
  return (
    <div>
      <ChatMe chat="키우시는 고양이가 너무 귀엽네요!" />
      <ChatMe chat="우와, 코카투 앵무새도 키우시네요!" />
      <ChatMe chat="어디서 코카투 앵무새를 분양하셨나요?" />
      <ChatOther img="images/chat/profile/cat.png" chat="고마워요 ㅎㅎ" />
      <ChatOther img="images/chat/profile/cat.png" chat="코카투 앵무새는 나뚜라에서 분양하였어요!" />
      <ChatOther img="images/chat/profile/cat.png" chat="나뚜라와 코카투 앵무새 덕분에 하루하루가 특별하네요 ㅎㅎ" />
    </div>
  );
};
const Chat2 = () => {
  return (
    <div>
      <ChatOther img="images/chat/profile/tiger.png" chat="으르렁!" />
      <ChatMe chat="안녕하세요!" />
      <ChatOther img="images/chat/profile/tiger.png" chat="나뚜라 구경하면 안 잡아먹지!" />
      <ChatMe chat="지금도 보고 있는걸요." />
      <ChatMe chat="다양한 동물을 만나볼 수 있는 나뚜라!" />
      <ChatOther img="images/chat/profile/tiger.png" chat="지금 방문하세요." />
    </div>
  );
};

const Chat0 = (props) => {
  return (
    <div>
      {Array.from(props.chatting.keys()).map((key, index) => {
        if (props.chatting.get(key).isMe) {
          return <ChatMe chat={props.chatting.get(key).chat} key={key} />;
        } else {
          return <ChatOther img={props.chatting.get(key).img} chat={props.chatting.get(key).chat} key={key} />;
        }
      })}
    </div>
  );
};

const Chat = (props) => {
  const newChatting = new Map();
  const [chatting, setChatting] = useState(newChatting);
  const [text, setText] = useState('');
  const [chatId, setChatId] = useState(0);
  const scrollRef = useRef();

  const chatEx = (props) => {
    if (text === props.a) {
      setChatId((e) => e + 1);
      setChatting((q) => {
        return new Map(q).set(
          {
            isMe: true,
            chat: text,
          },
          {
            isMe: false,
            img: 'images/MainLogo.png',
            chat: props.b,
          }
        );
      });
    }
  };

  const btnOnClick = () => {
    setChatId((e) => e + 1);
    setChatting((q) => {
      return new Map(q).set(String(chatId), {
        isMe: true,
        chat: text,
      });
    });
    // chatEx({ a: '안녕하세요!', b: '안녕하세요! 반갑습니다.' });
    chatEx({ a: '안녕', b: '안녕하세요! 반갑습니다.' });
    chatEx({
      a: '안녕하세요!',
      b: '반갑습니다! 무엇을 도와드릴까요?\n 무엇이 필요하세요?(ex. 동물 검색,  about us, 나뚜라의 의미)',
    });
    chatEx({ a: '동물 검색', b: `검색창에서 '코카투 앵무새'를 검색해주세요!` });
    chatEx({ a: 'about us', b: '메인 화면에서 about us를 눌러주세요!' });
    chatEx({ a: '나뚜라의 의미', b: '나뚜라는 아름다운 조화의 본래 가치를 수호하고자 하는 의미입니다!' });
    setText('');
  };

  const textOnChange = (e) => {
    setText(e.target.value);
    // if (e.key === 'Enter') {
    //   btnOnClick();
    // } else {
    // }
  };

  useEffect(() => {
    // scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    // scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    // scrollRef의 element위치로 스크롤 이동 behavior는 전환 에니메이션의 정의
  }, [chatting]);
  return (
    <div style={{ display: 'grid', gridAutoRows: '466px 135px' }}>
      <div className={chatMainStyles.mainChatContainer} ref={scrollRef}>
        <div style={{ width: '100%', height: '20px' }}></div>
        <div className={chatMainStyles.chatHr}></div>
        <div className={chatMainStyles.day}>2022년 11월 16일</div>
        <div style={{ width: '100%', height: '20px' }}></div>
        {props.chat === 1 && <Chat1 />}
        {props.chat === 2 && <Chat2 />}
        {props.chat === 0 && <Chat0 chatting={chatting} />}
      </div>
      <div className={chatMainStyles.chatBoxContainer}>
        <div className={chatMainStyles.chatBox}>
          <textarea value={text} className={chatMainStyles.chatMassageBox} onChange={textOnChange}></textarea>
          <div className={chatMainStyles.chatBoxBottom}>
            <AiOutlineFileImage />
            <BsEmojiSmile />
            <GrDocumentText />
            <div
              className={`${chatMainStyles.chatBoxBtn} ${text.length !== 0 && chatMainStyles.chatBoxBtnShow}`}
              onClick={text.length !== 0 && btnOnClick}
            >
              전송
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function ChatMain() {
  const [chat, setChat] = useState(1);

  return (
    <div className={chatMainStyles.chatMain}>
      <div style={{ width: '100%', height: '20px' }}></div>
      <div style={{ width: '100%', height: '100%', paddingLeft: '28px' }}>
        <Logo />
      </div>
      <div style={{ width: '100%', height: '26px' }}></div>
      <div id={chatMainStyles.topHr}></div>
      <div className={chatMainStyles.mainContainer}>
        <div className={chatMainStyles.mainHr}></div>
        <LeftBar setChat={setChat} />
        <div id={chatMainStyles.leftHr}></div>
        <SideBar chat={chat} setChat={setChat} />
        <div id={chatMainStyles.leftHr2}></div>
        <Chat chat={chat} />
        <div className={chatMainStyles.mainHr}></div>
      </div>
    </div>
  );
}

export default ChatMain;
