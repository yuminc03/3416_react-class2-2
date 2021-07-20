import React, {useState} from 'react';
import './App.css';

function App() {
  // let posts = ['즐거운 React시간! ✨', 'JavaScript를 배웁시다 🔔', 'Node.js 시간입니다 🎇'];
  // let days = ["5월 16일 발행", "7월 11일 발행", "7월 20일 발행"];
  let [title, setTitle] = useState(['즐거운 React시간! ✨', 'JavaScript를 배웁시다 🔔', 'Node.js 시간입니다 🎇']);
  let [day, setDay] = useState(['5월 16일 발행', '7월 11일 발행', '7월 20일 발행']);
  //let posts = '스포츠 관련';

  let [likeBtn, setlikeBtn] = useState(0);

  const increase = () => {
    setlikeBtn(likeBtn + 1);
  }
  return (
    <div className="App">
      <div className="black-nav">
        <div>Yumin's Blog</div>
      </div>
      <div className="list">
        <h3>{title[0]}</h3><span onClick={increase}>👍</span> {likeBtn}
        <p>{day[0]}</p>
        <hr/>
        <h3>{title[1]}</h3><span onClick={increase}>👍</span> {likeBtn}
        <p>{day[1]}</p>
        <hr/>
        <h3>{title[2]}</h3><span onClick={increase}>👍</span> {likeBtn}
        <p>{day[2]}</p>
        {/* <h3>{posts}</h3>
        <p>2월 17일 발행</p> */}
        <hr/>
      </div>
    </div>
  );
}

export default App;
