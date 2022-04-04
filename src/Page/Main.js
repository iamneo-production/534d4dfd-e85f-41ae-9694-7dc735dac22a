import React from 'react'
import Cards from './Cards';
import { BrowserRouter as Router, Routes ,Link,Route} from 'react-router-dom';
import AddTheme from './Theme/AddTheme';
import content from './Content';
import "./Style.scss";
const Main = () => {
  return (
    <Router>
    <div class="Main">
    <div class="p-3 mb-2 text-white page">
    <h3>Birthday Event</h3>
    <Link to="/theme" style={{color:"white" ,textDecoration: "none" ,paddingLeft:"3rem",paddingTop:".3rem"}}>Book Event</Link>
    <Link to="/(componentName)" style={{color:"white" ,textDecoration: "none",paddingLeft:"2rem",paddingTop:".3rem"}}>View Booked event</Link>
    <h5 style={{paddingTop:".5rem"}}>Logout</h5>
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
  <Routes>
          <Route path="/theme" element={<AddTheme/>}/>
      </Routes>
</div>
</Router>
  )
}

export default Main