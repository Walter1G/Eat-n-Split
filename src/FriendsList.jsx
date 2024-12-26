import Friend from "./Friend";

export default function FriendsList({ friends, OnSelectFriend, selected}) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend key={friend.id} selected={selected} friend={friend} OnSelectFriend={ OnSelectFriend} />
      ))}
    </ul>
  );
}
