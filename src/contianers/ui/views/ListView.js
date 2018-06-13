import React, {Component} from 'react';
import axios from "axios/index";
import Person from '../../models/Person';

class Content extends Component {

    state = {people: []};

    componentDidMount() {
        axios.get("http://localhost:8080/customers").then(response => {
            const people = response.data;
            const updatedPeople = people.map(persons => {
                return {
                    ...persons
                }
            });
            this.setState({people: updatedPeople});
        }).catch(err => {
            //console.log(err);
            this.setState({error: true});
        });
    }

    render() {

        let people = this.state.people.map(person => {
            return <Person key={person._id} id={person._id} firstname={person.name.first} lastname={person.name.last} birthday={person.birthday}/>;
        });

        return (
            <div>
                <h1 className="text-danger text-center">Customer List</h1>
                <hr/>
                <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                        <table className="table table-striped table-bordered">
                            <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Birthday</th>
                            </tr>
                            </thead>
                            <tbody>{people}</tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }

}

export default Content;