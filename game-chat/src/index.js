import ReactDOM from 'react-dom';
import './index.css';
//import React from 'react';
import React, { Component, useEffect, useRef, useState, Fragment} from "react";


//import { render } from 'react-dom';

class ChatForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: "",
    }
  }

  handleButton(inputText) {
    this.setState({ text: "" });
    this.props.onClick(inputText);
    //console.log("handlebutton" + inputText + this.state.text);
  }
  render() {
    const inputText = this.state.text;
    return (
      <form  className="chat-form">
        <textarea onChange={(event) => {this.setState({ text: event.target.value })}} value={inputText} className="chat-input" id="input-chat" rows="5" warp="hard"></textarea>
        <button onClick={() => this.handleButton(inputText)} className="chat-button" type="button" >一般チャットで<br/>発言</button>
      </form>
    )
  }
}

function Chat(props) {
  //render() {
    return (
      <div className="chat-gutter">
        <div className="chat-contents-left">
          <img src='https://www.shibaura-it.ac.jp/touch-icon.png' className="user-icon"/>
        </div>
        <div className="chat-contents-right">
          <div className="user-name">
              {props.userName}
          </div>
          <div className="chat-text">
              {props.text}
          </div>
        </div>
      </div>
  );//}
}

function getCookie(key) {
  let result = null;
  const plainCookie = document.cookie;
  if(plainCookie !== "") {
    let allCookies = plainCookie.split("; ");
    for (let i = 0; i < allCookies; ++i) {
      const cookie = allCookies[i].split("=");
      if (cookie[0] === key) {
        result = cookie[1];
        break;
      }
    }
  }
  return result;
}

const Chats = (props) => {
  const chatsEl = useRef(null);
  const messages = props.messages;

  useEffect(() => {
    chatsEl.current.scrollIntoView();
  }, [messages.length]);

  return (
    <div className="scroll-area" ref={chatsEl}>
      {messages.map( (message) => (
        <Chat userName={message.userName} text={message.text} />
      ))}
    </div>
  );
}

class ChatArea extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      messages: [
      ],
      roomID: getCookie("roomID"),
      UUID: getCookie("UUID"),
      ws: null,
    };
    this.handleButton = this.handleButton.bind(this);
  }


  componentDidMount() {
    let ws = new WebSocket("ws://160.16.141.77:51000/websocket");
    //let ws = new WebSocket("ws://localhost:7000/websocket");
    ws.onopen = () => {
      console.log('connected')
      this.setState({ ws: ws });
    }
    ws.onmessage = (m) => {
      const message = JSON.parse(m.data);
      let messages = this.state.messages.slice();
      const newMessage = {userName: message.userName, text: message.text};
      this.setState({
      messages: messages.concat(newMessage)
      })
    }

    ws.onclose = () => {
      const messages = this.state.messages.slice();
      const newMessage = {userName: "システム", text: "通信が止まりました"};
      this.setState({
        messages: messages.concat(newMessage)
      });
    }
  }

  componentWillUnmount() {
    const ws = this.state.ws;
    if (ws == null) return;
    const message = {type: -1, UUID: this.UUID, text: ""}
    const jsonMessage = JSON.stringify(message);
    ws.send(jsonMessage);
    ws.close();
  }

  displayMessage(m) {
    const message = JSON.parse(m.data);
    let messages = this.state.messages.slice();
    const newMessage = {userName: message.userName, text: message.text};
    this.setState({
      messages: messages.concat(newMessage)
    })
  }

  
  /*constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }*/
  
/*  componentDidMount() {
    fetch("https://jsondata.okiba.me/v1/json/OSvQA210610084219")
      .then(res => res.json())
      .then(json => {
          this.setState({
            isLoaded: true,
            items: json.rates
          });
      })
      .catch(error => {
        this.setState({
          isLoaded: false,
          error: error
        });
        console.error(error);
      });
  }*/
  
  sendMessage() {
    const ws = this.state.ws;
    const message = {UUID: this.state.UUID, type: 0, text: this.state.messages};
    const jsonMessage = JSON.stringify(message);
    ws.send(jsonMessage);
  }

  handleButton(inputText) {
    const ws = this.state.ws;
    const message = {type: 1, userName: "al19009", text: inputText};
    const jsonMessage = JSON.stringify(message);
    ws.send(jsonMessage);
    /*
    let newMessages = this.state.messages.slice();
    const newMessage = {userName: "al19009", text: inputText};
    console.log("button" + inputText);
    this.setState({
      messages: newMessages.concat([newMessage]),
    });
    */
  }

  render() {
    //const { isLoaded, items } = this.state;
    /*if (!isLoaded) {
      return <h3> Loading </h3>;
    } else {*/
      //const mess = '騎士さん!私を護衛して'
      //console.log("render ChatArea");
      const messages = this.state.messages;

      return (
        <div className="chat-area">
          <div className="chat-container">
            <Chats messages={this.state.messages}/>
          </div>
          <ChatForm onClick={this.handleButton} />
        </div>
      );
  }
}

class App extends React.Component {

  render() {
    return(
      <div className="main">
        <div className="left-bar">
          他プレイヤー情報
        </div>
        <div className="center-area">
          <div className="center-header">
            一日目夜　議論時間　03:21　4/10
          </div>
          <ChatArea/>
        </div>
        <div className="right-bar">
          自分の情報
        </div>
      </div>
    );
  }
}



ReactDOM.render(<App />, document.getElementById('root'));