import React from 'react';
import ReactDOM from 'react-dom';






// const page = (
//   <div>
//       <ul>
//       <li>a</li>
//       <li>b</li>
//       <li>c</li>
      
//       </ul>
//   </div>
  
// )
// ReactDOM.render(page, document.getElementById('root'));









// function temp(){
//   return (
//       <div>
      
//   <h1>This is the main heading</h1>
//       <ul>
//       <li>a</li>
//       <li>b</li>
//       <li>c</li>
      
//       </ul>
//   </div>
//   )
// }
// ReactDOM.render(temp(), document.getElementById('root'));





// now creating components

function PageComponent(){
  return(
     <div>
       
     
     <h1>MAIN HEADING </h1>
     <ol>
        <li>item 1 </li>
        <li>item 2 </li>
        <li>item 3 </li> 
    </ol>
     
     
     <footer>
        <small>  2023 web development project .!!!! </small>
     </footer>
    </div>
     
       
  )
}

ReactDOM.render(<PageComponent/>, document.getElementById("root"))









// adding items to the nav bar on the page

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
ReactDOM.render(<Header/>, document.getElementById("root"))










