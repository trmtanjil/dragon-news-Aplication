import React from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { Link } from 'react-router'
 
function DetailNewsCart({news}) {
    
  return (
    <div className='space-x-5  mx-auto'> 
        <img className='w-full h-[350px] object-cover' src={news.image_url} alt="" />
    <h2 className='font-semibold  py-2'> {news.title}</h2>
    <h1 className='text-gray-500'>{news.details}</h1>
    <button className='flex items-center btn btn-secondary'> 
    
    <FaArrowLeftLong className='mr-2' />
<Link
    to={`/cetegory/${news.category_id}`}>
    All news in this category
  </Link>
 </button>
    </div>
  ) 
}

export default DetailNewsCart