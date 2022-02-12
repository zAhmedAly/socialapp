import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);

  return (
    <>
      <Topbar />
      <div className="profile">
        {/* <Sidebar /> */}
        <div className="profileCenter">
          <div className="profileCenterTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={
                  user.coverPicture
                    ? PF + user.coverPicture
                    : PF + "person/noCover.png"
                }
                alt=""
              />
            </div>
            <div className="profileUserWarpper">
              <div className="profileUserImgWarpper">
                <img
                  className="profileUserImg"
                  src={
                    user.profilePicture
                      ? PF + user.profilePicture
                      : PF + "person/noAvatar.png"
                  }
                  alt=""
                />
              </div>
              <div className="profileInfo">
                <span className="profileInfoName">{user.username}</span>
                <span className="profileInfoDesc">47 Friends</span>
                {/* <span className="profileInfoDesc">{user.desc}</span> */}
                <div className="friendsList">
                  <div
                    className="friendsListImgWarpper"
                    style={{ zIndex: "12" }}
                  >
                    <img
                      className="friendsListImg"
                      src={
                        user.profilePicture
                          ? PF + "person/1.jpeg"
                          : PF + "person/noAvatar.png"
                      }
                      alt=""
                    />
                  </div>
                  <div
                    className="friendsListImgWarpper"
                    style={{ zIndex: "11" }}
                  >
                    <img
                      className="friendsListImg"
                      src={
                        user.profilePicture
                          ? PF + "person/3.jpeg"
                          : PF + "person/noAvatar.png"
                      }
                      alt=""
                    />
                  </div>
                  <div
                    className="friendsListImgWarpper"
                    style={{ zIndex: "10" }}
                  >
                    <img
                      className="friendsListImg"
                      src={
                        user.profilePicture
                          ? PF + "person/5.jpeg"
                          : PF + "person/noAvatar.png"
                      }
                      alt=""
                    />
                  </div>
                  <div
                    className="friendsListImgWarpper"
                    style={{ zIndex: "9" }}
                  >
                    <img
                      className="friendsListImg"
                      src={
                        user.profilePicture
                          ? PF + "person/10.jpeg"
                          : PF + "person/noAvatar.png"
                      }
                      alt=""
                    />
                  </div>
                  <div
                    className="friendsListImgWarpper"
                    style={{ zIndex: "8" }}
                  >
                    <img
                      className="friendsListImg"
                      src={
                        user.profilePicture
                          ? PF + "person/9.jpeg"
                          : PF + "person/noAvatar.png"
                      }
                      alt=""
                    />
                  </div>
                  <div
                    className="friendsListImgWarpper"
                    style={{ zIndex: "7" }}
                  >
                    <img
                      className="friendsListImg"
                      src={
                        user.profilePicture
                          ? PF + "person/4.jpeg"
                          : PF + "person/noAvatar.png"
                      }
                      alt=""
                    />
                  </div>
                  <div
                    className="friendsListImgWarpper"
                    style={{ zIndex: "6" }}
                  >
                    <img
                      className="friendsListImg"
                      src={
                        user.profilePicture
                          ? PF + "person/6.jpeg"
                          : PF + "person/noAvatar.png"
                      }
                      alt=""
                    />
                  </div>
                  <div
                    className="friendsListImgWarpper"
                    style={{ zIndex: "5" }}
                  >
                    <img
                      className="friendsListImg"
                      src={
                        user.profilePicture
                          ? PF + "person/8.jpeg"
                          : PF + "person/noAvatar.png"
                      }
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="profileCenterBottom">
            {/* <div className="profileCenterBottomCenter">
              <div className="profileCenterBottomCenterLeft"> */}
            <Feed username={username} />
            {/* </div>
              <div className="profileCenterBottomCenterRight"> */}
            <Rightbar user={user} />
            {/* </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
