import Button from "./Button";

export default function FormSplitBill({Bill, YourExpenses}) {

    const friendsAmount = Bill - YourExpenses;

    return (
        <form className='form-split-bill'>
            <h2>Split the bill with X </h2>

            <label>💵 Bill Amount</label>
            <input type='number'  />

            <label>🫠 Your Expenses</label>
            <input type='number' />
            
            <label>🫂 X's Expenses</label>
            <input type='number' disabled value={friendsAmount} />

            <label>Who is paying the bill?</label>
            <select>
                <option value='user'>You</option>
                <option value='friend'>X</option>
            </select>


            
            <Button>Split Bill</Button>



        </form>
    )
}