import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';

class BooksList extends Component {
    static contextType = ThemeContext
    state = {  } 
    render() { 
        const {isLightTheme,light,dark} = this.context
        const theme = isLightTheme ? light : dark
        return (
            <div className={`container ${theme.syntax} my-5`}>
                <div className={`${theme.bg}    card shadow m-3`}>
                    <div className={` card-body`}>
                        Book1
                    </div>
                </div>
                <div className={`${theme.bg}  card shadow m-3`}>
                    <div className={` card-body`}>
                        Book2
                    </div>
                </div>
                <div className={`${theme.bg}  card shadow m-3`}>
                    <div className={` card-body`}>
                        Book3
                    </div>
                </div>
            </div>
        );
    }
}
 
export default BooksList;