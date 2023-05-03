//import withRouter from './withRouter';
import React, { Component } from 'react'
import homebground from '../assets/techbground.jpg';

function Home(props) {
  
  return (
    <section 
      style={{ 
        backgroundImage: `url(${homebground})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        height: "800px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textAlign: "center"
      }}
    >
    </section>
  )
}
// withRouter will pass updated match, location, and history props
// to the wrapped component whenever it renders.
export default Home
