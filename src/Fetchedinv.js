import React, { useState } from "react";
import {useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { TestContext } from "./context";

const Client=()=>{
  
    const navigate=useNavigate()
    const {information_for_inv, setInformationHandler}= useContext(TestContext)
    const [myData, setMyData]=useState([])

   useEffect(() => {
    // Fetch the number of goose for the logged-in user
    axios.get('http://localhost:8080/calculate', {
      withCredentials: true,
    })
      .then((response) => {
        const data=response.data;
       setMyData(data)
       console.log(myData)
       console.log(myData.ID)
       console.log(myData.date)
       console.log(myData.fil_Rewards_on_daily_basis)
       console.log(myData.increase_FRP)
       console.log(myData.staking_on_daily_basis)
       console.log(myData.total_FIL_Reward_Vogo_daily_Basis)
       console.log(myData.total_FIL_Rewards)
       console.log(myData.total_FRP)
       console.log(myData.total_Fil_rewards_for_Inv)
       console.log(myData.total_Quality_adjP_For_Inv_daily_Basis)
       console.log(myData.total_Quality_adjP_For_Vogo_Daily_Basis)
      console.log(myData.total_Quality_adjP_With_increased_FRP_Inv)
      console.log(myData.total_Reward_value)
      console.log(myData.total_Staking)
      console.log(myData.value_of_FIL_Paid_to_Investor)
      console.log(myData.value_of_Total_FIl_Paid)
      setInformationHandler(myData.date)
      console.log(information_for_inv)
      })
      .catch((error) => {
        console.log("The resource could not be found")
        console.log(error);
      });
  },[]);

    return (
    

     <>
     <h1> Id:{myData.ID}</h1>
        <p> Date: {myData.date}</p>
        <p> FIl_Rewards:{myData.fil_Rewards_on_daily_basis}</p>
        <p> Increase_FRP: {myData.increase_FRP} TiB </p>
        <label> Quality_adjP_for_Inv: {myData.total_Quality_adjP_For_Inv_daily_Basis} </label>
      
        <p> Your total value is</p>
        
       </>  
    )
}
export default Client 