import "./sidebar.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Sidebar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const [seeMore, setSeeMore] = useState(false);

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <Link
            to={`/profile/${user.username}`}
            style={{ textDecoration: "none" }}
          >
            <li className="sidebarListItem">
              {/* <RssFeed className="sidebarIcon" /> */}
              <img
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "person/noAvatar.png"
                }
                alt=""
                className="sidebarIcon"
              />
              <span className="sidebarListItemText">Ahmed Aly</span>
            </li>
          </Link>

          <li className="sidebarListItem">
            {/* <GroupRounded className="sidebarIcon" /> */}
            <img
              className="sidebarIcon"
              src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/000000/external-friends-back-to-school-vitaliy-gorbachev-flat-vitaly-gorbachev.png"
              alt="Find Friends"
            />
            <span className="sidebarListItemText">Find Friends</span>
          </li>
          <li className="sidebarListItem">
            {/* <GroupRounded className="sidebarIcon" /> */}
            <img
              src="https://img.icons8.com/color/96/000000/group.png"
              className="sidebarIcon"
              alt="Groups"
            />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            {/* <PlayCircleFilledOutlined className="sidebarIcon" /> */}
            <img
              src="https://img.icons8.com/fluency/96/000000/small-business.png"
              className="sidebarIcon"
              alt="Marketplace"
            />
            <span className="sidebarListItemText">Marketplace</span>
          </li>
          <li className="sidebarListItem">
            {/* <PlayCircleFilledOutlined className="sidebarIcon" /> */}
            <img
              src="https://img.icons8.com/color/48/000000/google-duo.png"
              className="sidebarIcon"
              alt="Watch"
            />
            <span className="sidebarListItemText">Watch</span>
          </li>
          <li className="sidebarListItem">
            <img
              src="https://img.icons8.com/color/48/000000/clock--v1.png"
              className="sidebarIcon"
              alt="Memories"
            />
            <span className="sidebarListItemText">Memories</span>
          </li>
          <li
            className="sidebarListItem"
            style={{ display: seeMore && "none" }}
            onClick={() => setSeeMore(!seeMore)}
          >
            <div className="seeMoreItem">
              <FaChevronDown className="seeMoreItemIcon" />
            </div>
            <span className="sidebarListItemText">See more</span>
          </li>
          <li
            className="sidebarListItem"
            style={{ display: !seeMore && "none" }}
          >
            <img
              src="https://img.icons8.com/color/48/000000/bookmark-ribbon--v1.png"
              className="sidebarIcon"
              alt="Saved"
            />
            <span className="sidebarListItemText">Saved</span>
          </li>
          <li
            className="sidebarListItem"
            style={{ display: !seeMore && "none" }}
          >
            {/* <HelpOutline className="sidebarIcon" /> */}
            <img
              src="https://img.icons8.com/color/48/000000/questions.png"
              className="sidebarIcon"
              alt="Questions"
            />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li
            className="sidebarListItem"
            style={{ display: !seeMore && "none" }}
          >
            {/* <WorkOutline className="sidebarIcon" /> */}
            <img
              src="https://img.icons8.com/color/48/000000/find-matching-job.png"
              className="sidebarIcon"
              alt="Jobs"
            />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li
            className="sidebarListItem"
            style={{ display: !seeMore && "none" }}
          >
            {/* <Event className="sidebarIcon" /> */}
            <img
              src="https://img.icons8.com/color/48/000000/event-accepted-tentatively.png"
              className="sidebarIcon"
              alt="Events"
            />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li
            className="sidebarListItem"
            style={{ display: !seeMore && "none" }}
          >
            {/* <School className="sidebarIcon" /> */}
            <img
              src="https://img.icons8.com/color/48/000000/graduation-cap.png"
              className="sidebarIcon"
              alt="Courses"
            />
            <span className="sidebarListItemText">Courses</span>
          </li>
          <li
            className="sidebarListItem"
            style={{ display: !seeMore && "none" }}
            onClick={() => setSeeMore(!seeMore)}
          >
            <div className="seeMoreItem">
              <FaChevronUp className="seeMoreItemIcon" />
            </div>
            <span className="sidebarListItemText">See less</span>
          </li>
        </ul>
        {/* <button className="sidebarButton">Show More</button> */}
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
