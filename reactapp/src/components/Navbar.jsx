import {
  Link,
} from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-primary d-flex">
      <div className="col-10 d-flex justify-content-center mt-2">
       <Link to="/" > <p className="me-5 text-white fs-5">Add Theme </p></Link>
        <Link to="/food-menu" ><p className="me-5 text-white fs-5">Food Menu</p></Link> 
        <Link to="/add-ons" ><p className="me-5 text-white fs-5">Add-ons</p></Link> 
      </div>
      <div className="col-2 d-flex justify-content-end mt-2">
        <p className="me-5 text-white fs-5">Logout</p>
      </div>
    </div>
  );
}

export default Navbar;
