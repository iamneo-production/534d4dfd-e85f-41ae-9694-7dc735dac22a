import Navbar from "../components/Navbar";
import { IoMdAddCircleOutline } from "react-icons/io";
import Card1 from '../components/Card1'
import img1 from '../images/img-1.jpeg'
import img2 from '../images/img-2.jpeg'
import img3 from '../images/img-3.jpeg'

function FoodMenu() {


  const FoodImg = [img1, img2, img3]
  const FoodNames = ["Roll","Fries","Grill"]
  const FoodCat = ["Non-veg","Non-veg","Non-veg"]
  const Price = ["250","150","400"]

  return (
    <div className="bg-info" style={{ height: "100vh" }}>
      <Navbar />
      <div style={{ height: "90.5vh" }}>
        <div
          className="d-flex bg-light justify-content-center align-items-center ms-5 mt-3"
          style={{ width: "130px" }}
        >
          <IoMdAddCircleOutline size={30} />
          <p className="mt-3 ms-2">Add Item</p>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <div className="bg-light d-flex justify-content-evenly align-items-center w-75">
            <p className="mt-3">Item Image</p>
            <p className="mt-3">Item Name</p>
            <p className="mt-3">Item category</p>
            <p className="mt-3">Price</p>
            <p className="mt-3">Action</p>
          </div>
        </div>
        {FoodImg.map((data, index)=>{
          return(
            <Card1 
        imgSrc={data}
        foodName={FoodNames[index]}
        foodCat={FoodCat[index]}
        price={Price[index]}
         />
          )
        })  }
      </div>
    </div>
  );
}

export default FoodMenu;
