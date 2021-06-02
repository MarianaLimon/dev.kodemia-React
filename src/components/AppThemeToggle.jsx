import React from 'react'

import './appThemeToggle.css'

class AppThemeToggle extends React.Component {super
    constructor(props) {
        super (props) 
        
        this.state = { theme: 'light'};
    }

    toggle() {
        const theme = this.state.theme === 'light'
            ? 'dark'
            : 'light';

            this.setState ({ theme })
    }
    
    render() {
        return (
            <div className= {`appThemeToggle d-flex align-items-center justify-content-center ${this.state.theme}`} 
                onClick={this.toggle.bind(this)}
                /* {this.state.theme }*/
                /*{ <div className = {styles.appThemeToggle}> }*/
            />
        )
    }
/* 
    componentWillMount(){
        const now = new Date()
        console.log('Antes de que este en el DOM', now.getTime());
    }

    componentDidMount(){
        const now = new Date()
        console.log('Ya estoy en el DOM', now.getTime());
    }

    componentWillUpdate() {
        const now = new Date()
        console.log('Antes de que me actualize', now.getTime());
    }

    componentDidUpdate() {
        const now = new Date()
        console.log('Cuando ya me actualice', now.getTime());
    }

    componentWillUnmount(){
        const now = new Date()
        console.log('Antes de que me quite del DOM', now.getTime());
    }
*/

    componentDidMount(){
        document.body.setAttribute('theme', this.state.theme);
    }

    componentDidUpdate() {
        console.log('si cambio');
        document.body.setAttribute('theme', this.state.theme);
    }
}

export default AppThemeToggle