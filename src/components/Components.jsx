import React, {useState, useEffect} from "react";

function Components() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize",  handleResize);
    console.log("Windows Resize")

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Windows Remove")
    }
  },[])

   useEffect(() => {
    document.title = (`Size: ${width} x ${height}`)
   },[width, height]);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

 return (<div>
         <h1>width: {width}</h1><br/>
         <h1>height: {height}</h1>
        </div>);
}

export default Components;