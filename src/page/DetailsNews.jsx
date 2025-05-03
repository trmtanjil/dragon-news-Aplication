import React, { useEffect, useState } from 'react'
import Header from '../Componets/Header'
import RightAside from '../Componets/HomeLayout/RightAside'
import { useLoaderData, useParams } from 'react-router'
import DetailNewsCart from './DetailNewsCart';

function DetailsNews() {
    const data = useLoaderData();
    const {id}= useParams();

    const [news, setnews] = useState({});

    useEffect(()=>{
        const detailsNews =     data.find(singleNews=>singleNews.id ==id)
            setnews(detailsNews)  
        },[id,data])

        return (
    <>
    <div className=' '>
        <header>
            <Header></Header>
        </header>
        <main  className='grid grid-cols-12 '>
            <section className='col-span-9 w-11/12 mx-auto'>
            <h1 className='font-bold py-2'>News Details</h1>
            <DetailNewsCart news={news}></DetailNewsCart>
            </section>
        <aside  className='col-span-3'>
            <RightAside></RightAside>
        </aside>
        </main>
      
    </div>
    </>
  )
}

export default DetailsNews