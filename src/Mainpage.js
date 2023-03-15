import React, { Component, useState, useEffect } from 'react';
import TwoColumns from './Vogo_2';
import FourColumns from './Vogo_1';
import Frpinv from './Vogo_3';
import Vogo_4 from './Vogo_4';
import Tabs from './Browser';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { TestContext } from './context';
import axios from 'axios';
import Column4 from './vogo_5';
import Aee from './Fromchatgpt';
 
const Page=()=>{
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



    const nirmal=2
    return (
        <>
        <TwoColumns column1="VOGO DIGITAL LAB" column2="ID" />
       <FourColumns column1="계약 체결일" column2={1} column3="FIL 지급 개시일" column4={2}/>
       <FourColumns column1="게약된 FRP 유효채글파워(TiB)" column2={500} column3="투자지원금"/>
       <FourColumns column1="현재 FRP 유효채글파워(TiB)" column2={myData.total_Quality_adjP_With_increased_FRP_Inv} column3="계약일 매입가능수량"/>
       <FourColumns column1="서약금" column3="담보 FIL매입수량"/>
       <TwoColumns column1="주소" column2="서울시 영동포구 여의나루로 12, 2 동 706 호 " />
       <FourColumns column1="연락처" column3="이메일"/>
       <FourColumns column1="거래은행" column3="게좌번호"/>
       <TwoColumns column1="FIL 지갑주소" column2="f1hgb4b5qf7aliphgi2emxoa6olwvpxb3xvuwdply"/> 
      <br/>
       <TwoColumns column1="KSL 실시간 현황" column2="날자 / FIL 가격"/>
      <FourColumns column1="당월 보상 FIL" column2={myData.fil_Rewards_on_daily_basis} column3="당원 staking [FIL] " column4={myData.staking_on_daily_basis}/>
      <FourColumns column1="당월 FRP 증가 TiB" column2={myData.increase_FRP} column3="당월 지급 FIL" column4={0}/>
      <FourColumns column1="총 STAKING 수량(FIL) 및 총 우효보상 파워" column2="총 지급수량(FIL) 및 현재가치(원)" column3= "총 보상 수량(FIL) 및 현재가치(원)" column4="목표수일류 및 현재 달설율(%)"/>
      <FourColumns column1={myData.total_Staking} column3={myData.total_FIL_Rewards}/>
      <FourColumns column1={myData.total_Quality_adjP_With_increased_FRP_Inv} column3={myData.total_Reward_value}/>
      <FourColumns column1='총 STAKING 수량 및 유효보상 파워(TB)' column2='총 지급수량(FIL) 및 현재 가치' column3='총 보상수량 및 현재가치'
      column4='목표수일률 및 현제 달설률'/>
      <FourColumns/>
      <FourColumns/>     
      </>
    )
}

export default Page;

//its about the frame work that we need to know how to 