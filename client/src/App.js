import React, { useEffect } from 'react'
import { getALlPost } from './App/Store/GeneralStore'
import Form from './Components/Form/Form';
import Posts from './Components/Post/Posts'

export default function App() {

    useEffect(() => {
        getALlPost();
    }, []);
    return (
        <div className='bg-emerald-600 py-10 flex justify-between items-center px-10'>
            <div>
                <Posts />
            </div>
            <Form />
        </div>
    )
}
