import React from "react";
import ReactDOM from "react-dom";
import './index.css';


function RoomSearch () {

  const constructor = (props) => {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      a: []
    };
  }

  const componentDidMount = () => {
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

  //作成ボタンのクリック時動作
  const hundleClickMake = () => {
    location.href = "URL";
  }



  //L69：表示したい情報を適宜追加
    const { error, isLoaded, items } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="container">
          <div className="center-area">
            <div className="out-flame">
              <button className="roommake" onClick ={hundleClickMake() } type="button">部屋を作る</button>
              <div className="in-flame">
                <div className="stute">
                  部屋一覧
                </div>
                <ul className="UL">              
                  {items.map(item => (
                    <li key={item.id} className="box3" type="button">
                      {item.name} {item.price}
                      <p></p>
                      {item.name} {item.price}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

ReactDOM.render(
  <RoomSearch />,
  document.getElementById('root')
);
