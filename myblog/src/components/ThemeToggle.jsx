import React, { Component } from 'react';

import { ThemeContext } from "../context/ThemeContext";

class ToggleTheme extends Component {
    static contextType = ThemeContext
    state = {  } 
    render() { 
        const {toggleTheme} = this.context
        return (
            <div className="container">
                <input type="button" onClick={toggleTheme} className="btn btn-primary" value={"Toggle Theme"} />
            </div>
        );
    }
}
 
export default ToggleTheme;