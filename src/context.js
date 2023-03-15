import React, {useState,  createContext} from "react"

export const TestContext=createContext({
    

    information_for_inv:null,
    setInformationHandler:(information_for_inv)=>{}, 
})
const TestContextProvider=({
    children
})=>{

    const {information_for_inv, setInformation}=useState();
    const setInformationHandler=(information_for_inv)=>setInformation(information_for_inv)
    return (
    <TestContext.Provider value={{information_for_inv, setInformationHandler
    }}> {children}
    </TestContext.Provider>
);
};
export default TestContextProvider