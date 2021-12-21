import React, { useState } from 'react';
// import SingleColor from './SingleColor';
import Values from 'values.js';
import SingleColor from './SingleColor';

function App() {
const [color, setColor] =useState('');
// taking the value from the input (color)
const [error, setError] =useState(false);
const [list, setList] =useState(new Values('#f15025').all(10));

const [number, setNumber]= useState(10);
// If I mistakenly given any wrong color hexacode in the input section 
// All the colors in the list state 

const handleSubmit =(e)=>{
  e.preventDefault();
  try{
    let colors = new Values(color).all(10)
    setList(colors);
    
  }
  catch(error){
    setError(true);
  console.log(error);
  }

}





  return ( 
   <>
  <section className="container">
 <h3>color generator</h3>
 <form onSubmit={handleSubmit}>
   <input type="text" value={color} onChange={(e)=>setColor(e.target.value)} 
     placeholder="#f15025"
     className={`${error? 'error': null}`}
   />
   {/* <input className="number" type="number" value={number} onChange={(e)=>setNumber(e.target.value)} /> */}
   <button className="btn" type="submit">submit</button>
 </form>
  </section>
  <scetion className="color">
    <scetion className="colors">
      {list.map((color,index)=>{
       return <SingleColor key={index} {...color} index={index} hexColor={color.hex}/>
      })}
    </scetion>
  </scetion>
  </> 
  )
}

export default App;
