import React, {Component} from 'react';
import logo from "../../logo.png";
import MaterialIcon from 'material-icons-react';
import {NavLink} from 'react-router-dom';
class Header extends Component {
    render() {
        return (


            
            <nav className="navbar navbar-expand-lg navbar-dark black">
            
                <div className="container">
                <a className="navbar-brand" href="/"><img src={logo} alt="logo" width="75px" /></a>
            
               
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            
                
                <div className="collapse navbar-collapse" id="basicExampleNav">
            
                   
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                        
                    <NavLink to={"/"} exact activeClassName={"nav-link active"} className={"nav-link"}>
                        <MaterialIcon icon="home" color="#ffffff" /> Customer List
                    </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to={"/Create"} exact activeClassName={"nav-link active"} className={"nav-link"}>
                        <MaterialIcon icon="add_to_photos" color="#ffffff" /> Create Customer
                    </NavLink>                        </li>
                        <li className="nav-item">
                        <NavLink to={"/Update"} exact activeClassName={"nav-link active"} className={"nav-link"}>
                        <MaterialIcon icon="edit" color="#ffffff" /> Update Customer
                    </NavLink>                        </li>
            
                        <li className="nav-item">
                        <NavLink to={"/Delete"} exact activeClassName={"nav-link active"} className={"nav-link"}>
                        <MaterialIcon icon="delete_sweep" color="#ffffff" /> Delete Customer
                    </NavLink>                        </li>
            
                    </ul>
                    
            
                  
                </div>
               </div>
            
            </nav>
          




      
        );
    }
}

export default Header;