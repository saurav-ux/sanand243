import './App.css';
// import Navbar2 from './Components/Navbar2';
import React from 'react';
import Banner from './Components/Banner';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Enav from './Components/Enav';
import Carousel1 from './Components/crousel';
import Content from './Components/content';
import Content2 from './Components/Content2';
import Content3 from './Components/Content3';
import Content4 from './Components/Content4';
import Content5 from './Components/Content5';
import Footer from './Components/Footer';
import Blank from './Components/Blank';
import Wishlist from './Components/Wishlist';
import topp from './Components/topp';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  
const [num,setNum]=React.useState(0);

const [array1,func] = React.useState([])

const [todos,setTodos] =  React.useState(0);


function con(){
  setNum(num+1)

  func(prevData=>{
    return [...prevData, `Item ${prevData.length + 1}`]
  })
}
    
// function addItem() {
  
//     func(prevData=>{
//             return [...prevData, `Item ${prevData.length + 1}`]
//     })
// }
// num={num}
// callback={con}
  return (
    <>
<Router>
<Enav />
<Switch>
  <Route exact path="/" render={()=>{
    return(
      <>
      {/* <Blank/> */}
      <Carousel1/>   
      <Content />
      <Content2/>
      <Content3/>
      <Content4/>
      <Content5/>
      </>
    )
  }}>
  </Route>
  <Route exact path="/wishlist">
    <Wishlist array1 = {array1}/>
  </Route>
  {/* <Route exact path="/content1">
  <Content callback={con}/>
  </Route>
  <Route exact path="/content2">
   <Content2/>
  </Route>
  <Route exact path="/content3">
   <Content3/>
  </Route>
  <Route exact path="/content4">
   <Content4/>
  </Route>
  <Route exact path="/content5">
   <Content5/>
  </Route> */}
  
 
</Switch>
{/* <Carousel1/>
<Content callback={con}/>
<Content2/>
<Content3/>
<Content4/>
<Content5/>  */}
{/* <Banner/> */}
{/* <Skills/> */}
{/* <Project/> */}
{/* <Contact/> */}

<Footer/>
</Router>

    </>
  )
}

export default App;
