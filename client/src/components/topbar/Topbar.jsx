import "./topbar.css";
// import { Search } from "@material-ui/icons";
import {
  FaBell,
  FaDesktop,
  FaDiceD6,
  FaFacebook,
  FaFacebookMessenger,
  FaSearch,
  FaUserFriends,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Topbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <div className="topbarLeftWapper">
          <Link to="/">
            <FaFacebook className="logoIcon" />
          </Link>
          <div className="searchbar">
            {/* <Search className="searchIcon" /> */}
            <FaSearch className="searchIcon" />
            <input placeholder="Search Facebook" className="searchInput" />
          </div>
        </div>
      </div>
      <div className="topbarCenter">
        {/* <div className="topbarLeftWapper"> */}
        <div className="topbarCenterMenuWapper">
          <div className="menuItem active">
            <Link to="/">
              <img
                alt="Home"
                className="menuItemIcon active"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iOTYiIGhlaWdodD0iOTYiCnZpZXdCb3g9IjAgMCAxNzEgMTcxIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MS45OTUxOXYtMTcxLjk5NTE5aDE3MS45OTUxOXYxNzEuOTk1MTl6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzEwNmRjYyI+PHBhdGggZD0iTTg1LjUsMTQuMjVjLTEuOTAzMjIsMC4wMDAyNCAtMy43MjcyMywwLjc2MTkyIC01LjA2NTQzLDIuMTE1MjNsLTcxLjg2MjMsNjIuNzA1NTZjLTAuOTEwMTcsMC42NzE2MiAtMS40NDczMSwxLjczNTU2IC0xLjQ0NzI3LDIuODY2N2MwLDEuOTY3NTEgMS41OTQ5OSwzLjU2MjUgMy41NjI1LDMuNTYyNWgxNy44MTI1djU3YzAsMy45MzMgMy4xOTIsNy4xMjUgNy4xMjUsNy4xMjVoMjguNWMzLjkzMywwIDcuMTI1LC0zLjE5MiA3LjEyNSwtNy4xMjV2LTQyLjc1aDI4LjV2NDIuNzVjMCwzLjkzMyAzLjE5Miw3LjEyNSA3LjEyNSw3LjEyNWgyOC41YzMuOTMzLDAgNy4xMjUsLTMuMTkyIDcuMTI1LC03LjEyNXYtNTdoMTcuODEyNWMxLjk2NzUxLDAgMy41NjI1LC0xLjU5NDk5IDMuNTYyNSwtMy41NjI1YzAuMDAwMDQsLTEuMTMxMTQgLTAuNTM3MDksLTIuMTk1MDkgLTEuNDQ3MjcsLTIuODY2N2wtNzEuODIwNTYsLTYyLjY2MzgyYy0wLjAxMzg2LC0wLjAxMzk3IC0wLjAyNzc3LC0wLjAyNzg5IC0wLjA0MTc1LC0wLjA0MTc1Yy0xLjMzODIsLTEuMzUzMzEgLTMuMTYyMjEsLTIuMTE0OTkgLTUuMDY1NDMsLTIuMTE1MjN6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
              />
            </Link>
          </div>

          <div className="menuItem">
            <FaUserFriends className="menuItemIcon" />
            {/* <img
              alt="Friends"
              className="menuItemIcon"
              src="https://img.icons8.com/ios/96/000000/friends.png"
            /> */}
          </div>
          <div className="menuItem">
            <FaDesktop className="menuItemIcon" />
            {/* <img
              alt="Watch"
              className="menuItemIcon"
              src="https://img.icons8.com/windows/96/000000/tv-show.png"
            /> */}
          </div>
          <div className="menuItem active">
            <FaDiceD6 className="menuItemIcon" />
            {/* <img
              alt="Gaming"
              className="menuItemIcon"
              src="https://img.icons8.com/windows/96/000000/htc-vive-headset.png"
            /> */}
          </div>
        </div>
        {/* </div> */}

        {/* <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div> */}
      </div>
      <div className="topbarRight">
        {/* <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div> */}
        <div className="topbarRightWapper">
          <div className="topbarImgWapper">
            <Link to={`/profile/${user.username}`}>
              <img
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "person/noAvatar.png"
                }
                alt=""
                className="topbarImg"
              />
            </Link>
            <span className="topbarImgUsername">
              {user.username.split(" ")[0]}
            </span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              {/* <Person className="topbarIconItemIcon" /> */}
              <img
                src="https://img.icons8.com/ios-filled/96/000000/circled-menu.png"
                className="topbarIconItemIcon"
                alt="Menu"
              />
              {/* <span className="topbarIconBadge">1</span> */}
            </div>
            <div className="topbarIconItem">
              {/* <ChatRounded className="topbarIconItemIcon" /> */}
              {/* <img
              src="https://img.icons8.com/material-rounded/96/000000/facebook-messenger--v1.png"
              className="topbarIconItemIcon"
              alt="Chat"
            /> */}
              <FaFacebookMessenger className="topbarIconItemIcon" />
              <span className="topbarIconBadge">5</span>
            </div>
            <div className="topbarIconItem">
              {/* <NotificationsActiveRounded className="topbarIconItemIcon" /> */}
              {/* <img
              src="https://img.icons8.com/material-rounded/96/000000/appointment-reminders.png"
              className="topbarIconItemIcon"
              alt="Notifications"
            /> */}
              <FaBell className="topbarIconItemIcon" />

              <span className="topbarIconBadge">12</span>
            </div>
            <div className="topbarIconItem">
              {/* <NotificationsActiveRounded className="topbarIconItemIcon" /> */}
              <img
                src="https://img.icons8.com/material-rounded/24/000000/sort-down.png"
                className="topbarIconItemIcon"
                alt="More"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
