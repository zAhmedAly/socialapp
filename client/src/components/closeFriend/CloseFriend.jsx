import "./closeFriend.css";

export default function CloseFriend({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="sidebarFriend">
      <div className="sidebarFriendImgWarpper">
        <img
          className="sidebarFriendImg"
          src={PF + user.profilePicture}
          alt={user.profilePicture}
        />
      </div>
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}
