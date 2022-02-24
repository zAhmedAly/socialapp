import { useEffect } from "react";
import { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "./stories.css";
import Story from "./Story";
const Stories = () => {
  // const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const [storyWidth, setStoryWidth] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  // const [height, setHeight] = useState(window.innerHeight);
  const [arrowClicked, SetArrowClicked] = useState("");

  const listRef = useRef();

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    // setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    // console.log(">>>> listRef width >>>> ", listRef.current.offsetWidth);
    const ratio = Math.floor(listRef.current.offsetWidth / 107);
    const tempWidth = Math.floor(listRef.current.offsetWidth / ratio);
    setStoryWidth(tempWidth);
    // console.log(
    //   `TEMP WIDTH = ${tempWidth} >>>> setStoryWidth >>>> ${storyWidth} && ratio >>> ${ratio}`
    // );
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  }, [width]);

  useEffect(() => {
    const ratio = Math.floor(listRef.current.offsetWidth / 107);
    const storyList = document.querySelector(".storyList");
    // console.log("useEffect arrowClicked >>> ", arrowClicked);
    if (arrowClicked === "left" && slideNumber >= 0) {
      listRef.current.style.transform = `translateX(${Math.floor(
        storyList.computedStyleMap().get("transform")[0].x.value + storyWidth
      )}px)`;
      // console.log(
      //   `LEFT useEffect translateX >>> storyWidth = ${storyWidth} &&  ${Math.floor(
      //     storyList.computedStyleMap().get("transform")[0].x.value
      //   )} + ${storyWidth} = ${Math.floor(
      //     storyList.computedStyleMap().get("transform")[0].x.value + storyWidth
      //   )}`
      // );
    } else if (arrowClicked === "right" && slideNumber <= 10 - ratio) {
      listRef.current.style.transform = `translateX(${Math.floor(
        storyList.computedStyleMap().get("transform")[0].x.value - storyWidth
      )}px)`;
      // console.log(
      //   `RIGHT useEffect translateX >>> storyWidth = ${storyWidth} &&  ${Math.floor(
      //     storyList.computedStyleMap().get("transform")[0].x.value
      //   )} - ${storyWidth} = ${Math.floor(
      //     storyList.computedStyleMap().get("transform")[0].x.value - storyWidth
      //   )}`
      // );
    }
    // console.log("useEffect slideNumber >>> ", slideNumber);
    // eslint-disable-next-line
  }, [slideNumber, arrowClicked]);

  const handleClick = (direction) => {
    // setIsMoved(true);
    // let distance = listRef.current.getBoundingClientRect().x - 50;
    const ratio = Math.floor(listRef.current.offsetWidth / 107);
    setStoryWidth(Math.floor(listRef.current.offsetWidth / ratio));

    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      SetArrowClicked("left");
    }
    if (direction === "right" && slideNumber < 10 - ratio) {
      setSlideNumber(slideNumber + 1);
      SetArrowClicked("right");
    }
    console.log(
      `handleClick direction >>> ${direction} === slideNumber >>> ${slideNumber}`
    );
  };

  return (
    <div className="stories">
      {/* <div>
        <div>{`Window width = ${width}`}</div>
        <div>{`Window height = ${height}`}</div>
      </div> */}
      <div className="storiesWrapper">
        <FaChevronLeft
          className="arrow left"
          onClick={() => handleClick("left")}
          style={{ display: slideNumber === 0 && "none" }}
        />
        <div className="storyList" ref={listRef}>
          <Story pic={2} name={"Create Story"} storyWidth={storyWidth} />
          <Story pic={3} name={"Ehab Eissa Ali"} storyWidth={storyWidth} />
          <Story pic={7} name={"Amr El Askalany"} storyWidth={storyWidth} />
          <Story pic={6} name={"Reham Kassem"} storyWidth={storyWidth} />
          <Story pic={9} name={"Ossama Hosny"} storyWidth={storyWidth} />
          <Story pic={1} name={"Essam Mahmoud"} storyWidth={storyWidth} />
          <Story pic={4} name={"Menna Aly"} storyWidth={storyWidth} />
          <Story pic={5} name={"Yehia London"} storyWidth={storyWidth} />
          <Story pic={10} name={"Amal Saleh"} storyWidth={storyWidth} />
          <Story
            pic={8}
            name={"Jennifer Emma Watson"}
            storyWidth={storyWidth}
          />
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
