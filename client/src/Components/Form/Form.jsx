import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function Form() {
  const [postForm, setPostForm] = useState({
    name: ""
  });

  const handleChange = (e) => {
    // 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SUBMITTING..");
  }
  return (
    <form autoComplete='off' onSubmit={handleSubmit} action='' className='bg-white p-5 rounded-md w-[400px]'>
      <div className="text-center pb-5 text-2xl font-bold">
        Add A New Memory
      </div>

      <TextField
        fullWidth
        id="outlined-name"
        label="Creator Name"
        name='creator'
        value={postForm.creator}
        onChange={handleChange}
      />

      <TextField
        fullWidth
        id="outlined-name"
        label="Post Title"
        name='title'
        value={postForm.title}
        onChange={handleChange}
      />

      <TextField
        fullWidth
        id="outlined-name"
        label="Memory / Message"
        name='message'
        value={postForm.message}
        onChange={handleChange}
      />

      <TextField
        fullWidth
        id="outlined-name"
        label="Memory Tags"
        name='tags'
        value={postForm.tags}
        onChange={handleChange}
      />

      <div className="pt-5 flex justify-center">
        <Button type='submit' variant="contained">Contained</Button>
      </div>


    </form>
  )
}
