import React, { use } from 'react'
import { NavLink } from 'react-router';

const cetegoryPromiss = fetch('/categories.json').then(res=>(res.json()));

function Categorys() {
    const cetegory = use(cetegoryPromiss);
    console.log(cetegory)


  return (
  <>
    <div className='font-bold'>All Categorys ({cetegory.length})</div>
    <div className='grid grid-cols-1 gap-3 pt-5'>
      {
        cetegory.map(category =>(
          <NavLink
          key={category.id}
          to={`/cetegory/${category.id}`}
          className='btn w-full bg-base-100  hover:bg-base-200 border-0  text-accent font-semibold'
          >{category.name}  </NavLink>
        ))
      }
    </div>
  </>


  )
}

export default Categorys