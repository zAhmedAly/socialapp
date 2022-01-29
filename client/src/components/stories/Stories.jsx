import { FaChevronRight } from "react-icons/fa";
import "./stories.css";
import Story from "./Story";
const Stories = () => {
  return (
    <div className="stories">
      <div className="storiesWrapper">
        <div className="storyList">
          <Story pic={2} name={"Create Story"} />
          <Story pic={3} name={"Ehab Eissa Ali"} />
          <Story pic={7} name={"Travis Bennett"} />
          <Story pic={6} name={"Reham Kassem"} />
          <Story pic={9} name={"Gary Duty"} />
          <Story pic={1} name={"Safak Kocaoglu"} />
          <Story pic={2} name={"Create Story"} />
          <Story pic={3} name={"Ehab Eissa Ali"} />
          <Story pic={7} name={"Travis Bennett"} />
          <Story pic={6} name={"Reham Kassem"} />
          <Story pic={9} name={"Gary Duty"} />
          <Story pic={1} name={"Safak Kocaoglu"} />
        </div>
        <FaChevronRight className="arrow" />
      </div>
    </div>
  );
};

export default Stories;
