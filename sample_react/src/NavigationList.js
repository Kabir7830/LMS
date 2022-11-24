import React from "react";
import styles from './NavigationList.module.css';// Module Based Css 
import './utils.css';// global css
class NavigationList extends React.Component
{
    render()
    {
        return (
            <div >
                <div className={styles.navList}> 
                    <p className="links"><a>Home</a></p>  
                    <p className="links"><a>Courses</a></p>  
                    <p className="links"><a>Modules</a></p>  
                    <p className="links"><a>Students</a></p>  
                    <p className="links"><a>Trainers</a></p>  
                    <p className="links"><a>Batches</a></p>  
                    <p className="links"><a>Add Course</a></p>  
                    <p className="links"><a>Add Module</a></p>  
                    <p className="links"><a>Add Batch</a></p>  
                    <p className="links"><a>Add Student</a></p>  
                    <p className="links"><a>Add Trainer</a></p>  
                   
                </div>
            </div>
        )
    }
}

export default NavigationList;