import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class pageWrap extends Component{
    render()
    {
        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">
                <Link className="navbar-brand" to="/"><img className="logo" src="assets/img/logos/navycut.png" alt="..." /><div className="Logo-text"><span className="version">V:2.0</span> NavyCut</div></Link>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li className="nav-item"><Link className="nav-link" to="/documentation">Documentation</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/version">version</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/expert">Expert TaLK</Link></li>    
                        <li className="nav-item"><Link className="nav-link" to="/blog">blog</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/download">Download</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        {this.props.children}
            </div>
        );
    }
}

export default pageWrap;