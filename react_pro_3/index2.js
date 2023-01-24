import React from 'react';
import ReactDOM from 'react-dom';

function Header(){
  return (
    <header>
        <nav className= "nav" >
                <small><b> Menu </b></small>
            <ul  className = "nav-items" >
              <li>Blog</li>
              <li>Contact</li>
              <li>Pricing</li>
            </ul>
        </nav>     
    </header>
  )
}

function Footer(){
    return(
        <footer>
            <small>  2023 web development project .!!!! </small>
        </footer>
    )
}

function MainContent(){
    return(
        
        <div>
        <h1>Whats the reason?</h1>
        
        <ol>
            <li>i1</li>
            <li>i2</li>
            <li>i3</li>
        </ol>
        </div>
    )
}

function Page(){
    return(
        <div>
        
        <Header/>
        <MainContent/>
        <Footer/>
        </div>
    )
}
ReactDOM.render(<Page/>, document.getElementById("root"))