import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import {
  FaClock,
  FaVolumeUp,
  FaPencilAlt,
  FaPlusCircle,
  FaCamera,
  FaEllipsisH,
} from "react-icons/fa";

import { useParams } from "react-router";
import Share from "../../components/share/Share";

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
      {/* <Topbar /> */}
      <div className="profile">
        <div className="profileCenter">
          <div>
            <div className="profileCenterTop">
              <div className="profileCover">
                <div className="profileCoverWrapper">
                  <img
                    className="profileCoverImg"
                    src={
                      user.coverPicture
                        ? PF + user.coverPicture
                        : PF + "person/noCover.png"
                    }
                    alt=""
                  />
                  <div className="profileCoverButton">
                    <FaCamera className="profileCoverButtonIcon" />
                    Edit cover photo
                  </div>
                </div>
              </div>
              <div className="profileUser">
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
                    <div className="profileUserImgIconWrapper">
                      <FaCamera className="profileUserImgIcon" />
                    </div>
                  </div>
                  <div className="profileInfo">
                    <span className="profileInfoName">{user.username}</span>
                    <span className="profileInfoDesc">47 Friends</span>
                    <div className="friendsList">
                      <div className="friendsListWrapper">
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
                      {/* <div className="profileInfoButtons">
                      <div
                        className="profileInfoButton"
                        style={{ backgroundColor: "#1877f2", color: "white" }}
                      >
                        <FaPlusCircle className="profileInfoButtonIcon" />
                        Add to story
                      </div>
                      <div className="profileInfoButton">
                        <FaPencilAlt className="profileInfoButtonIcon" />
                        Edit profile
                      </div>
                    </div> */}
                    </div>
                  </div>
                  <div className="profileInfoButtons">
                    <div
                      className="profileInfoButton"
                      style={{
                        backgroundColor: "rgb(27 116 228)",
                        color: "white",
                      }}
                    >
                      <FaPlusCircle className="profileInfoButtonIcon" />
                      Add to story
                    </div>
                    <div className="profileInfoButton">
                      <FaPencilAlt className="profileInfoButtonIcon" />
                      Edit profile
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="menu">
            <div className="menuWrapper">
              <div className="menuList">
                <div className="menuListItem active">Posts</div>
                <div className="menuListItem ">About</div>
                <div className="menuListItem ">Friends</div>
                <div className="menuListItem ">Photos</div>
                <div className="menuListItem ">Videos</div>
                <div className="menuListItem ">Check-ins</div>
                <div className="menuListItem ">More</div>
              </div>
              <div className="menuButton">
                <FaEllipsisH />
              </div>
            </div>
          </div>
          <div className="profileCenterBottom">
            <div className="profileCenterBottomWrapper">
              <div className="profileCenterBottomLeft">
                <div className="profileCenterBottomLeftTitle">
                  <span>Intro</span>
                </div>
                <div className="profileCenterBottomLeftButton">Add Bio</div>
                <div className="profileCenterBottomLeftJoined">
                  <FaVolumeUp className="profileCenterBottomLeftJoinedIcon" />
                  <div className="profileCenterBottomLeftJoinedDate">
                    Pronounces name AH-MED A-lee
                  </div>
                </div>
                <div className="profileCenterBottomLeftJoined">
                  <FaClock className="profileCenterBottomLeftJoinedIcon" />
                  <div className="profileCenterBottomLeftJoinedDate">
                    <span>
                      Joined {moment(user.createdAt).format("MMMM YYYY")}
                    </span>
                  </div>
                </div>
                <div className="profileCenterBottomLeftButton">
                  Edit Details
                </div>
                <div className="profileCenterBottomLeftButton">Add Hobbies</div>
                <div className="profileCenterBottomLeftButton">Add Featued</div>
              </div>
              <div className="profileCenterBottomRight">
                <Share />
                <Feed username={username} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
