import Button from "./Button";

export default function FormSplitBill({ Bill, YourExpenses, friend }) {
  const friendsAmount = Bill - YourExpenses;
  console.log(friend.name);

  return (
    <form className="form-split-bill">
      <h2>Split the bill with {friend.name} </h2>

      <label>💵 Bill Amount</label>
      <input type="number" />

      <label>🫠 Your Expenses</label>
      <input type="number" />

      <label>🫂 {friend.name}'s Expenses</label>
      <input type="number" disabled value={friendsAmount} />

      <label>Who is paying the bill?</label>
      <select>
        <option value="user">You</option>
        <option value="friend">{friend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
