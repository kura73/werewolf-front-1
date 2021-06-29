import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { useState } from 'react';

function GameSet () {
  const[villagersNum, setVillagersNum] = useState(4);
  const[seersNum, setSeersNum] = useState(1);
  const[necromancersNum, setNecromancersNum] = useState(1);
  const[knightsNum, setKnightsNum] = useState(1);
  const[huntersNum, setHuntersNum] = useState(0);
  const[blackKnightsNum, setBlackKnightsNum] = useState(0);
  const[freemasonariesNum, setFreemasonariesNum] = useState(0);
  const[bakersNum, setBakersNum] = useState(0);
  const[werewolvesNum, setWerewolvesNum] = useState(2);
  const[madmenNum, setMadmenNum] = useState(0);
  const[traitorsNum, setTraitorsNum] = useState(0);
  const[foxSpiritsNum, setFoxSpiritsNum] = useState(0);
  const[foolsNum, setFoolsNum] = useState(0);
  const[phantomThievesNum, setPhantomThievesNum] = useState(0);
  const[discussionTime, setDiscussionTime] = useState(60);
  const[votingTime, setvotingTime] = useState(65);
  const[nightTime, setNightTime] = useState(60);
  const[willTime, setWillTime] = useState(60);
  const[tieVoteOption, setTieVoteOption] = useState(0);
  const[werewolfChatSwitch, setWerewolfChatSwitch] = useState(1);
  const[firstNightSee, setFirstNightSee] = useState(2);
  const[canSeeMissingPosition, setCanSeeMissingPosition] = useState("false");
  const[isSecretBallot, setIsSecretBallot] = useState("false");
  const[canContinuousGuard, setCanContinuousGuard] = useState("false");
  const[isRandomStealing, setIsRandomStealing] = useState("true");
  const[isOneNight, setIsOneNight] = useState("false");

/*
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      a: []
    };import React from 'react';
import ReactDOM from 'react-dom';import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { useState } from 'react';

function GameSet () {
  const[villagersNum, setVillagersNum] = useState(4);
  const[seersNum, setSeersNum] = useState(1);
  const[necromancersNum, setNecromancersNum] = useState(1);
  const[knightsNum, setKnightsNum] = useState(1);
  const[huntersNum, setHuntersNum] = useState(0);
  const[blackKnightsNum, setBlackKnightsNum] = useState(0);
  const[freemasonariesNum, setFreemasonariesNum] = useState(0);
  const[bakersNum, setBakersNum] = useState(0);
  const[werewolvesNum, setWerewolvesNum] = useState(2);
  const[madmenNum, setMadmenNum] = useState(0);
  const[traitorsNum, setTraitorsNum] = useState(0);
  const[foxSpiritsNum, setFoxSpiritsNum] = useState(0);
  const[foolsNum, setFoolsNum] = useState(0);
  const[phantomThievesNum, setPhantomThievesNum] = useState(0);
  const[discussionTime, setDiscussionTime] = useState(60);
  const[votingTime, setvotingTime] = useState(65);
  const[nightTime, setNightTime] = useState(60);
  const[willTime, setWillTime] = useState(60);
  const[tieVoteOption, setTieVoteOption] = useState(0);
  const[werewolfChatSwitch, setWerewolfChatSwitch] = useState(1);
  const[firstNightSee, setFirstNightSee] = useState(2);
  const[canSeeMissingPosition, setCanSeeMissingPosition] = useState("false");
  const[isSecretBallot, setIsSecretBallot] = useState("false");
  const[canContinuousGuard, setCanContinuousGuard] = useState("false");
  const[isRandomStealing, setIsRandomStealing] = useState("true");
  const[isOneNight, setIsOneNight] = useState("false");


/*
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      a: []
    };
  }
  */
 /*
  componentDidMount() {
    fetch("https://jsondata.okiba.me/v1/json/jjzmI210610024513")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  */
 /*
  //セレクトボックスのstate更新
  handleInputChange(event) {
    const target = event.target
    const name = target.name
    this.setState({
      name: target.value
    })
    console.log(this.state.name);
  }
  */
  
  const hundleClick = () => {
    const fd = new FormData();
    fd.set("villagersNum", villagersNum);
    fd.set("necromancersNum", setNecromancersNum);
    fd.set("knightsNum", setKnightsNum);
    fd.set("huntersNum", setHuntersNum);
    fd.set("blackKnightsNum", setBlackKnightsNum);
    fd.set("freemasonariesNum", setFreemasonariesNum);
    fd.set("bakersNum", setBakersNum);
    fd.set("werewolvesNum", setWerewolvesNum);
    fd.set("madmenNum", setMadmenNum);
    fd.set("traitorsNum", setTraitorsNum);
    fd.set("foxSpiritsNum", setFoxSpiritsNum);
    fd.set("foolsNum", setFoolsNum);
    fd.set("phantomThievesNum", setPhantomThievesNum);
    fd.set("discussionTime", setDiscussionTime);
    fd.set("votingTime", setvotingTime);
    fd.set("nightTime", setNightTime);
    fd.set("willTime", setWillTime);
    fd.set("tieVoteOption", setTieVoteOption);
    fd.set("werewolfChatSwitch", setWerewolfChatSwitch);
    fd.set("firstNightSee", setFirstNightSee);
    fd.set("canSeeMissingPosition", setCanSeeMissingPosition);
    fd.set("isSecretBallot", setIsSecretBallot);
    fd.set("canContinuousGuard", setCanContinuousGuard);
    fd.set("isRandomStealing", setIsRandomStealing);
    fd.set("isOneNight", setIsOneNight);
    
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

  const setBeginnerSettings = () => {

  }
  
  return (
    <div className="container">
      <div className="left-area">
        <h3>役職設定</h3>
        <div>
          村人の数　　　
          <select id="villagersNum" value={villagersNum} onChange={(event) => {setVillagersNum(event.target.value)}}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4" selected>4</option>
              <option value="5">5</option>
              <option value="6">6</option>
          </select>
        </div>
        <div>
          占い師の数　　
          <select id="seersNum" required value={seersNum} onChange={(event) => setSeersNum(event.target.value)}>
              <option value="0">0</option>
              <option value="1" selected>1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
          </select>
        </div>
        <div>
          霊媒師の数　　
          <select name="necromancersNum" required value={necromancersNum} onChange={(event) => setNecromancersNum(event.target.value)}>
              <option value="0">0</option>
              <option value="1" selected>1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
          </select>
        </div>
        <div>
          騎士の数　　　
          <select id="knightsNum" required value={knightsNum} onChange={(event) => {setKnightsNum(event.target.value)}}>
              <option value="0">0</option>
              <option value="1" selected>1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
          </select>
        </div>
        <div>
          ハンターの数　
          <select id="huntersNum" required value={huntersNum} onChange={(event) => {setHuntersNum(event.target.value)}}>
              <option value="0" selected>0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
          </select>
        </div>
        <div>
          黒騎士の数　　
          <select id="blackKnightsNum" required value={blackKnightsNum} onChange={(event) => {setBlackKnightsNum(event.target.value)}}>
              <option value="0" selected>0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
          </select>
        </div>
        <div>
          共有者の数　　
          <select id="freemasonariesNum" required value={freemasonariesNum} onChange={(event) => {setFreemasonariesNum(event.target.value)}}>
              <option value="0" selected>0</option>
              <option value="2">2</option>
          </select>
        </div>
        <div>
          パン屋の数　　
          <select id="bakersNum" required value={bakersNum} onChange={(event) => {setBakersNum(event.target.value)}}>
              <option value="0" selected>0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
          </select>
        </div>
        <div>
          人狼の数　　　
          <select id="werewolvesNum" required value={werewolvesNum} onChange={(event) => {setWerewolvesNum(event.target.value)}}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2" serected>2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
          </select>
        </div>
        <div>
          狂人の数　　　
          <select id="madmenNum" required value={madmenNum} onChange={(event) => {setMadmenNum(event.target.value)}}>
              <option value="0" selected>0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
          </select>
        </div>
        <div>
          背信者の数　　
          <select id="traitorsMum" required value={villagersNum} onChange={(event) => {setTraitorsMum(event.target.value)}}>
              <option value="0" selected>0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
          </select>
        </div>
        <div>
          妖狐の数　　　
          <select id="foxSpiritsNum" required value={FoxSpiritsNum} onChange={(event) => {setFoxSpiritsNum(event.target.value)}}>
              <option value="0" selected>0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
          </select>
        </div>
        <div>
          吊人の数　　　
          <select id="foolsNum" required value={FoolsNum} onChange={(event) => {setFoolsNum(event.target.value)}}>
              <option value="0" selected>0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
          </select>
        </div>
        <div>
          怪盗の数　　　
          <select id="phantomThievesNum" required value={phantomThievesNum} onChange={(event) => {setPhantomThievesNum(event.target.value)}}>
              <option value="0" selected>0</option>
              <option value="1">1</option>
          </select>
        </div>
      </div>
      <div className="center-area">
        <h3>ゲーム設定</h3>
        <div className="dropdown-list">
          議論時間
          <select id="discussionTime" required value={discussionTime} onChange={(event) => {setDiscussionTime(event.target.value)}}>
            <option value="" hidden disabled ></option>
            <option value="60" selected>60</option>
            <option value="120">120</option>
          </select>
        </div>
        <div>
          投票時間
          <select id="votingTime" required value={villagersNum} onChange={(event) => {setVotingTime(event.target.value)}}>
              <option value="" hidden disabled></option>
              <option value="65" selected>65</option>
              <option value="125">125</option>
          </select>
        </div>
        <div>
          夜の時間
          <select id="nightTime" required value={villagersNum} onChange={(event) => {setNightTime(event.target.value)}}>
              <option value="" hidden disabled ></option>
              <option value="60" selected>60</option>
              <option value="120">130</option>
          </select>
        </div>
        <div>
          遺言時間
          <select id="willTime" required value={villagersNum} onChange={(event) => {setWillTime(event.target.value)}}>
              <option value="" hidden disabled></option>
              <option value="60" selected>60</option>
              <option value="120">120</option>
          </select>
        </div>
        <div>
          同数投票
          <select id="tieVoteOption" required value={villagersNum} onChange={(event) => {setTieVoteOption(event.target.value)}}>
              <option value="" hidden disabled></option>
              <option value="0" selected>ランダム処刑</option>
              <option value="1">誰も処刑されない</option>
          </select>
        </div>
        <div>
          人狼チャット
          <select id="werewolfChatSwitch" required value={villagersNum} onChange={(event) => {setWerewolfChatSwitch(event.target.value)}}>
              <option value="" hidden disabled></option>
              <option value="0">常に使えない</option>
              <option value="1" selected>夜だけ使える</option>
              <option value="2">常に使える</option>
          </select>
        </div>
        <div>
          初日占い
          <select id="firstNightSee" required value={firstNightSee} onChange={(event) => {setFirstNightSee(event.target.value)}}>
              <option value="" hidden disabled></option>
              <option value="0">初日占いあり</option>
              <option value="1">初日占いなし</option>
              <option value="2" selected>初日にランダム占い</option>
          </select>
        </div>
        <div>
        欠けてる役職占い
          <select id="canSeeMissingPosition" required value={canSeeMissingPosition} onChange={(event) => {setCanSeeMissingPosition(event.target.value)}}>
              <option value="" hidden disabled></option>
              <option value="true">欠けてる役職を占える</option>
              <option value="false" selected>欠けてる役職を占えない</option>
          </select>
        </div>
        <div>
          投票先の表示
          <select id="isSecretBallot" required value={isSecretBallot} onChange={(event) => {setIsSecretBallot(event.target.value)}}>
              <option value="" hidden disabled></option>
              <option value="true">投票先を表示しない</option>
              <option value="false" selected>投票先を表示する</option>
          </select>
        </div>
        <div>
          連続ガード
          <select id="canContinuousGuard" required value={canContinuousGuard} onChange={(event) => {setCanContinuousGuard(event.target.value)}}>
              <option value="" hidden disabled></option>
              <option value="true">連続ガードあり</option>
              <option value="false" selected>連続ガードなし</option>
          </select>
        </div>
        <div>怪盗が盗むプレイヤーの指定
          <select id="isRandomStealing" required value={isRandomStealing} onChange={(event) => {setIsRandomStealing(event.target.value)}}>
              <option value="" hidden disabled></option>
              <option value="true" selected>ランダムで盗む</option>
              <option value="false">選んで盗む</option>
          </select>
        </div>
        <div>
          ワンナイト人狼
          <select id="isOneNight" required value={IsOneNight} onChange={(event) => {setIsOneNight(event.target.value)}}>
              <option value="" hidden disabled></option>
              <option value="false" selected>ワンナイト人狼OFF</option>
              <option value="true">ワンナイト人狼ON</option>
          </select>
        </div>
      </div>
      
      <div className="right-area">
        <div className="Buttons">
          <button className="box2" onClick ={setBeginnerSettings} type="button">初心者向け</button>
          <button className="box2" onClick ={setBeginnerSettings} type="button">中級者向け</button>
        </div>
        <div className="Buttons">
          <button className="box2" onClick ={setBeginnerSettings} type="button">上級者向け</button>
          <button className="box2" onClick ={setBeginnerSettings} type="button">ワンナイト</button>
        </div>
        <br/>
        <input onClick={hundleClick} type="button" value="決定" />
      </div>
    </div>
  );
}

ReactDOM.render(
  <GameSet />,
  document.getElementById('root')
);
import './index.css';

import { useState } from 'react';

function GameSet () {
  const[villagersNum, setVillagersNum] = useState(4);
  const[seersNum, setSeersNum] = useState(1);
  const[necromancersNum, setNecromancersNum] = useState(1);
  const[knightsNum, setKnightsNum] = useState(1);
  const[huntersNum, setHuntersNum] = useState(0);
  const[blackKnightsNum, setBlackKnightsNum] = useState(0);
  const[freemasonariesNum, setFreemasonariesNum] = useState(0);
  const[bakersNum, setBakersNum] = useState(0);
  const[werewolvesNum, setWerewolvesNum] = useState(2);
  const[madmenNum, setMadmenNum] = useState(0);
  const[traitorsNum, setTraitorsNum] = useState(0);
  const[foxSpiritsNum, setFoxSpiritsNum] = useState(0);
  const[foolsNum, setFoolsNum] = useState(0);
  const[phantomThievesNum, setPhantomThievesNum] = useState(0);
  const[discussionTime, setDiscussionTime] = useState(60);
  const[votingTime, setvotingTime] = useState(65);
  const[nightTime, setNightTime] = useState(60);
  const[willTime, setWillTime] = useState(60);
  const[tieVoteOption, setTieVoteOption] = useState(0);
  const[werewolfChatSwitch, setWerewolfChatSwitch] = useState(1);
  const[firstNightSee, setFirstNightSee] = useState(2);
  const[canSeeMissingPosition, setCanSeeMissingPosition] = useState("false");
  const[isSecretBallot, setIsSecretBallot] = useState("false");
  const[canContinuousGuard, setCanContinuousGuard] = useState("false");
  const[isRandomStealing, setIsRandomStealing] = useState("true");
  const[isOneNight, setIsOneNight] = useState("false");


/*
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      a: []
    };
  }
  */
 /*
  componentDidMount() {
    fetch("https://jsondata.okiba.me/v1/json/jjzmI210610024513")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  */
 /*
  //セレクトボックスのstate更新
  handleInputChange(event) {
    const target = event.target
    const name = target.name
    this.setState({
      name: target.value
    })
    console.log(this.state.name);
  }
  */
  
  const hundleClick = () => {
    const fd = new FormData();
    fd.set("villagersNum", villagersNum);
    fd.set("necromancersNum", setNecromancersNum);
    fd.set("knightsNum", setKnightsNum);
    fd.set("huntersNum", setHuntersNum);
    fd.set("blackKnightsNum", setBlackKnightsNum);
    fd.set("freemasonariesNum", setFreemasonariesNum);
    fd.set("bakersNum", setBakersNum);
    fd.set("werewolvesNum", setWerewolvesNum);
    fd.set("madmenNum", setMadmenNum);
    fd.set("traitorsNum", setTraitorsNum);
    fd.set("foxSpiritsNum", setFoxSpiritsNum);
    fd.set("foolsNum", setFoolsNum);
    fd.set("phantomThievesNum", setPhantomThievesNum);
    fd.set("discussionTime", setDiscussionTime);
    fd.set("votingTime", setvotingTime);
    fd.set("nightTime", setNightTime);
    fd.set("willTime", setWillTime);
    fd.set("tieVoteOption", setTieVoteOption);
    fd.set("werewolfChatSwitch", setWerewolfChatSwitch);
    fd.set("firstNightSee", setFirstNightSee);
    fd.set("canSeeMissingPosition", setCanSeeMissingPosition);
    fd.set("isSecretBallot", setIsSecretBallot);
    fd.set("canContinuousGuard", setCanContinuousGuard);
    fd.set("isRandomStealing", setIsRandomStealing);
    fd.set("isOneNight", setIsOneNight);
    
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

  const setBeginnerSettings = () => {

  }
  
  //ToDo　valueとonChangeを設定
  return (
    <div className="container">
      <div className="left-area">
        <h3>役職設定</h3>
        <div>
          村人の数　　　
          <select id="villagersNum" value={villagersNum} onChange={(event) => {setVillagersNum(event.target.value)}}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4" selected>4</option>
              <option value="5">5</option>
              <option value="6">6</option>
          </select>
        </div>
        <div>
          占い師の数　　
          <select id="seersNum" required value={seersNum} onChange={(event) => setSeersNum(event.target.value)}>
              <option value="0">0</option>
              <option value="1" selected>1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
          </select>
        </div>
        <div>
          霊媒師の数　　
          <select name="necromancersNum" required value={necromancersNum} onChange={(event) => setNecromancersNum(event.target.value)}>
              <option value="0">0</option>
              <option value="1" selected>1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
          </select>
        </div>
        <div>
          騎士の数　　　
          <select id="knightsNum" required value={knightsNum} onChange={(event) => {setKnightsNum(event.target.value)}}>
              <option value="0">0</option>
              <option value="1" selected>1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
          </select>
        </div>
        <div>
          ハンターの数　
          <select id="huntersNum" required value={huntersNum} onChange={(event) => {setHuntersNum(event.target.value)}}>
              <option value="0" selected>0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
          </select>
        </div>
        <div>
          黒騎士の数　　
          <select id="blackKnightsNum" required value={blackKnightsNum} onChange={(event) => {setBlackKnightsNum(event.target.value)}}>
              <option value="0" selected>0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
          </select>
        </div>
        <div>
          共有者の数　　
          <select id="freemasonariesNum" required value={freemasonariesNum} onChange={(event) => {setFreemasonariesNum(event.target.value)}}>
              <option value="0" selected>0</option>
              <option value="2">2</option>
          </select>
        </div>
        <div>
          パン屋の数　　
          <select id="bakersNum" required value={bakersNum} onChange={(event) => {setBakersNum(event.target.value)}}>
              <option value="0" selected>0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
          </select>
        </div>
        <div>
          人狼の数　　　
          <select id="werewolvesNum" required value={werewolvesNum} onChange={(event) => {setWerewolvesNum(event.target.value)}}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2" serected>2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
          </select>
        </div>
        <div>
          狂人の数　　　
          <select id="madmenNum" required value={madmenNum} onChange={(event) => {setMadmenNum(event.target.value)}}>
              <option value="0" selected>0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
          </select>
        </div>
        <div>
          背信者の数　　
          <select id="traitorsMum" required value={villagersNum} onChange={(event) => {setTraitorsMum(event.target.value)}}>
              <option value="0" selected>0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
          </select>
        </div>
        <div>
          妖狐の数　　　
          <select id="foxSpiritsNum" required value={FoxSpiritsNum} onChange={(event) => {setFoxSpiritsNum(event.target.value)}}>
              <option value="0" selected>0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
          </select>
        </div>
        <div>
          吊人の数　　　
          <select id="foolsNum" required value={FoolsNum} onChange={(event) => {setFoolsNum(event.target.value)}}>
              <option value="0" selected>0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
          </select>
        </div>
        <div>
          怪盗の数　　　
          <select id="phantomThievesNum" required value={phantomThievesNum} onChange={(event) => {setPhantomThievesNum(event.target.value)}}>
              <option value="0" selected>0</option>
              <option value="1">1</option>
          </select>
        </div>
      </div>
      <div className="center-area">
        <h3>ゲーム設定</h3>
        <div className="dropdown-list">
          議論時間
          <select id="discussionTime" required value={discussionTime} onChange={(event) => {setDiscussionTime(event.target.value)}}>
            <option value="" hidden disabled ></option>
            <option value="60" selected>60</option>
            <option value="120">120</option>
          </select>
        </div>
        <div>
          投票時間
          <select id="votingTime" required value={villagersNum} onChange={(event) => {setVotingTime(event.target.value)}}>
              <option value="" hidden disabled></option>
              <option value="65" selected>65</option>
              <option value="125">125</option>
          </select>
        </div>
        <div>
          夜の時間
          <select id="nightTime" required value={villagersNum} onChange={(event) => {setNightTime(event.target.value)}}>
              <option value="" hidden disabled ></option>
              <option value="60" selected>60</option>
              <option value="120">130</option>
          </select>
        </div>
        <div>
          遺言時間
          <select id="willTime" required value={villagersNum} onChange={(event) => {setWillTime(event.target.value)}}>
              <option value="" hidden disabled></option>
              <option value="60" selected>60</option>
              <option value="120">120</option>
          </select>
        </div>
        <div>
          同数投票
          <select id="tieVoteOption" required value={villagersNum} onChange={(event) => {setTieVoteOption(event.target.value)}}>
              <option value="" hidden disabled></option>
              <option value="0" selected>ランダム処刑</option>
              <option value="1">誰も処刑されない</option>
          </select>
        </div>
        <div>
          人狼チャット
          <select id="werewolfChatSwitch" required value={villagersNum} onChange={(event) => {setWerewolfChatSwitch(event.target.value)}}>
              <option value="" hidden disabled></option>
              <option value="0">常に使えない</option>
              <option value="1" selected>夜だけ使える</option>
              <option value="2">常に使える</option>
          </select>
        </div>
        <div>
          初日占い
          <select id="firstNightSee" required value={firstNightSee} onChange={(event) => {setFirstNightSee(event.target.value)}}>
              <option value="" hidden disabled></option>
              <option value="0">初日占いあり</option>
              <option value="1">初日占いなし</option>
              <option value="2" selected>初日にランダム占い</option>
          </select>
        </div>
        <div>
        欠けてる役職占い
          <select id="canSeeMissingPosition" required value={canSeeMissingPosition} onChange={(event) => {setCanSeeMissingPosition(event.target.value)}}>
              <option value="" hidden disabled></option>
              <option value="true">欠けてる役職を占える</option>
              <option value="false" selected>欠けてる役職を占えない</option>
          </select>
        </div>
        <div>
          投票先の表示
          <select id="isSecretBallot" required value={isSecretBallot} onChange={(event) => {setIsSecretBallot(event.target.value)}}>
              <option value="" hidden disabled></option>
              <option value="true">投票先を表示しない</option>
              <option value="false" selected>投票先を表示する</option>
          </select>
        </div>
        <div>
          連続ガード
          <select id="canContinuousGuard" required value={canContinuousGuard} onChange={(event) => {setCanContinuousGuard(event.target.value)}}>
              <option value="" hidden disabled></option>
              <option value="true">連続ガードあり</option>
              <option value="false" selected>連続ガードなし</option>
          </select>
        </div>
        <div>怪盗が盗むプレイヤーの指定
          <select id="isRandomStealing" required value={isRandomStealing} onChange={(event) => {setIsRandomStealing(event.target.value)}}>
              <option value="" hidden disabled></option>
              <option value="true" selected>ランダムで盗む</option>
              <option value="false">選んで盗む</option>
          </select>
        </div>
        <div>
          ワンナイト人狼
          <select id="isOneNight" required value={IsOneNight} onChange={(event) => {setIsOneNight(event.target.value)}}>
              <option value="" hidden disabled></option>
              <option value="false" selected>ワンナイト人狼OFF</option>
              <option value="true">ワンナイト人狼ON</option>
          </select>
        </div>
      </div>
      
      <div className="right-area">
        <div className="Buttons">
          <button className="box2" onClick ={setBeginnerSettings} type="button">初心者向け</button>
          <button className="box2" onClick ={setBeginnerSettings} type="button">中級者向け</button>
        </div>
        <div className="Buttons">
          <button className="box2" onClick ={setBeginnerSettings} type="button">上級者向け</button>
          <button className="box2" onClick ={setBeginnerSettings} type="button">ワンナイト</button>
        </div>
        <br/>
        <input onClick={hundleClick} type="button" value="決定" />
      </div>
    </div>
  );
}

ReactDOM.render(
  <GameSet />,
  document.getElementById('root')
);
  }
  */
 /*
  componentDidMount() {
    fetch("https://jsondata.okiba.me/v1/json/jjzmI210610024513")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  */
 /*
  //セレクトボックスのstate更新
  handleInputChange(event) {
    const target = event.target
    const name = target.name
    this.setState({
      name: target.value
    })
    console.log(this.state.name);
  }
  */
  //おすすめボタンのクリック時動作
  const hundleClick = () => {
    const fd = new FormData();
    fd.set("villagersNum", villagersNum);
    fd.set("seersNum", seersNum);

    //ToDoフォームデータを創る
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

  const setBeginnerSettings = () => {

  }
  
  //ToDo　valueとonChangeを設定
  return (
    <div className="container">
      <div className="left-area">
        <h3>役職設定</h3>
        <div>
          村人の数　　　
          <select id="villagersNum" value={villagersNum} onChange={(event) => {setVillagersNum(event.target.value)}}>
              <option value="0">0</option>
              <option value="1" selected>1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
          </select>
        </div>
        <div>
          占い師の数　　
          <select id="seersNum" required value={seersNum} onChange={(event) => setSeersNum(event.target.value)}>
              <option value="0">0</option>
              <option value="1" selected>1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
          </select>
        </div>
        <div>
          霊媒師の数　　
          <select name="necromancersNum" required value={necromancersNum} onChange={(event) => setNecromancersNum(event.target.value)}>
              <option value="0">0</option>
              <option value="1" selected>1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
          </select>
        </div>
        <div>
          騎士の数　　　
          <select id="knightsNum" required>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
          </select>
        </div>
        <div>
          ハンターの数　
          <select id="huntersNum" required>
              <option value="0" selected>0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
          </select>
        </div>
        <div>
          黒騎士の数　　
          <select id="blackKnightsNum" required>
              <option value="0" selected>0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
          </select>
        </div>
        <div>
          共有者の数　　
          <select id="freemasonariesNum" required>
              <option value="0" selected>0</option>
              <option value="2">2</option>
          </select>
        </div>
        <div>
          パン屋の数　　
          <select id="bakersNum" required>
              <option value="0" selected>0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
          </select>
        </div>
        <div>
          人狼の数　　　
          <select id="werewolvesNum" required>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
          </select>
        </div>
        <div>
          狂人の数　　　
          <select id="madmenNum" required>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
          </select>
        </div>
        <div>
          背信者の数　　
          <select id="traitorsMum" required>
              <option value="0" selected>0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
          </select>
        </div>
        <div>
          妖狐の数　　　
          <select id="foxSpiritsNum" required>
              <option value="0" selected>0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
          </select>
        </div>
        <div>
          吊人の数　　　
          <select id="foolsNum" required>
              <option value="0" selected>0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
          </select>
        </div>
        <div>
          怪盗の数　　　
          <select id="phantomThievesNum" required>
              <option value="0" selected>0</option>
              <option value="1">1</option>
          </select>
        </div>
      </div>
      <div className="center-area">
        <h3>ゲーム設定</h3>
        <div className="dropdown-list">
          議論時間
          <select id="discussionTime" required>
            <option value="" hidden disabled ></option>
            <option value="60" selected>60</option>
            <option value="120">120</option>
          </select>
        </div>
        <div>
          投票時間
          <select id="votingTime" required>
              <option value="" hidden disabled></option>
              <option value="65" selected>65</option>
              <option value="125">125</option>
          </select>
        </div>
        <div>
          夜の時間
          <select id="nightTime" required>
              <option value="" hidden disabled ></option>
              <option value="60" selected>70</option>
              <option value="120">130</option>
          </select>
        </div>
        <div>
          遺言時間
          <select id="willTime" required>
              <option value="" hidden disabled></option>
              <option value="60" selected>60</option>
              <option value="120">120</option>
          </select>
        </div>
        <div>
          同数投票
          <select id="tieVoteOption" required>
              <option value="" hidden disabled></option>
              <option value="0" selected>ランダム処刑</option>
              <option value="1">誰も処刑されない</option>
          </select>
        </div>
        <div>
          人狼チャット
          <select id="werewolfChatSwitch" required>
              <option value="" hidden disabled></option>
              <option value="0">常に使えない</option>
              <option value="1" selected>夜だけ使える</option>
              <option value="2">常に使える</option>
          </select>
        </div>
        <div>
          初日占い
          <select id="firstNightSee" required>
              <option value="" hidden disabled></option>
              <option value="0">初日占いあり</option>
              <option value="1">初日占いなし</option>
              <option value="2" selected>初日にランダム占い</option>
          </select>
        </div>
        <div>
        欠けてる役職占い
          <select id="canSeeMissingPosition" required>
              <option value="" hidden disabled></option>
              <option value="true">欠けてる役職を占える</option>
              <option value="false" selected>欠けてる役職を占えない</option>
          </select>
        </div>
        <div>
          投票先の表示
          <select id="isSecretBallot" required>
              <option value="" hidden disabled></option>
              <option value="true">投票先を表示しない</option>
              <option value="false" selected>投票先を表示する</option>
          </select>
        </div>
        <div>
          連続ガード
          <select id="canContinuousGuard" required>
              <option value="" hidden disabled></option>
              <option value="true">連続ガードあり</option>
              <option value="false" selected>連続ガードなし</option>
          </select>
        </div>
        <div>怪盗が盗むプレイヤーの指定
          <select id="isRandomStealing" required>
              <option value="" hidden disabled></option>
              <option value="true" selected>ランダムで盗む</option>
              <option value="false">選んで盗む</option>
          </select>
        </div>
        <div>
          ワンナイト人狼
          <select id="isOneNight" required>
              <option value="" hidden disabled></option>
              <option value="false" selected>ワンナイト人狼OFF</option>
              <option value="true">ワンナイト人狼ON</option>
          </select>
        </div>
      </div>
      <div className="right-area">
        <div className="Buttons">
          <button className="box2" onClick ={setBeginnerSettings} type="button">初心者向け</button>
          <button className="box2" onClick ={setBeginnerSettings} type="button">中級者向け</button>
        </div>
        <div className="Buttons">
          <button className="box2" onClick ={setBeginnerSettings} type="button">上級者向け</button>
          <button className="box2" onClick ={setBeginnerSettings} type="button">ワンナイト</button>
        </div>
        <br/>
        <input onClick={hundleClick} type="button" value="決定" />
      </div>
    </div>
  );
}

ReactDOM.render(
  <GameSet />,
  document.getElementById('root')
);
