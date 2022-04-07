import { RiEditCircleLine, RiDeleteBin6Line } from "react-icons/ri";
import React from 'react'

function Card1({imgSrc, foodName, foodCat, price}) {
  return (
    <div>
      <div className="d-flex justify-content-center mt-5">
          <div className="bg-light d-flex justify-content-evenly align-items-center w-75">
            <img src={imgSrc} alt="food" width={150}  className="m-2" />
            <p className="mt-3">{foodName}</p>
            <p className="mt-3">{foodCat}</p>
            <p className="mt-3">{price}</p>
            <p className="mt-3"><RiEditCircleLine size={25} /> <RiDeleteBin6Line size={25} className="ms-3"/></p>
          </div>
        </div>
    </div>
  )
}

export default Card1