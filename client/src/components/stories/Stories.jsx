import { useEffect } from "react";
import { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { FaChevronRight } from "react-icons/fa";

import "./stories.css";
import Story from "./Story";
const Stories = () => {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const [storyWidth, setStoryWidth] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [direction, SetDirection] = useState("");

  const listRef = useRef();

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    console.log("listRef width", listRef.current.offsetWidth);
    const ratio = Math.floor(listRef.current.offsetWidth / 114);
    setStoryWidth(Math.floor(listRef.current.offsetWidth / ratio));
    // console.log("offsetWidth >>> ", listRef.current.offsetWidth);
    // console.log("ratio >>> ", ratio);
    // console.log("storyWidth >>> ", storyWidth);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  }, [width]);

  useEffect(() => {
    const storyList = document.querySelector(".storyList");
    const itemNumber = storyList.querySelectorAll("img").length;
    console.log("itemNumber >>> ", itemNumber);
    const ratio = Math.floor(listRef.current.offsetWidth / 114);
    setStoryWidth(Math.floor(listRef.current.offsetWidth / ratio));
    console.log("offsetWidth 2 >>> ", listRef.current.offsetWidth);
    console.log("ratio 2 >>> ", ratio);
    console.log("storyWidth 2 >>> ", storyWidth);
    console.log(
      `direction >>> ${direction} === slideNumber >>> ${slideNumber}`
    );
    // console.log("IF Cond >>> ", itemNumber - (6 + slideNumber) + (6 - ratio));
    console.log("IF Cond >>> ", slideNumber <= itemNumber - ratio);

    console.log(
      "expression >>> ",
      listRef.current.computedStyleMap().get("transform")[0].x.value
    );

    if (direction === "right" && slideNumber <= itemNumber - ratio) {
      // if (itemNumber - (6 + slideNumber) + (6 - ratio) >= 0) {
      listRef.current.style.transform = `translateX(${
        storyList.computedStyleMap().get("transform")[0].x.value -
        `${storyWidth}`
      }px)`;
    }
    // } else {
    //   listRef.current.style.transform = "translateX(0)";
    //   setSlideNumber(0);
    // }
    // } else {
    //   if (itemNumber - (6 + slideNumber) + (6 - ratio) < 0) {
    if (direction === "left" && slideNumber > 0) {
      listRef.current.style.transform = `translateX(${
        storyList.computedStyleMap().get("transform")[0].x.value +
        `${storyWidth}`
      }px)`;
    }
    // } else {
    //   listRef.current.style.transform = "translateX(0)";
    //   setSlideNumber(0);
    // }

    console.log("========== End ==========");
    // eslint-disable-next-line
  }, [direction, slideNumber]);

  const handleClick = (direction) => {
    const storyList = document.querySelector(".storyList");
    const itemNumber = storyList.querySelectorAll("img").length;
    console.log("itemNumber >>> ", itemNumber);
    const ratio = Math.floor(listRef.current.offsetWidth / 114);
    setStoryWidth(Math.floor(listRef.current.offsetWidth / ratio));

    if (direction === "right" && slideNumber < itemNumber - ratio) {
      SetDirection("right");
      setSlideNumber(slideNumber + 1);
    }
    if (direction === "left" && slideNumber > 0) {
      SetDirection("left");
      setSlideNumber(slideNumber - 1);
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
    console.log(
      `CLICK direction >>> ${direction} === slideNumber >>> ${slideNumber}`
    );
  };

  return (
    <div className="stories">
      <div>
        <div>{`Window width = ${width}`}</div>
        <div>{`Window height = ${height}`}</div>
      </div>
      <div className="storiesWrapper">
        <FaChevronLeft
          className="arrow left"
          onClick={() => handleClick("left")}
          // style={{ display: !isMoved && "none" }}
        />
        <div className="storyList" ref={listRef}>
          <Story pic={2} name={"Create Story"} storyWidth={storyWidth} />
          <Story pic={3} name={"Ehab Eissa Ali"} storyWidth={storyWidth} />
          <Story pic={7} name={"Travis Bennett"} storyWidth={storyWidth} />
          <Story pic={6} name={"Reham Kassem"} storyWidth={storyWidth} />
          <Story pic={9} name={"Gary Duty"} storyWidth={storyWidth} />
          <Story pic={2} name={"Create Story"} storyWidth={storyWidth} />
          <Story pic={3} name={"Ehab Eissa Ali"} storyWidth={storyWidth} />
          <Story pic={7} name={"Travis Bennett"} storyWidth={storyWidth} />
          <Story pic={6} name={"Reham Kassem"} storyWidth={storyWidth} />
          <Story pic={9} name={"Gary Duty"} storyWidth={storyWidth} />
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
