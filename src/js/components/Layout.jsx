import React from 'react';
import { Link } from 'react-router';

class Layout extends React.Component {
    constructor(props) {
        super();
        this.state = {};
    }

   
    componentDidMount() {
       
    }


    render() {
        return (
            <div className="layout">
            	<header>
                    <img src="/files/img/pokeball-open.gif" alt="pokeball" className="pokeball"/>
            		<h1 className="layout-h1"><Link to="/">Poké Starter App!</Link></h1>
                    <img src="/files/img/pokeball-open.gif" alt="pokeball" className="pokeball"/>
            	</header>
            	
            	<main>
            		{this.props.children}
            	</main>
            </div>
        );
    }
};

export default Layout;