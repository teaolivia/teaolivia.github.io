import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Portfolio = () => (
  <Layout>
    <SEO title="My Portfolio" />
    <h1>My Portfolio</h1>
    <p> </p><p> </p>
    <dl>
      <dt>
        <a href="https://github.com/ParadiseCatz/IF2110-Tubes-Alstruk--Monopoly">
          Monopoly Simulation (2015)
        </a>
      </dt> 
      <dd>A game board up to 4 players similar to Monopoly.Create by <span style={{color: `#083D77`}}><b>C++.</b></span></dd>

      <dt> 
        <a  href="https://github.com/teaolivia/SmartATK">
          SmartATK (2016)
        </a>
      </dt> 
      <dd>A web-based application for managing office stationary inventory in a
      university. <span style={{color: `#083D77`}}><b>PHP. Laravel. SQL.</b></span></dd> 
      
      <dt>
        <a href="https://github.com/keychera/AquaAesthetic">
          AquaAesthetic (2017)
        </a>
      </dt> 
      <dd>create an aquarium simulation with user can interact by feeding and buying
        fishes. <span style={{color: `#083D77`}}><b>Java. Java Swing. JUnit.</b></span></dd> 
      
      <dt>
        <a href="https://github.com/teaolivia/Pamitran">
          Pamitran Electric e-Shop (start 2018)
        </a>
      </dt> 
      <dd>a web-based hometown-coverage mini e-commerce. <span style={{color: `#083D77`}}><b>Python. Google Cloud Functions. Django. React.js.</b></span></dd>  
    </dl>
  </Layout>
)

export default Portfolio