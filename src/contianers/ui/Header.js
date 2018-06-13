import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <header className="container">
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar">&nbsp;</span>
                                <span className="icon-bar">&nbsp;</span>
                                <span className="icon-bar">&nbsp;</span>
                            </button>
                            <a className="navbar-brand" href="/">React</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li><a href="/">Home</a></li>
                                <li><a href={"/Add"}>Add</a></li>
                                <li><a href={"/Edit"}>Edit</a></li>
                                <li><a href={"/Delete"}>Delete</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;