class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }
  
  componentDidMount(){
    fetch("https://jsondata.okiba.me/v1/json/TaNTW210702142731")
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
  
  //参加ボタンクリック時
  hundleClickMake(props){
    if(1==2/*パスワード一致なら*/){
      location.href = "URL";
    } else {
      alert("not match password");
    }
  }
  
  hundleClickBack(){
    location.href = "URL";
  }
  
  render() {
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
              <div className="statu">
                {items.filter(item => item.id == 2).map((item, id) => /*対応したidを表示：1を変える*/
                  <div key={item.id}>
                    {item.name}
                  </div>
                )}
              </div>
              {items.filter(item => item.id == 2).map((item, id) => /*対応したidを表示：1を変える*/
                <div key={item.id}>
                  <div className="in-flame">
                    <div>
                      人数制限：　　{item.limit}人
                    </div>
                    <div>
                      部屋主　：　　{item.owner}
                    </div>
                    <div>
                      参加人数：　　{item.limit}
                    </div>
                    <div className="intro-flame">
                      {item.intro}
                    </div>
                    <p></p>
                    <div>
                      パスワード：
                      <input id="password"/* value={password} onChange={(event) => {setPassword(event.target.value)}} *//>
        　    　    </div>
                  </div>
                  <button className="button" onClick={ () => this.hundleClickMake(/*登録されているパスと入力されたパスを渡す*/)} type="button">参加</button> 
                  <button className="button" onClick ={this.hundleClickBack} type="button">戻る</button>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }
  }
}

ReactDOM.render(
  <Board />,
  document.getElementById('root')
);
