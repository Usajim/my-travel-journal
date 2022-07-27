import React from "react";
import Navbar from "./components/Navbar"
import Travel from "./components/Travel";
import data from "./components/data";


export default function App() {
  const travelData = data.map (items => {
    return <Travel
       items={items}
     />
    
  })
    
  return (
    <div>
          <Navbar />
          <section className="travel-list"> {travelData}</section>
         
          
    </div>
  
  )
}



