import FriendsList from "./FriendsList";
import FormAddFriend from "./FormAddFriend";
import { useState } from "react";
import Button from "./Button";
import FormSplitBill from "./FormSplitBill";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [addFriend, setAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  // console.log(addFriend);
  function handleToggleAddFriend() {
    console.log("State changed")
    setAddFriend(!addFriend);
  }
  function handleAddFriend(newFriend) {
    setFriends([...friends,newFriend]);
    
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} />

        {addFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

        <Button onClick={handleToggleAddFriend}>
          {addFriend ? "Close" : "Add Friend"}
        </Button>
      </div>

      <FormSplitBill />
    </div>
  );
}
