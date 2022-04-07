import React from 'react'
import { RiEditCircleLine, RiDeleteBin6Line } from "react-icons/ri";
import img1 from "../images/img-1.jpeg"
function Card2({classProps}) {
  return (
    <div className={classProps? classProps : null} >
        <div class="card" className="w-75 bg-white rounded">
  <img src={img1} class="card-img-top" alt="..."/>
  <div class="card-body d-flex justify-content-between">
    <h6 class="card-title">Card title</h6>
    <h6 class="card-title">Price 2500</h6>
  </div>
  <div className="d-flex justify-content-end me-3">
  <p><RiEditCircleLine size={15} /> <RiDeleteBin6Line size={15} className="ms-1"/></p>
  </div>
</div>
    </div>
  )
}

export default Card2