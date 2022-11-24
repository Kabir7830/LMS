import React from "react";
import styles from './TwitterTool.module.css';
import TwitterLogo from "../src/images/twitter1.png";
class TwitterTool extends React.Component
{
    render()
    {
        return(
            <div>
               <a href="https://www.twitter.com" alt="settings" title="twitter"><img src={TwitterLogo} alt="settings" className={styles.icon}></img></a>
                
            </div>
        )
    }
}

export default TwitterTool;