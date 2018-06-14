import React, {Component} from 'react';
import logo from "../../logo.png";
import MaterialIcon from 'material-icons-react';

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
                            <a className="nav-link" href="/">
                            <MaterialIcon icon="home" color="#ffffff" />
                            Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={"/Create"}><MaterialIcon icon="add_to_photos" color="#ffffff" size="small" />Create</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={"/Update"}><MaterialIcon icon="edit" color="#ffffff" size="small"/>Update</a>
                        </li>
            
                        <li className="nav-item">
                            <a className="nav-link" href={"/Delete"}><MaterialIcon icon="delete_sweep" color="#ffffff" size="small" />Delete</a>
                        </li>
            
                    </ul>
                    
            
                  
                </div>
               </div>
            
            </nav>
          




      
        );
    }
}

export default Header;