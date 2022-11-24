import React from "react";
import './TopNav.css';
import Search from './Search';
import './utils.css';
import SettingsTool from "./SettingsTool";
import GmailTool from "./GmailTool";
import TwitterTool from "./TwitterTool";
import { ToggleDiv } from "./App";
class TopNav extends React.Component
{
    render()
    {
        return(
            <div className="topNav" id="TopNavDiv">
                <div style={{
                    display:'flex',
                    marginTop:'12px',
                    marginLeft:'12px',
                    position:'absolute',
                }}>
                <button style={{cursor:'pointer',backgroundColor:'transparent',border:'none',height:'30px',color:'white',fontSize:'22px'}} className="fa-solid fa-bars" onClick={ToggleDiv}></button>
                </div>
                <div className="ml-auto diapFlex" style={{marginLeft:'60px'}}>
                <Search></Search>
                </div>
            <div className="rightAlign dispFlex loose-spaced">
                <SettingsTool></SettingsTool>
                &nbsp;
                <GmailTool></GmailTool>
                &nbsp;
                <TwitterTool></TwitterTool>
             
             
             
           </div>
            </div>
           
        )
    }
}
export default TopNav;