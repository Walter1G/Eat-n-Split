import React from "react";
import Button from "./Button";

const Friend = ({ friend, OnSelectFriend, selected }) => {
    const isSelected = selected?.id === friend.id;

  return (
    <li key={friend.id} className={isSelected ? "selected" : ""}>
      
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 ? (
        <p className="red">
          {" "}
          You owe {friend.name} {Math.abs(friend.balance)} $
        </p>
      ) : friend.balance === 0 ? (
        <p>You and {friend.name} are even</p>
      ) : (
        <p className="green">
          {friend.name} owes you {friend.balance} $
        </p>
      )}
      {/* <button className='button'>Select</button> */}
          <Button onClick={() => OnSelectFriend(friend)}>{ isSelected?"Close":"Select"}</Button>
    </li>
  );
};

export default Friend;
