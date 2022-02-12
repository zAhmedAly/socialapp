import "./room.css";
import { VideoCallRounded } from "@material-ui/icons";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Room() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const clickHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="room">
      <div className="roomWrapper">
        <div className="roomTop">
          <button className="roomButton" onClick={clickHandler}>
            <VideoCallRounded
              className="roomIcon"
              style={{
                color: "white",
                width: "40px",
                borderRadius: "50%",
                background:
                  "linear-gradient(to right bottom, #36EAEF, #6B0AC9)",
              }}
            />
            <span className="roomOptionText">Create room</span>
          </button>
          <img
            className="roomProfileImg"
            src={
              user.profilePicture
                ? PF + "person/3.jpeg"
                : PF + "person/noAvatar.png"
            }
            alt=""
          />
          <img
            className="roomProfileImg"
            src={
              user.profilePicture
                ? PF + "person/6.jpeg"
                : PF + "person/noAvatar.png"
            }
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
