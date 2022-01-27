import "./post.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { FaEllipsisH } from "react-icons/fa";

export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser } = useContext(AuthContext);

  const currentDate = Date.now();
  const a = moment(currentDate);

  console.log(post.img);

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler = () => {
    try {
      axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
    } catch (err) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
              <img
                className="postProfileImg"
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "person/noAvatar.png"
                }
                alt=""
              />
            </Link>
            <div className="postInfo">
              <span className="postUsername">{user.username}</span>
              {/* <span className="postDate">{format(post.createdAt)}</span> */}
              {/* <span className="postDate">
                {moment(post.createdAt).toNow(true)}
              </span> */}
              <span className="postDate">
                {a.diff(moment(post.createdAt), "days") < 1
                  ? `${moment(post.createdAt).toNow(true)} ago`
                  : `${moment(post.createdAt).format("MMMM DD @ h:mm A")}`}
              </span>
            </div>
          </div>
          <div className="postTopRight">
            {/* <MoreHoriz /> */}
            <FaEllipsisH />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={PF + post.img} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src={`${PF}like.png`}
              onClick={likeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src={`${PF}heart.png`}
              onClick={likeHandler}
              alt=""
            />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
