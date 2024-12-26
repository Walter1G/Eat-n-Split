import Button from "./Button";
import { useState } from "react";

export default function FormSplitBill({ friend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");

    const friendsAmount = bill ? bill - paidByUser : "";
    
    function handleSubmit(e) {
        e.preventDefault();
        if (!bill || !paidByUser) return;

        onSplitBill(whoIsPaying === "user" ? friendsAmount : -paidByUser);
        

    }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split the bill with {friend.name} </h2>

      <label>💵 Bill Amount</label>
      <input
        type="number"
        required
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>🫠 Your Expenses</label>
      <input
        type="number"
        required
        value={paidByUser}
        onChange={(e) => setPaidByUser(Number(e.target.value) > bill ? bill : Number(e.target.value))}
      />

      <label>🫂 {friend.name}'s Expenses</label>
      <input type="number" disabled value={friendsAmount} />

      <label>Who is paying the bill?</label>
      <select
        required
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{friend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
