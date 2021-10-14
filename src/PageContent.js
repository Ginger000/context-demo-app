import React, { useContext } from 'react';
import { ThemeContext } from './Contexts/ThemeContext';
export default function PageContent(props){
    

        const {isDarkMode} = useContext(ThemeContext);
        const styles = {
            backgroundColor:isDarkMode? "grey":"white",
            height:"100vh",
            width:'100vh'
        }
        return <div style={styles}>{props.children}</div>
    
}
