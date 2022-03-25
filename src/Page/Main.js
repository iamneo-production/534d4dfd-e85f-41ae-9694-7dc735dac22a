import React from 'react'
import Cards from './Cards';
import content from './Content';
import "./Style.scss";
const Main = () => {
  return (
    <div class="Main">
    <div class="p-3 mb-2 text-white page">
    <h1>Book Event</h1>
    <p>View Booked event</p>
    <p class="right">Logout</p>
    </div>
    <div class="image">
    <div class="nav">
    <input placeholder='Type here to search'/>
    <button>Search</button>
    </div>
  <div class="d-flex">
       <Cards items={content[0]} />
        <Cards items={content[1]} />
        <Cards items={content[2]} />
  </div>
  </div>
</div>
  )
}

export default Main