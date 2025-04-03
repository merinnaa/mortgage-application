import React,{Fragment} from "react"
import { Link } from "react-router-dom";
import '../App.css';

const Front = () => {
  return (
    <Fragment >
      <h1 className="text-red-500">Fundify</h1>
      <div class="imagesContainer">
        
        <div class="imageSample">
          <img src="/himgs/house1.png"/>
        </div>
        <div class="imageSample">
          <img src="/himgs/house2.png"/>
        </div>
        <div class="imageSample">
          <img src="/himgs/house3.png"/>
        </div>
        <div class="imageSample">
          <img src="/himgs/house4.png"/>
        </div>
      
       

   

      </div>

      <Link to="/login"> Login </Link>

      <Link to="/register"> SignUp </Link>
      

    </Fragment>
  )

};
export default Front;