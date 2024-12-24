import React from 'react'
import Button from './Button'

const FormAddFriend = ({onAddFriend}) => {
  return (
      <form className='form-add-friend'>
          <label>🫂 Friend Name</label>
          <input type='text' placeholder='Enter friend name' />

          <label>🖼️Image URL</label>
          <input type='text' />
{/* 
          <button className='button'>Add Friend</button> */}
          <Button>Add Friend</Button>
         
    </form>
  )
}

export default FormAddFriend