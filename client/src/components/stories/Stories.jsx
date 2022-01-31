import { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./stories.css";
import Story from "./Story";
const Stories = () => {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(1);

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance =
      listRef.current.getBoundingClientRect().x - listRef.current.offsetWidth;
    if (direction === "left" && slideNumber > 1) {
      console.log("slideNumber BEFORE >>>> ", slideNumber);
      setSlideNumber(slideNumber - 1);
      console.log("slideNumber AFTER >>>> ", slideNumber);
      listRef.current.style.transform = `translateX(${115}px)`;
    }
    if (direction === "right" && slideNumber < 6) {
      console.log("slideNumber RIGHT BEFORE >>>> ", slideNumber);
      setSlideNumber(slideNumber + 1);
      console.log("slideNumber RIGHT AFTER >>>> ", slideNumber);
      listRef.current.style.transform = `translateX(${-115 * slideNumber}px)`;
    }
  };

  return (
    <div className="stories">
      <div className="storiesWrapper">
        <FaChevronLeft
          className="arrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="storyList" ref={listRef}>
          <Story pic={2} name={"Create Story"} />
          <Story pic={3} name={"Ehab Eissa Ali"} />
          <Story pic={7} name={"Travis Bennett"} />
          <Story pic={6} name={"Reham Kassem"} />
          <Story pic={9} name={"Gary Duty"} />
          <Story pic={2} name={"Create Story"} />
          <Story pic={3} name={"Ehab Eissa Ali"} />
          <Story pic={7} name={"Travis Bennett"} />
          <Story pic={6} name={"Reham Kassem"} />
          <Story pic={9} name={"Gary Duty"} />
        </div>
        <FaChevronRight
          className="arrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default Stories;
