import React from 'react'
import CategoriItem from './CategoriItem'

const SuggetProduct = () => {
  return (
    <div >
        <h1 className='my-10 text-primary font-bold text-2xl '>People also bought</h1>
        <div className='flex flex-wrap gap-2'>
            <CategoriItem></CategoriItem>
            <CategoriItem></CategoriItem>
            <CategoriItem></CategoriItem>
            <CategoriItem></CategoriItem>
            <CategoriItem></CategoriItem>
            <CategoriItem></CategoriItem>
            <CategoriItem></CategoriItem>
        </div>
    </div>
  )
}

export default SuggetProduct