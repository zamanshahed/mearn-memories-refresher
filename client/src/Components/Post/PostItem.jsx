import React, { useEffect } from 'react'
import { NoImage } from '../../App/Utility/ImageImport';

export default function PostItem({ data }) {

  useEffect(() => {
    console.log("data:::", data);
  }, [data])
  return (
    <div className="shadow-xl rounded-xl overflow-hidden w-[350px] h-[400px] ">
      <div className="w-full">
        {
          data?.selectedFile ?
            <img src={data?.selectedFile} alt="" className='w-full h-[200px] object-cover' />
            : <img src={NoImage} alt="" className='w-full h-[200px] object-cover' />
        }
      </div>

      <div className="p-5">
        <div className='pt-[10px]'>
          {data.tags.map((tag, index) => <span key={index}>{tag}</span>)}
        </div>
        <div className="text-left font-semibold text-xl capitalize pt-5">
          {data?.title}
        </div>
        <div className="text-base pt-5">
          {data?.message}
        </div>
      </div>

    </div>
  )
}
