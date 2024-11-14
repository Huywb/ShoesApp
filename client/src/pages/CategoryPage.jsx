import React from 'react'
import CategoriItem from '../components/CategoriItem'

const CategoryPage = () => {
  return (
    <div className='flex w-[80%] flex-col items-center justify-center gap-2  mx-auto pt-10'>
      <h1 className='text-primary font-bold text-4xl text-shadow-custom'>Bags</h1>
      <div className='w-full flex items-center gap-3 justify-start flex-wrap p-20 transition-all duration-3000 transform ease-in-out'>
          <CategoriItem></CategoriItem>
       
      </div>
    </div>
  )
}

export default CategoryPage