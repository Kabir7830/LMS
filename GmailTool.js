import React from "react";
import styles from './GmailTool.module.css';
import GmailLogo from "../src/images/gmail5.png";


class GmailTool extends React.Component
{
    render()
    {
        return(
            <div style={{display:'inline'}}>
                <a href="https://www.gmail.com" alt="settings" title="gmail"><img src={GmailLogo} className={styles.icon} alt="settings"></img></a>
                
            </div>
        )
    }
}

export default GmailTool;