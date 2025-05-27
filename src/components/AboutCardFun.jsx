import { useState } from "react";
const AboutCardFun = (props) =>{
    const [count] = useState(0)
    const [count2] = useState(1)
    console.log(props)
    return(
            <div className="A-card">
                <h1>Count:{count}</h1>
                <h1>Count2:{count2}</h1>
               <h1> Name :{props.name} </h1>
               <h2> Address: {props.address}</h2>
               <h2> Mo. 4834949439</h2>
            </div>
        )
}
export default AboutCardFun;