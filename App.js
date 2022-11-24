// import logo from './logo.svg';
import './App.css';
import React from 'react';
import SideBarNav from './SideBarNav';
import TopNav from './TopNav';
import './utils.css';
import MenuName from './MenuName';


// To Toggle/Hide SideBar Navigation Div on clicking on Toggle Icon
export function ToggleDiv()
{
    let toggleDiv = document.getElementById("SideBarNav"); // getting Side Bar Navigation Div
    let mainArea = document.getElementById("MainArea"); // getting Main Working Area Div
    let topNav = document.getElementById("TopNavDiv"); // getting Top Navigation Div
    let Style = getComputedStyle(toggleDiv); // getting Computed Style of Side Bar Navigation to modify them
    
    if (Style.width>'0px') // if SideBarNav is visible (hide it)
    {
      toggleDiv.style.width = "0%"; // hiding Side Bar Navigation
      topNav.style.width = "100%"; // setting Top Navigation's width 100% of screen Size
      mainArea.style.width = "100%"; // setting Main Working Area's width to 100% of Screen Size
    }
    else // if SideBarNav is hidden (make visible)
    {  
      toggleDiv.style.width = "20%"; // Unhiding Side Bar Navigation Div
      mainArea.style.width = "80%";  // setting Main Working Area's width to 80% of screen size
      topNav.style.width = "80%"; // setting Top Navigation Again To 80% of screen size 
      
    }
}


// Main App
class App extends React.Component {
  
  render() {
    return (
    <div>
         <SideBarNav></SideBarNav>
        <TopNav></TopNav>
      <div className='mainArea' id="MainArea">
          <div className='' >
            <MenuName menuName="Dashboard"></MenuName>
          </div>
          <div>
            {/* in built */}
          </div>
      </div>
    </div>
         
        
    );
  }
}
export default App;


// to do
// Show Components according using color Codes from inner to Outer

