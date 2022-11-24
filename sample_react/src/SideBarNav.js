import React from "react";
// import styled from "styled-components";
import './SideBarNav.css';
import './utils.css';
import CompanyLogo from "./CompanyLogo";
import NavigationList from "./NavigationList";
class SideBarNav extends React.Component

{
    render()
    {
        return(
                <div className="navDiv" id="SideBarNav" >
                    <div className="centerAlign">
                    <CompanyLogo></CompanyLogo>
                    </div>
                    <div style={{marginTop:'40px'}}>
                        <NavigationList></NavigationList>
                    </div>
                 
                </div>
            
           
            
        )
    }
}

export default SideBarNav;