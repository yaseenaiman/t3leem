import React from "react";


const Card = ({id, name, position, compName, city}) =>
{

return (
<div>
  
  <img alt={"user_image"} src={"https://robohash.org/"+id+"?200x200}" } />

 <p> Name is {name} </p>
 <p> Position is {position} </p>
 <p> Company is {compName} </p>
 <p> City is {city} </p>
 </div>

);
}

export default Card;