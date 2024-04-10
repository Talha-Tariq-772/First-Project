import logo from "./logo.svg";
import "./App.css";
import React ,{useState} from "react";





function App() {
  const [weight,setweight]=useState(0);
const [height,setheight]=useState(0);
const [bmi,setbmi]=useState("");
const [message,setmessage]=useState("");
  let callbmi=(e)=>{
    e.preventDefault();

    if(weight==0||height==0){
      alert("Please  enter the valid weight and height");
    }
    else{
      let bmi=(weight/(height*height)*703);
      setbmi(bmi.toFixed(1));
      if(bmi<25){
        setmessage("you are under-weight");
        
      }
      else if(bmi>=25&& bmi<30){
        setmessage("you are healthy-weight");
      }
      else{
        setmessage("you are over-weight");
      }
    }
    }
    
    let relode=()=>{
      window.location.reload();
    }
    
  return (
    <div className="App">
      
      <div className="container">
        <div>
        <h2>BMI Calculator</h2></div>
        <form onSubmit={callbmi}>
          <div>
            <label>Weight Value (lbs)</label>
            <input
              type="text"
              placeholder="Enter your weight value"
              value={weight}
              onChange={(e)=>setweight(e.target.value)}
            ></input>
          </div>
          <div>
            <label>height Value (inch)</label>
            <input
              type="text"
              placeholder="Enter your height value"
              value={height}
              onChange={(event)=>setheight(event.target.value)}
            ></input>
          </div>

          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline " onClick={relode} type="button">
              Relode
            </button>
          </div>
          <div className="centre">
            <h3>Your BMI is {bmi} :</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
