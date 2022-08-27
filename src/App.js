import React from 'react'
import './App.css';
import Logo from './files/LOGO.png';
import Resume from './files/Resume.pdf';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';




function App() {
  return (
    <div className="App">
      <div className = "nav">
      <img src= {Logo} alt ="airdward" height = {25} width = {28} />

      <a href= {Resume}  rel="noreferrer"><button className= "button">Résumé</button></a>
      </div>

      <div className = "body">

      <div className = "socials">
        
      
      <div className = "each">
        <a href="https://twitter.com/M_airdward" target="_blank" rel="noreferrer">
          
          <FiTwitter size = {22}/>
          </a>
        </div>
      <div className = "each">
        <a href="https://www.linkedin.com/in/michael-oghenerukevwe-edward-6b1533134/" target="_blank" rel="noreferrer">
      <FiLinkedin size = {22}/>
        </a></div>
      <div className = "each"><a href="https://github.com/iamoghenerukevwe" target="_blank" rel="noreferrer">
      <FiGithub size = {22}/>
        </a></div>
      
      </div>
      
      <div className = "text">
        <div className = "small"> Hey, my name is</div>


        <div className = "name">
          
        Michael Edward
          <span>.</span></div>
          <div className= "ripple">
            
          <p>I love creating beautiful</p>
            <b>
              <div className="innerIam">
                sites.<br /> 
                designs.<br />
                experiences.<br />    
                </div>
            </b>
          
          </div>
        <div className = "write">
          
          As a designer, my aspiration is to make less seem more, <br/>I love minimalism
          and the simplicity that comes with it, no clutter, <br/>just get to the crux. With about 5 
          years under my belt in design and web, <br/>I've come a long way!
          My most absorbing goal is to see <span>web2</span>  beautifully 
          port to <span>web3</span>. 
          
          <ripple />
          
          </div>
          
         
          <a href= "mailto: chokotagrp@gmail.com" target="_blank" rel="noreferrer"><button className="button-52">Say Hello!</button></a>

        
        
        
      </div>
      
      

    
      </div>
    </div>
  );
}

export default App;


