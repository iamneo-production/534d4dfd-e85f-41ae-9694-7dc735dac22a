import Navbar from "../components/Navbar";
import { IoMdAddCircleOutline } from "react-icons/io";
import Card1 from '../components/Card1'
import img1 from '../images/img-1.jpeg'
import img2 from '../images/img-2.jpeg'
import img3 from '../images/img-3.jpeg'
import Card2 from "../components/Card2";
import Form from "../components/Form";

function Addons() {


  const FoodImg = [img1, img2, img3]
  const FoodNames = ["Roll","Fries","Grill"]
  const FoodCat = ["Non-veg","Non-veg","Non-veg"]
  const Price = ["250","150","400"]

  return (
    <div className="bg-info" style={{ height: "100vh" }}>
      <Navbar />
      <div style={{ height: "90.5vh" }} className="container">
        <div className="row h-75">
        <div className="col-8">
        <div
          className="d-flex bg-light justify-content-center align-items-center ms-5 mt-3"
          style={{ width: "130px" }}
        >
          <IoMdAddCircleOutline size={30} />
          <p className="mt-3 ms-2">Add-ons</p>
        </div>
        <div className=" h-100 d-flex justify-content-center align-items-center container">
          <div className="row">
              <div className="col">
          <Card2 classProps="mb-3" />
          <Card2/>
              </div>
          </div>
          <div className="row">
              <div className="col">
          <Card2 classProps="mb-3" />
          <Card2/>

              </div>
          </div>
         
        </div>
        </div>
        <div className="col-4">
          <div className="h-100 w-100 d-flex justify-content-center align-items-center ">
          <Form/>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Addons;
