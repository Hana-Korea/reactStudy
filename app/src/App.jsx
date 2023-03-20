import First from "./components/First";
import Intro from "./components/Intro";
import Clock from "./components/Clock";
import Login from "./components/Login";
import { useState } from "react";
function App() {
  const [글제목, 글제목변경] = useState(["나베", "주하", "거봉"]);
  const [good, setGood] = useState(0);
  return (
    <div>
      <div
        onClick={() => {
          let copy = [...글제목].sort();
          글제목변경(copy);
        }}
      >
        {글제목[0]}
      </div>
      <div>{글제목[1]}</div>
      <div>{글제목[2]}</div>
      <Modal />
      <Clock timezone="Asia/Seoul" newTZ="Asia / Seoul" />
      <Clock timezone="Asia/Beijing" newTZ="Asia / Seoul" />
      <Login />
    </div>
  );
}
function Modal() {
  return (
    <div>
      <div>제목</div>
      <div>내용</div>
    </div>
  );
}

export default App;
