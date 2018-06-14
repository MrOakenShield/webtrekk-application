import React, {Component} from 'react';
import axios from "../../DAL/database";
import SmallPerson from "../../partials/SmallPerson";
import moment from "moment";
import MaterialIcon from 'material-icons-react';

class DeleteView extends Component {

    state = {
        people: [],
        name:  {first:"",last:""},
        firstname: '',
        lastname: '',
        id: '',
        selectedPerson: {id: "", name :{first:"",last:""}, birthday:"", gender:"", lastContact:moment().format("YYYY-MM-DD"),customerLifetimeValue:0.0},
      
    };

    componentDidMount() {
        axios.get("customers/").then(response => {
            
            const people = response.data;
            const updatedPeople = people.map(persons => {
                return {
                    ...persons
                }
            });
            
            this.setState({
                people: updatedPeople,
                selectedPerson: Object(updatedPeople[0])
            });

            console.log(updatedPeople[0])
            
        }).catch(err => {
           // console.log(err);
            this.setState({error: true});
        });
    }

    deleteDataHandler = () => {
        const data = {
            id: this.state.selectedPerson._id,
            firstname: this.state.selectedPerson.name.first,
            lastname: this.state.selectedPerson.name.last
        };
        axios.delete("customer/"+data.id, data)
            .then(response => {
                alert("Successfully deleted!");
                setTimeout(() => {
                    window.location = "/Delete";
                }, 1000);
            }).catch(err => {
            //console.log(err);
        });
    };

    handleClick = (id) => {
        let person = this.state.people.find((person) => {
            return person._id === id;
        });
        this.setState({selectedPerson: Object(person)});
    };

    changeFirstname(event) {
        const person = this.state.selectedPerson;
        person.firstname = event.target.value;
        this.setState({selectedPerson: person});
    }

    changeLastname(event) {
        const person = this.state.selectedPerson;
        person.lastname = event.target.value;
        this.setState({selectedPerson: person});
    }

    render() {
        let people = this.state.people.map((person) => {
            return <SmallPerson key={person._id} id={person._id} firstname={person.name.first}
            lastname={person.name.last} birthday={person.birthday} onClick={this.handleClick.bind(this)}/>;
});
        return (
            <div>
                <h1 className="text-center text-danger" xmlns={"http://www.w3.org/1999/html"}>
                    Delete Customer
                </h1>
                <br/>
                <div className="row">
                    <div className="col-md-3">
                        <h3 className="text-danger">Select Customer</h3>
                        <hr/>
                        <div className="dropdown">
                            <button className="btn btn-danger dropdown-toggle" type="button" id="peopleDropdown"
                                    data-toggle="dropdown">
                                {this.state.selectedPerson.name.first + "  " + this.state.selectedPerson.name.last + " "}
                                <span className="caret"/>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="peopleDropdown">
                                {people}
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="md-form">
                            <label className="inputEmail">ID</label>
                            <input type="text" className="form-control input-lg"
                                   placeholder="Person ID" disabled value={this.state.selectedPerson._id}/>
                        </div>
                        <div className="md-form">
                            <label className="inputPassword">First Name</label>
                            <input type="text" className="form-control input-lg"
                                   placeholder="Person First Name"
                                   value={this.state.selectedPerson.name.first}
                                   onChange={this.changeFirstname.bind(this)} disabled/>
                        </div>
                        <div className="md-form">
                            <label className="inputPassword">Last Name</label>
                            <input type="text" className="form-control input-lg"
                                   placeholder="Person Last Name"
                                   value={this.state.selectedPerson.name.last}
                                   onChange={this.changeLastname.bind(this)} disabled/>
                        </div>
                        <button className="btn btn-danger form-control input-lg" onClick={this.deleteDataHandler}><MaterialIcon icon="delete_sweep" color="#ffffff" size="small" /> Delete
                        </button>
                    </div>
                </div>
            </div>

        );
    }

}

export default DeleteView;