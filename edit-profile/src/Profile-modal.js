import React from "react";
import Modal, { setAppElement } from "react-modal";

Modal.setAppElement("#root");

const modalStyle = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "rgba(0,0,0,0.85)"
    },
    content: {
        position: "absolute",
        top: "calc(50% - 250px)",
        left: "calc(50% - 250px)",
        right: "calc(50% - 250px)",
        bottom: "calc(50% - 150px)",
        backgroundColor: "paleturquoise",
        borderRadius: "1rem",
    }
};



function IconSelectModal(props) {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const handleButton = (i) => {
        console.log(i);
        setIsOpen(false);
        props.onClick(i);
    };

    const icons = () => {
        const result = [];
        for (let i = 1; i <= 20; ++i) {
            result.push(
                <div key={i}>
                    <img src={'http://localhost:51000/' + i + '.png'} style={{width:"85px"}} onClick={() => handleButton(i)}/>
                </div>
            );
        }
        return result;
    };

    const oldIconURL = () => {
        if (props.oldIcon === null) {
            return 'https://www.shibaura-it.ac.jp/touch-icon.png';
        } else {
            return 'http://localhost:51000/' + props.oldIcon + '.png';
        }
    }

    return (
        <div className="icon-select-modal">
            <div onClick={() => setIsOpen(true)}>
                <img src={oldIconURL()} style={{width:"170px"}}/>
            </div>
            <Modal isOpen={modalIsOpen} style={modalStyle}>
                <div style={{
                    display: "inline-flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                    }} >
                    {icons()}
                </div>
            </Modal>
        </div>
    );
}

export default function ProfileModal() {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [userName, setUserName] = React.useState("");
    const [icon, setIcon] = React.useState(null);
    const [UUID, setUUID] = React.useState("1520cd65-64a9-43d2-8de2-355d08cc8b86");
    React.useEffect(async () => {
        fetch("http://localhost:51000/my-profile")
        .then(response => response.json())
        .then(json => {
            console.log(json.rates);
            setUserName(json.userName);
            setIcon(json.icon);
        })
    }, []);


    const getCookie = (key) => {
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
    };

    const selectIcon = (i) => {
        setIcon(i);
    };

    const registerProfile = () => {
        if (icon === null || userName === "") {
            alert("入力情報が足りません");
            return;
        }

        let fd = new FormData();
        fd.set("userName", userName);
        fd.set("icon", icon);
        fd.set("UUID", UUID);
        console.log(icon + ", " + userName + ", " + UUID + ", getCookie:" + getCookie("UUID"));
        console.log(fd.keys);
        console.log(fd.values);

        fetch("http://localhost:51000/profile-register", {
            method: "POST",
            body: fd
        })
        .then((response) => {
            const status = response.status;
            console.log(response.status);
            console.log(response.headers);
            console.log(response.body);
            console.log("getCookie:" + getCookie("UUID"));
            if (status === 200) {
                //成功
                setIsOpen(false);
            } else if(Math.floor(status/4) === 4) {
                let notification = "";

                const nameCode = Math.floor( (status-400)/10 );
                if (nameCode === 9) {
                    notification = "プレイヤーネーム不正です";
                } else if (nameCode === 8) {
                    notification = "プレイヤーネームが他の参加者と被っています";
                }
                
                const iconCode = status % 10;
                if (iconCode === 9) {
                    notification += "\nアイコンが不正です";
                } else if (iconCode) {
                    notification += "\nアイコンが他の参加者と被っています";
                }

                alert(notification)
            } else {
                alert("その他エラー");
            }
        })
        .catch((error) => {
            console.error(error);
        });
    };

    return(
        <div className="profile-modal">
            <div onClick={() => setIsOpen(true)}>
                    <img src='https://www.shibaura-it.ac.jp/touch-icon.png' style={{width:"170px"}}/>
            </div>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setIsOpen(false)} style={modalStyle}>
            <div className="container">
            <div className="col">
                <div className="d-flex align-items-center justify-content-center" style={{padding:"20px"}}>
                アイコンとプレイヤーネームを設定
                </div>
                <div className="row">
                <div className="col align-self-center" style={{width:"250px", paddingLeft:"10%"}}>
                    <div className="d-flex align-items-center justify-content-center">アイコンを選択</div>
                    <div className="d-flex align-items-center justify-content-center">
                        <IconSelectModal oldIcon={icon} onClick={selectIcon}/>
                    </div>
                </div>
                <div className="col align-self-center" style={{width:"500px", paddingRight:"10%"}}>
                    <div className="d-flex align-items-center justify-content-center">プレイヤーネームを入力</div>
                    <div className="d-flex align-items-center justify-content-center">（10文字以内）</div>
                    <form>
                    <input type="text" value={userName} onChange={(event) => setUserName(event.target.value)}
                        className="form-control" placeholder="プレイヤーネーム"></input>
                    </form>
                </div>
                </div>
                <div className="d-flex justify-content-end" style={{paddingTop:"40px", paddingRight:"15%"}}>
                <button className="btn btn-primary" type="button" onClick={() => registerProfile()}>保存</button>
                </div>
            </div>
            </div>
            </Modal>
        </div>
    );
}