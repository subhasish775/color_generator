import React,{ useState,useEffect} from 'react';
// import rgbToHex from './utils';

const SingleColor =({rgb, weight, index, hexColor})=>{
    // console.log(hexColor);
    const [alert, setAlert]= useState(false);
    const bcg = rgb.join(',')
    // const hex = rgbToHex(...rgb);
    const hexValue = `#${hexColor}`;

  useEffect(()=>{
   const timeout = setTimeout(()=>{
    setAlert(false);
   },3000)
   return ()=>clearTimeout(timeout);
  },[alert])


//  how to copies to the clipboard see under the article code in javascript is--> navigator.clipboard.writeText(value which you want to copy)
    return ( 
    <article className={`color ${index > 10 && 'color-light'}`} style={{backgroundColor:`rgb(${bcg})`}}
    onClick={()=>{
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
    }}  >
    <p className="percent-value">{weight}%</p>
    <p className="color-value">{hexValue}</p>
    {alert && <p className="alert">copied to clipboard</p>}
    </article>
   
    )
}


export default SingleColor;


// There are two ways that you can access the hexa-color in our project 
// one of them is using the function like utlis or simply you can transfer the hexcolor property from the App js 
// page to SingleColor Page