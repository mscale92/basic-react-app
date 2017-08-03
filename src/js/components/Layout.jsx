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
            		<h1><Link to="/">Poké Starter App!</Link></h1>
            	</header>
            	
            	<main>
            		{this.props.children}
            	</main>
            </div>
        );
    }
};

export default Layout;