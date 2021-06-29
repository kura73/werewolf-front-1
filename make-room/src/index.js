import React from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";
import './index.css';

import { useState } from "https://cdn.skypack.dev/react";

function RoomMake {
  const[roomName, setRoomName] = useState("");
  const[peopleLimid, setPeopleLimid] = useState(10);
  const[passwordExsit, setPasswordExsit] = useState();
  const[password, setPassword] = useState("");
  const[intro, setIntro] = useState("");
  
  //作成ボタンのクリック時動作
  const hundleClickMake = () => {
    const fd = new FormData();
    fd.set("roomName", setRoomName);
    fd.set("peopleLimid", setPeopleLimid);
    fd.set("passwordExsit", setPasswordExsit);
    fd.set("password", setPassword);
    fd.set("intro", setIntro);
    
    //サーバに送信
    fetch("/gameSettings-registry", {
      method: "PUT",
      body: fd
    })
    .then((response) => {
      const status = response.status;
      console.log(status);
    })
    .catch((error) => {
      console.error(error);
    });
  }
 
  
  render() {
    return (
      <div className="container">
        <div className="center-area">
          <div className="box1">
            <div className="statu">
              部屋設定
            </div>
            <div className="box2">
              <div>
                部屋の名前：
                <input id="roomName" value={roomName} onChange={(event) => {setRoomName(event.target.value)}} />
              </div>
              <div>
                人数制限　：　　　
                <select id="peopleLimid" value={peopleLimid} onChange={(event) => {setPepleLimid(event.target.value)}}>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10" selected>10</option>
                </select>
              </div>
              <div>
                鍵の部屋　：
                <input type="checkbox" id="passwordExsit" value="1"  checked={this.state.confirm === "1"} onChange={(event) => {setPasswordExsit(event.target.value)}}  /* ←ココ！！　*/ /> 
              </div>
              <div>
                パスワード：
                <input id="password" value={password} onChange={(event) => {setPassword(event.target.value)}} />
              </div>
              <div>
                <p><u>紹介文</u></p>
                <textarea id="intro" rows="10" cols="34" value={intro} onChange={(event) => {setIntro(event.target.value)}} />
              </div>
            </div>
            <div className="Buttons">
              <button className="box3" onClick={hundleClickMake} type="button">OK</button>
              <button className="box3" onClick ={hundleClickBack} type="button">キャンセル</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <RoomMake />,
  document.getElementById('root')
);
