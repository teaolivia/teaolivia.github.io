import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Portfolio = () => (
  <Layout>
    <SEO title="My Portfolio" />
    <div class="layout">
      <div style={{padding: `1em`,        
              marginBottom: `1.45rem`,
              marginLeft: `1.45rem`,}} id="page-wrap">
        <h1>My Portfolio</h1>
        <p> </p><p> </p>
        <div style={{ padding: `1em`}}>
          <dl>
            <dt>
              <a style={{color: `#1A090D`, fontWeight: `600`}}  href="https://github.com/teaolivia/viralin">
                viral.in (start 29th May 2019, expected finished 25th June 2019)
              </a>
            </dt> 
            <dd>viral.in is an application to advertise products where there are promotors/referrals who are going to receive points which can be liquidified into their respective balance account. <span style={{color: `#083D77`}}><b> Python. Django. Vue.js. Docker. <i>other infrastructure tools will be added alongside sprint.</i></b></span></dd>  
            
            <dt>
              <a style={{color: `#1A090D`, fontWeight: `600`}}  href="https://github.com/rafflestranslator">
                The RAFFLES Project (start 26th May 2019)
              </a>
            </dt> 
            <dd>
              an English-Indonesian translator using Stanford CoreNLP and Prosa.ai Syntax API.<span style={{color: `#083D77`}}><b>Java. Python. React.js. Airflow. Spark. Kafka. <i>other infrastructure tools will be added alongside sprint.</i></b></span>
              You are more than welcome to visit <a style={{color: `#1C3A13`}} href="https://rafflestranslator.github.io"> our landing page!</a>
              </dd>  
            
            <dt>
              <a style={{color: `#1A090D`, fontWeight: `600`}}  href="https://github.com/teaolivia/Pamitran">
                Pamitran Electric e-Shop (start 2018)
              </a>
            </dt> 
            <dd>a web-based hometown-coverage mini e-commerce. <span style={{color: `#083D77`}}><b>Python. Google Cloud Functions. Django. React.js. <i>other infrastructure tools will be added alongside sprint.</i></b></span></dd>  

            <dt>
              <a style={{color: `#1A090D`, fontWeight: `600`}}  href="https://github.com/keychera/AquaAesthetic">
                AquaAesthetic (2017)
              </a>
            </dt> 
            <dd>create an aquarium simulation with user can interact by feeding and buying
              fishes. <span style={{color: `#083D77`}}><b>Java. Java Swing. JUnit.</b></span></dd> 
            
              <dt>
              <a style={{color: `#1A090D`, fontWeight: `600`}} href="https://visdat-cihuy.github.io">
                Unemployment Rate and Indonesian Presidential Term Correlation Viz (2017)
              </a>
            </dt> 
            <dd>a data visualization for Indonesian unemployment rate in each presidency. <span style={{color: `#083D77`}}><b>JavaScript. Bootstrap. Leaf.js. HTML. CSS.</b></span></dd>

            <dt> 
              <a style={{color: `#1A090D`, fontWeight: `600`}} href="https://github.com/teaolivia/SmartATK">
                SmartATK (2016)
              </a>
            </dt> 
            <dd>A web-based application for managing office stationary inventory in a
            university. <span style={{color: `#083D77`}}><b>PHP. Laravel. SQL.</b></span></dd> 

            <dt>
              <a style={{color: `#1A090D`, fontWeight: `600`}} href="https://github.com/ParadiseCatz/IF2110-Tubes-Alstruk--Monopoly">
                Monopoly Simulation (2015)
              </a>
            </dt> 
            <dd>A game board up to 4 players similar to Monopoly. Create by <span style={{color: `#083D77`}}><b>C++.</b></span></dd>

          </dl>
        </div>
      </div>
    </div>
  </Layout>
)

export default Portfolio