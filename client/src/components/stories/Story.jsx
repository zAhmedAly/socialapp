import "./stories.css";
const Story = ({ pic, name }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="story">
      <img className="storyImg" src={`${PF}person/${pic}.jpeg`} alt="story" />
      <div className="storyTextWrapper">
        <span className="storyText">{name}</span>
      </div>
    </div>
  );
};

export default Story;
