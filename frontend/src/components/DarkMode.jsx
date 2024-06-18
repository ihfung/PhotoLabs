import React from 'react';


const DarkMode = (props) => {
  const toggleDark = () => {
  
    props.dark();
  };

  return (
    
    <button className="dark" onClick={toggleDark}>💡</button>
  ) 
};

export default DarkMode;