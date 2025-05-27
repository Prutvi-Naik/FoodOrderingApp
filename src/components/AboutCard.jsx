import React from "react";
class AboutCard extends React.Component{
    constructor(props){
        super(props)
         this.state ={
         Info:{
            name:"dummy",
            location:"not-found",
         }
        }
    }
    async componentDidMount(){
      const Data  = await fetch("https://api.github.com/users/Prutvi-Naik");
      const json = await Data.json();
      console.log(json)
       this.setState({
          Info:json,
          })
    }
  
    componentWillUnmount(){
        console.log("unmounted")
    }
    render(){
        const {name,location,id} = this?.state?.Info
        return(
            <div className="A-card">
               <h1> Name :{name} </h1>
               <h2> Id:{id}</h2>
               <h2> Mo. 4834949439</h2>
            </div>
        )
    }
}

export default AboutCard;