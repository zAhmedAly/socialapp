import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css";
import Stories from "../../components/stories/Stories";
import Share from "../../components/share/Share";
import Room from "../../components/room/Room";

export default function Home() {
  return (
    <>
      {/* <Topbar /> */}
      <div className="homeContainer">
        <Sidebar />
        <div className="homeCenter">
          <div className="homeCenterWrapper">
            <Stories />
            <Share />
            <Room />
            <Feed />
          </div>
        </div>
        <Rightbar />
      </div>
    </>
  );
}
