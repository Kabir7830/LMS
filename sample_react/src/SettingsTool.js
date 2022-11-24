import React from "react";
import SettingsLogo from "../src/images/settingsLogo.png";
import './SettingsTool.css';
class SettingsTool extends React.Component
{
    render()
    {
        return(
            <div>
                <a href="http://www.google.com" alt="settings" title="settings"><img src={SettingsLogo} className="icon" alt="settings"></img></a>
                
            </div>
        )
    }
}
export default SettingsTool;