import React from 'react'
import useGeneralStore from '../../App/Store/GeneralStore'
import PostItem from './PostItem'

export default function Posts() {
  const { allPosts } = useGeneralStore();

  console.log(allPosts);
  return (
    <div className='bg-white p-5 rounded-md min-w-[500px]'>
      <div className="text-center font-bold text-2xl">
        Posts
      </div>

      <div className="grid 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 md:space-x-5 md:space-y-5 space-y-0 md:items-center">

        {
          allPosts?.length ? allPosts.map((item, index) =>
            <PostItem data={item} key={index} />
          )
            : ""
        }
      </div>

    </div>
  )
}
