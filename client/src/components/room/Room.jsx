import "./room.css";
import { VideoCallRounded } from "@material-ui/icons";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function Room() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      console.log(newPost);
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="room">
      <div className="roomWrapper">
        <div className="roomTop">
          <button className="roomButton" type="submit">
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
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
          />
          <img
            className="roomProfileImg"
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
          />
          {/* <input
            placeholder={"What's in your mind, " + user.username + "?"}
            className="roomInput"
            ref={desc}
          /> */}
        </div>
        {/* <hr className="roomHr" /> */}
        {/* {file && (
          <div className="roomImgContainer">
            <img className="roomImg" src={URL.createObjectURL(file)} alt="" />
            <Cancel className="roomCancelImg" onClick={() => setFile(null)} />
          </div>
        )}
        <form className="roomBottom" onSubmit={submitHandler}>
          <div className="roomOptions">
            <div className="roomOption">
              <VideocamRounded htmlColor="red" className="roomIcon" />
              <span className="roomOptionText">Live video</span>
            </div>
            <label htmlFor="file" className="roomOption">
              <PhotoLibraryRounded htmlColor="green" className="roomIcon" />
              <span className="roomOptionText">Photo/Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>

            <div className="roomOption">
              <EmojiEmotionsOutlined htmlColor="gold" className="roomIcon" />
              <span className="roomOptionText">Feeling/activity</span>
            </div>
          </div>
          <button className="roomButton" type="submit">
            Share
          </button>
        </form> */}
      </div>
    </div>
  );
}
