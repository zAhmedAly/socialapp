import { useEffect } from "react";
import { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./stories.css";
import Story from "./Story";
const Stories = () => {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const listRef = useRef();
  const storyWidthRef = useRef();

  useEffect(() => {
    console.log("listRef width", listRef.current.offsetWidth);
    const ratio = Math.floor(listRef.current.offsetWidth / 107);
    storyWidthRef.current.value = Math.floor(
      listRef.current.offsetWidth / ratio
    );
    console.log("offsetWidth >>> ", listRef.current.offsetWidth);
    console.log("ratio >>> ", ratio);
    console.log("storyWidth >>> ", storyWidthRef.current.value);
  }, []);

  const handleClick = (direction) => {
    const arrow = document.querySelector(".arrow");
    const storyList = document.querySelector(".storyList");
    const itemNumber = storyList.querySelectorAll("img").length;
    // console.log(arrow);
    // console.log(storyList);
    console.log("itemNumber >>> ", itemNumber);

    const ratio = Math.floor(listRef.current.offsetWidth / 107);
    const storyWidth = Math.floor(listRef.current.offsetWidth / ratio);
    console.log("offsetWidth 2 >>> ", listRef.current.offsetWidth);
    console.log("ratio 2 >>> ", ratio);
    console.log("storyWidth 2 >>> ", storyWidth);

    setSlideNumber(slideNumber + 1);

    console.log("slideNumber >>> ", slideNumber);

    console.log("IF Cond >>> ", itemNumber - (6 + slideNumber) + (6 - ratio));

    console.log(
      "expression >>> ",
      listRef.current.computedStyleMap().get("transform")[0].x.value
    );

    if (itemNumber - (6 + slideNumber) + (6 - ratio) > 0) {
      listRef.current.style.transform = `translateX(${
        storyList.computedStyleMap().get("transform")[0].x.value - 114
      }px)`;
    } else {
      listRef.current.style.transform = "translateX(0)";
      setSlideNumber(0);
    }

    // setIsMoved(true);
    // console.log(Math.floor(window.innerWidth / 114));
    // let distance =
    //   listRef.current.getBoundingClientRect().x - listRef.current.offsetWidth;
    // if (direction === "left" && slideNumber > 1) {
    //   console.log("slideNumber BEFORE >>>> ", slideNumber);
    //   setSlideNumber(slideNumber - 1);
    //   console.log("slideNumber AFTER >>>> ", slideNumber);
    //   listRef.current.style.transform = `translateX(${115}px)`;
    // }
    // if (direction === "right" && slideNumber < 6) {
    //   console.log("slideNumber RIGHT BEFORE >>>> ", slideNumber);
    //   setSlideNumber(slideNumber + 1);
    //   console.log("slideNumber RIGHT AFTER >>>> ", slideNumber);
    //   listRef.current.style.transform = `translateX(${-115 * slideNumber}px)`;
    // }
  };

  return (
    <div className="stories">
      <div className="storiesWrapper">
        {/* <FaChevronLeft
          className="arrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        /> */}
        <div className="storyList" ref={listRef}>
          <Story
            pic={2}
            name={"Create Story"}
            storyWidth={storyWidthRef.current.value}
          />
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
