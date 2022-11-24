import React from "react";
import './utils.css';


class MenuName extends React.Component
{
    render()
    {
        return(
            <div>
                <h2 style={{marginLeft:'20px'}}>{this.props.menuName}</h2>
            </div>
        )
    }
}

export default MenuName;