import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css";
import Stories from "../../components/stories/Stories";

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <div className="homeCenter">
          <div className="homeCenterWrapper">
            <Stories />
            <Feed />
          </div>
        </div>
        <Rightbar />
      </div>
    </>
  );
}
