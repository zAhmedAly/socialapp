import { useEffect, useRef } from "react";
import "./stories.css";
const Story = ({ pic, name, storyWidth = 107 }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const storyImgRef = useRef();
  const storyTextWrapperRef = useRef();

  useEffect(() => {
    storyImgRef.style.width = `${storyWidth}`;
  }, []);

  return (
    <div className="story">
      <img
        className="storyImg"
        ref={storyImgRef}
        src={`${PF}person/${pic}.jpeg`}
        alt="story"
      />
      <div className="storyTextWrapper">
        <span className="storyText">{name}</span>
      </div>
    </div>
  );
};

export default Story;
