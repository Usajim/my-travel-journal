import React from "react";
import Navbar from "./components/Navbar"
import Travel from "./components/Travel";
import data from "./components/data";


export default function App() {
  const travelData = data.map (items => {
    return <Travel
       key={items.id}
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



