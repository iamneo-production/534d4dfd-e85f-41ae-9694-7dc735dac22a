import React from 'react'

function Form() {
  return (
    <div className="h-75 w-100 rounded bg-white  d-flex justify-content-center align-items-center"> 
        <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="mb-3">
                <h2>Add Ons</h2>
            </div>
            <div className="d-flex flex-column">
            <input className= "mb-3 p-3 rounded" type="text" placeholder='Enter the Add one name' />
            <input className= "mb-3 p-3 rounded" type="text" placeholder='Enter the price' />
            <input className= "mb-3 p-3 rounded" type="text" placeholder='Enter the Image URL' />
            </div>
            <div>
                <button className='p-3 bg-primary rounded'>Add</button>
            </div>
        </div>
    </div>
  )
}

export default Form