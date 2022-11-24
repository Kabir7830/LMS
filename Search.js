import React from "react";
import './Search.css';
class Search extends React.Component
{
    render()
    {
        return(
            <div >
                <input type={'text'} placeholder="Search" className="search"></input>
                <button className="btn-search">Search</button>
            </div>
        )
    }
}
export default Search;