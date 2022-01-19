import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
  GroupRounded,
} from "@material-ui/icons";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            {/* <GroupRounded className="sidebarIcon" /> */}
            <img
              className="sidebarIcon"
              src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/000000/external-friends-back-to-school-vitaliy-gorbachev-flat-vitaly-gorbachev.png"
            />
            <span className="sidebarListItemText">Find Friends</span>
          </li>
          <li className="sidebarListItem">
            {/* <GroupRounded className="sidebarIcon" /> */}
            <img
              src="https://img.icons8.com/color/96/000000/group.png"
              className="sidebarIcon"
            />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            {/* <PlayCircleFilledOutlined className="sidebarIcon" /> */}
            <img
              src="https://img.icons8.com/fluency/96/000000/small-business.png"
              className="sidebarIcon"
            />
            <span className="sidebarListItemText">Marketplace</span>
          </li>
          <li className="sidebarListItem">
            {/* <PlayCircleFilledOutlined className="sidebarIcon" /> */}
            <img
              src="https://img.icons8.com/color/48/000000/google-duo.png"
              className="sidebarIcon"
            />
            <span className="sidebarListItemText">Watch</span>
          </li>
          <li className="sidebarListItem">
            <img
              src="https://img.icons8.com/color/48/000000/clock--v1.png"
              className="sidebarIcon"
            />
            <span className="sidebarListItemText">Memories</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
