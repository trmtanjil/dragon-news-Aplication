 
import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router'
import NewsCart from './NewsCart';

function CetegoryNews() {
  const data = useLoaderData()
  const [catergorynews, setCategoryNews] =useState([]); 

 
  const {id} = useParams();

  // console.log(data )

  useEffect(()=>{
    if(id == '0'){
      setCategoryNews(data)
      return;
    }
    else if (id == '1'){
      const filternews = data.filter(news=>news.others.is_today_pick ==true);
      setCategoryNews(filternews)
    }
    else{
      const filternews = data.filter(news=>news.category_id == id);
      setCategoryNews(filternews)
    }

  },[data,id])
  
  return (
  
   <>
    <h1 className='font-bold'>Total <span className='text-secondary'> {catergorynews.length}</span> news found</h1>

     <div className='grid grid-cols-1'>
      {
        catergorynews.map(news=>(<NewsCart key={news.id} news={news}></NewsCart>))
      }
     </div>
 
   </>

  )
}

export default CetegoryNews