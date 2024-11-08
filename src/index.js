import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';

function App () {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.body.style.backgroundColor = 'darkred'; 
    }, 2000); 

    
  }, []); 

  return (
      <h1>hello world</h1>
  );
};


var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App></App>)