import React , {createContext , Component} from 'react'

export const ThemeContext = createContext();


class ThemeContextProvider extends Component {
    state = { 
        isLightTheme:true,
        light: {syntax: ' text-dark ',ui:'navbar-light',bg:'bg-light'},
        dark: {syntax: 'text-light',ui:'navbar-dark',bg:'bg-dark'}
     } 
    render() { 
        return (
            <ThemeContext.Provider value={{...this.state}} >
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}
 
export default ThemeContextProvider;

