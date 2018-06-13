import React, {Component} from 'react';


class smallperson extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            firstname: props.firstname,
            lastname: props.lastname,
            onClick: props.onClick,
            birthday: props.birthday
        };
    }

    render() {
        return (
            <li>
                <a onClick={()=>this.props.onClick(this.state.id)}>{this.state.firstname + " " + this.state.lastname}</a>
            </li>
        );
    }
}

export default smallperson;