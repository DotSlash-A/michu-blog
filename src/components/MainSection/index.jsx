import React from 'react'
import BlogCard from '../BlogCard'

export default function index() {
  return (
    <>
    <div className='container   is-max-widescreen'>


      <div className='is-flex is-flex-direction-column '>
        <div className="is-flex is-flex-direction-row">
          <BlogCard/>
          <BlogCard/>
        </div>
        <div className="is-flex is-flex-direction-row">
          <BlogCard/>
          <BlogCard/>
          <BlogCard/>
        </div>
      </div>
      </div>
    </>
  )
}
