import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router'

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
    else if (id =='1'){
      const filteredNews =  data.filter(news=>news.others.is_today_pick == true );
      setCategoryNews(filteredNews)
    }
    else{
      const filteredNews =  data.filter(news=>news.category_id == id );
     
      setCategoryNews(filteredNews)
    }
 
  },[data,id])
  return (
  
    <div>Total {catergorynews.length} news found</div>

   
 
  )
}

export default CetegoryNews