import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import {FaComment} from "react-icons/fa"
import "./ReqUserPostCard.css"

const ReqUserPostCard = () => {
  return (
    <div className='p-1'>
        <div className='post w-60 h-60 p-1 rounded'>
            <img className="cursor-pointer rounded" src = "https://cdn.pixabay.com/photo/2024/03/05/10/38/boat-8614314_640.jpg" alt=""></img>
            <div className='overlay'>
                <div className='overlay-text flex justify-between'>
                    <div >
                        <AiFillHeart></AiFillHeart> <span>10</span>
                    </div>
                    <div>
                        <FaComment/> <span>30</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReqUserPostCard