import React from "react";
import Button from "./Button";
import { useState } from "react";

const FormAddFriend = ({ onAddFriend }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();
      const id = crypto.randomUUID();
      const newFriend = {
        id,
      name,
      image: `${image}?=${id}`,
        balance: 0,
      };
      
      onAddFriend(newFriend);

      console.log(newFriend);
      setImage("https://i.pravatar.cc/48");
      setName("");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🫂 Friend Name</label>
      <input
        type="text"
        value={name}
        placeholder="Enter friend name"
              onChange={(e) => setName(e.target.value)}
              required
      />

      <label>🖼️Image URL</label>
      <input
        type="text"
        value={image}
              onChange={(e) => setImage(e.target.value)}
              required
      />
      {/* 
          <button className='button'>Add Friend</button> */}
      <Button>Add Friend</Button>
    </form>
  );
};

export default FormAddFriend;
