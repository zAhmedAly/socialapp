import "./topbar.css";
import {
  Search,
  Person,
  Chat,
  Notifications,
  CastRounded,
  NotificationsActiveRounded,
  NotificationsRounded,
  MessageRounded,
  MessageOutlined,
  ChatBubbleOutlineRounded,
  ChatBubble,
  ChatRounded,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Topbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        {/* <CastRounded className="logoIcon" /> */}
        {/* <img
          src="https://img.icons8.com/color/240/000000/facebook-new.png"
          className="logoIcon"
        /> */}
        {/* <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Fakebook</span>
        </Link> */}
        <img
          className="logoIcon"
          alt="svgImg"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMTQ0IiBoZWlnaHQ9IjE0NCIKdmlld0JveD0iMCAwIDE3MSAxNzEiCnN0eWxlPSIgZmlsbDojMDAwMDAwOyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTAsMTcxLjk5NTE5di0xNzEuOTk1MTloMTcxLjk5NTE5djE3MS45OTUxOXoiIGZpbGw9Im5vbmUiPjwvcGF0aD48Zz48cGF0aCBkPSJNODUuNSwxNy44MTI1Yy0zNy4zODI3NywwIC02Ny42ODc1LDMwLjMwNDczIC02Ny42ODc1LDY3LjY4NzVjMCwzNy4zODI3NyAzMC4zMDQ3Myw2Ny42ODc1IDY3LjY4NzUsNjcuNjg3NWMzNy4zODI3NywwIDY3LjY4NzUsLTMwLjMwNDczIDY3LjY4NzUsLTY3LjY4NzVjMCwtMzcuMzgyNzcgLTMwLjMwNDczLC02Ny42ODc1IC02Ny42ODc1LC02Ny42ODc1eiIgZmlsbD0iIzAwNjNjNSI+PC9wYXRoPjxwYXRoIGQ9Ik05NC42NjI3NSwxMDMuNDQwNzVoMTcuNTE2ODFsMi43NTAyNSwtMTcuNzk0NjloLTIwLjI3MDYzdi05LjcyNTYyYzAsLTcuMzkyMTkgMi40MTUzOCwtMTMuOTQ3MTkgOS4zMzAxOSwtMTMuOTQ3MTloMTEuMTExNDR2LTE1LjUyODk0Yy0xLjk1MjI1LC0wLjI2MzYyIC02LjA4MTE5LC0wLjg0MDc1IC0xMy44ODMwNiwtMC44NDA3NWMtMTYuMjkxMzEsMCAtMjUuODQyMzcsOC42MDM0NCAtMjUuODQyMzcsMjguMjA0MzF2MTEuODM4MTloLTE2Ljc0NzMxdjE3Ljc5NDY5aDE2Ljc0NzMxdjQ4LjkwOTU2YzMuMzE2NjksMC40OTg3NSA2LjY3NjEyLDAuODM3MTkgMTAuMTI0NjIsMC44MzcxOWMzLjExNzE5LDAgNi4xNTk1NiwtMC4yODUgOS4xNjI3NSwtMC42OTExMnoiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L2c+PHBhdGggZD0iIiBmaWxsPSJub25lIj48L3BhdGg+PC9nPjwvc3ZnPg=="
        />
        <div className="searchbar">
          <Search className="searchIcon" />
          <input placeholder="Search Facebook" className="searchInput" />
        </div>
      </div>
      <div className="topbarCenter">
        <div className="topbarCenterMenuWapper">
          <div className="menuItem active">
            <img
              alt="Home"
              className="menuItemIcon active"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iOTYiIGhlaWdodD0iOTYiCnZpZXdCb3g9IjAgMCAxNzEgMTcxIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MS45OTUxOXYtMTcxLjk5NTE5aDE3MS45OTUxOXYxNzEuOTk1MTl6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzEwNmRjYyI+PHBhdGggZD0iTTg1LjUsMTQuMjVjLTEuOTAzMjIsMC4wMDAyNCAtMy43MjcyMywwLjc2MTkyIC01LjA2NTQzLDIuMTE1MjNsLTcxLjg2MjMsNjIuNzA1NTZjLTAuOTEwMTcsMC42NzE2MiAtMS40NDczMSwxLjczNTU2IC0xLjQ0NzI3LDIuODY2N2MwLDEuOTY3NTEgMS41OTQ5OSwzLjU2MjUgMy41NjI1LDMuNTYyNWgxNy44MTI1djU3YzAsMy45MzMgMy4xOTIsNy4xMjUgNy4xMjUsNy4xMjVoMjguNWMzLjkzMywwIDcuMTI1LC0zLjE5MiA3LjEyNSwtNy4xMjV2LTQyLjc1aDI4LjV2NDIuNzVjMCwzLjkzMyAzLjE5Miw3LjEyNSA3LjEyNSw3LjEyNWgyOC41YzMuOTMzLDAgNy4xMjUsLTMuMTkyIDcuMTI1LC03LjEyNXYtNTdoMTcuODEyNWMxLjk2NzUxLDAgMy41NjI1LC0xLjU5NDk5IDMuNTYyNSwtMy41NjI1YzAuMDAwMDQsLTEuMTMxMTQgLTAuNTM3MDksLTIuMTk1MDkgLTEuNDQ3MjcsLTIuODY2N2wtNzEuODIwNTYsLTYyLjY2MzgyYy0wLjAxMzg2LC0wLjAxMzk3IC0wLjAyNzc3LC0wLjAyNzg5IC0wLjA0MTc1LC0wLjA0MTc1Yy0xLjMzODIsLTEuMzUzMzEgLTMuMTYyMjEsLTIuMTE0OTkgLTUuMDY1NDMsLTIuMTE1MjN6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
            />
          </div>
          <div className="menuItem">
            <img
              alt="Friends"
              className="menuItemIcon"
              src="https://img.icons8.com/ios/96/000000/friends.png"
            />
          </div>
          <div className="menuItem">
            <img
              alt="Watch"
              className="menuItemIcon"
              src="https://img.icons8.com/windows/96/000000/tv-show.png"
            />
          </div>
          <div className="menuItem">
            <img
              alt="Gaming"
              className="menuItemIcon"
              src="https://img.icons8.com/windows/96/000000/htc-vive-headset.png"
            />
          </div>
        </div>

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
            <img
              src="https://img.icons8.com/material-rounded/96/000000/facebook-messenger--v1.png"
              className="topbarIconItemIcon"
              alt="Chat"
            />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            {/* <NotificationsActiveRounded className="topbarIconItemIcon" /> */}
            <img
              src="https://img.icons8.com/material-rounded/96/000000/appointment-reminders.png"
              className="topbarIconItemIcon"
              alt="Notifications"
            />
            <span className="topbarIconBadge">5</span>
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
  );
}
