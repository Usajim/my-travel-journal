import React from "react"


export default function Travel(props) {
    console.log(props)
    return (
        <div className="travelDetails">
            <img src={`../images/${props.items.coverImg}`} alt={props.items.alt} className="coverImg"/>
            
            <div className="description">
            <div className="locationDetails">
                <span><img src={`../images/${props.items.stats.path}`} alt="Location Pin" className="pin"/></span>
               <span className="location">{props.items.stats.location}</span>
               <span className="googlelink"> <a href={props.items.stats.googleLink}>View on Map</a></span>
            </div>
            <h3>{props.items.title}</h3>
            <p className="date">{props.items.date}</p>
            <p>{props.items.description}</p> 
            </div>
           

        </div>
        
    )
}

//





//export default function Card(props) {

    //let badgeText 
    //if (props.details.openSpots === 0) {
       // badgeText = "SOLD OUT"
    //} else if (props.details.location === "online") {
      //  badgeText = "ONLINE"
    //}
    //return (
        
          //  <div className="card">
              //  {badgeText && <div className="card-badge">{badgeText}</div>}
               // <img src={`../images/${props.details.coverImg}`} alt="test" className="card--img "/>
            //
               // <div className="card--stats">
                   // <img src="../images/Star.png" className="card--star" alt="test"/>
                   // <span>{props.details.stats.rating}</span>
                    //<span className="gray">({props.details.stats.reviewCount}) .  </span>
                    //<span className="gray">{props.details.location}</span>
                //</div>
                //<p>{props.details.title}</p>
                //<p><span className="bold">From ${props.details.price}</span> / person</p>
           // </div>

    //   
  