import React, { useEffect } from "react";
import { useState } from "react";

const UseCurrentScrollPosition = () => {
    const [currScrollPosition, setCurrScrollPosition] = useState(0);
    console.log(window.innerHeight);
    console.log(window.pageYOffset)
   // console.log(window.s)
  
    useEffect(()=>{
        const handleScrollEvent = () => setCurrScrollPosition(window.scrollY);
        
        document.addEventListener("scroll", handleScrollEvent);
        return () => 
          document.removeEventListener("scroll", handleScrollEvent);
    }, []);
    console.log(currScrollPosition)
  
    if (currScrollPosition > window.innerHeight-100){
        console.log("es mayor")
    }
    return currScrollPosition;
    
}
export default UseCurrentScrollPosition