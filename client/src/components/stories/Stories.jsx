import { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./stories.css";
import Story from "./Story";
const Stories = () => {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const listRef = useRef();

  const handleClick = (direction) => {
    console.log("direction >>>> ", direction);
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 114;
    console.log("distance >>>>> ", distance);
    console.log(listRef.current.getBoundingClientRect().x);
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${114 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-114 + distance}px)`;
    }
  };

  return (
    <div className="stories">
      <div className="storiesWrapper">
        <FaChevronLeft
          className="arrow left"
          onClick={() => handleClick("left")}
          // style={{ display: !isMoved && "none" }}
        />
        <div className="storyList" ref={listRef}>
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
        <FaChevronRight
          className="arrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default Stories;
