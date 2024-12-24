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
  // console.log(addFriend);
  function handleAddFriend() {
    setAddFriend(!addFriend)
    // console.log("State changed")
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={initialFriends} />

        {addFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        { addFriend?
          <Button onClick={handleAddFriend}>
           Close
          </Button> :<Button onClick={handleAddFriend}>
           Add Friend
          </Button>
        }
      </div>

      <FormSplitBill />
    </div>
  );
}
