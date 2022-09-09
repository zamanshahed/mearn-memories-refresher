import React, { useEffect } from 'react'
import { getALlPost } from './App/Store/GeneralStore'
import Form from './Components/Form/Form';
import PostItem from './Components/Post/PostItem'
import Posts from './Components/Post/Posts'

export default function App() {

    useEffect(() => {
        getALlPost();
    }, []);
    return (
        <div className='bg-emerald-600 h-screen flex justify-between items-center px-10'>
            <div>
                <Posts />
                <PostItem />
            </div>
            <Form />
        </div>
    )
}
