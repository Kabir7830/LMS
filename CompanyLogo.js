import React from "react";
import lmsLogo from '../src/images/lms_logo3.png';



class CompanyLogo extends React.Component
{
    render()
    {
        return(
            <div>
                <a style={{cursor:'pointer'}}><img src={lmsLogo} style={{width:'500px',height:'80px',marginLeft:'-117px'}}></img></a>
            </div>
        )
    }
}
export default CompanyLogo;