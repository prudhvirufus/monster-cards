import React, { Component } from 'react';
import "./searchBox.style.css"
class SearchBox extends Component {
    render() {
        const {handleChange,className,placeholder} = this.props
        return (
            <div>
            <input 
            className={`search-box ${className}`} 
            type="search"
            placeholder={placeholder}
            onChange={handleChange}/> 
            </div>
        );
    }
}
export default SearchBox;