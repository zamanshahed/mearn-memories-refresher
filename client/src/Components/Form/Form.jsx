import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { getBase64 } from '../../App/Utility/UtilityFunctions';
import { saveNewPost } from '../../App/Store/GeneralStore';


export default function Form() {
  const [postForm, setPostForm] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
  });
  const [memoryImage, setMemoryImage] = useState("");

  const handleChange = (e) => {
    switch (e.target.name) {
      case "creator":
        setPostForm({ ...postForm, "creator": e.target.value });
        break;
      case "title":
        setPostForm({ ...postForm, "title": e.target.value });
        break;

      case "message":
        setPostForm({ ...postForm, "message": e.target.value });
        break;

      case "tags":
        setPostForm({ ...postForm, "tags": e.target.value });
        break;

      default:
        console.log("Error, invalid input");
        break;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SUBMITTING..", postForm, memoryImage);

    let saveSuccess = saveNewPost(postForm, memoryImage);

    if (saveSuccess) {
      setMemoryImage("");
      setPostForm({
        creator: "",
        title: "",
        message: "",
        tags: "",
      })
    }
  }

  return (
    <form autoComplete='off' onSubmit={handleSubmit} action='' className='bg-white p-5 rounded-md w-[400px] space-y-5'>
      <div className="text-center text-2xl font-bold">
        Add A New Memory
      </div>

      <div className="flex justify-center">
        <Button variant="contained" component="label">
          Upload Image
          <input
            hidden
            onChange={(e) => {
              console.log("Uploading...", e.target.files[0]);
              getBase64(e.target.files[0], (res) => setMemoryImage(res));
            }}
            accept="image/*"
            multiple={false}
            type="file" />
        </Button>
      </div>
      {
        memoryImage ?
          <div className='flex w-full justify-center h-[200px]'>
            <img src={memoryImage} alt="" className='w-full h-full object-cover rounded-md' />
          </div>
          : ""
      }

      <TextField
        required
        fullWidth
        id="outlined-name"
        label="Creator Name"
        name='creator'
        value={postForm.creator}
        onChange={handleChange}
      />

      <TextField
        required
        fullWidth
        id="outlined-name"
        label="Post Title"
        name='title'
        value={postForm.title}
        onChange={handleChange}
      />

      <TextField
        required
        fullWidth
        multiline
        minRows={7}
        id="outlined-name"
        label="Memory / Message"
        name='message'
        value={postForm.message}
        onChange={handleChange}
      />

      <TextField
        required
        fullWidth
        id="outlined-name"
        label="Memory Tags"
        name='tags'
        value={postForm.tags}
        onChange={handleChange}
      />



      <div className="flex justify-center">
        <Button type='submit' variant="contained">Contained</Button>
      </div>


    </form>
  )
}
