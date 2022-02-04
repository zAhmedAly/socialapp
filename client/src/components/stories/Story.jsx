import "./stories.css";
const Story = ({ pic, name, storyWidth }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="story">
      <img
        className="storyImg"
        src={`${PF}person/${pic}.jpeg`}
        alt="story"
        style={{ width: `${storyWidth - 6}px` }}
      />
      <div
        className="storyTextWrapper"
        style={{ width: `${storyWidth - 6}px` }}
      >
        <span className="storyText">{name}</span>
      </div>
    </div>
  );
};

export default Story;
