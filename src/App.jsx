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
  // const [toggleSplitBill, setToggleSplitBill] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectFriend, setSelectFriend] = useState(null);

  function handleToggleAddFriend() {
    setAddFriend(!addFriend);
    setSelectFriend(null);
  }

  // function handleToggleSplitBill() {

  //   // setSelectFriend(id);
  //   setToggleSplitBill(!toggleSplitBill);

  // }
  function handleAddFriend(newFriend) {
    setFriends([...friends, newFriend]);
    setAddFriend(false);
  }

  function handleSelection(friend) {
    // selectFriend == friend ? setSelectFriend(null) : setSelectFriend(friend);
    setSelectFriend(selected => selected?.id === friend.id ? null : friend);
    setAddFriend(false);
    
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList selected={selectFriend} OnSelectFriend={handleSelection} friends={friends} />

        {addFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

        <Button onClick={handleToggleAddFriend}>
          {addFriend ? "Close" : "Add Friend"}
        </Button>
      </div>

      {selectFriend && <FormSplitBill friend={selectFriend} />}
    </div>
  );
}
