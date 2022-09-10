// import React from 'react'

import { useParams, useSearchParams } from "react-router-dom"

const Post = () => {
    let {category,id}=useParams()
    let [searchParams,setSearchParams]=useSearchParams()
  return (
    <>
    <h1>Post Page - {category}</h1>
    <h1>post Page - {id}</h1>
    </>
  )
}

export default Post