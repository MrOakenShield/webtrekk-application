import React, {Component} from 'react';
import axios from "axios/index";
import SmallPerson from "../../models/SmallPerson";
import moment from "moment";
class UpdateView extends Component {

    state = {
        people: [],
        name:  {first:"",last:""},
        firstname: '',
        lastname: '',
        id: '',
        selectedPerson: {id: "", name :{first:"",last:""}, birthday:"", gender:"", lastContact:moment().format("YYYY-MM-DD"),customerLifetimeValue:0.0},
       
    };

    componentDidMount() {
        axios.get("http://localhost:8080/customers/").then(response => {
            
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

    putDataHandler = () => {
        const data = {
            id: this.state.selectedPerson._id,
            firstname: this.state.selectedPerson.name.first,
            lastname: this.state.selectedPerson.name.last,
            birthday: this.state.selectedPerson.birthday,
            lastContact: this.state.selectedPerson.lastContact,
            customerLifetimeValue: this.state.selectedPerson.customerLifetimeValue
        };

        axios.put("http://localhost:8080/customer/"+data.id, data)
            .then(response => {
                alert("Successfully updated!");
                setTimeout(() => {
                    window.location = "/Edit";
                }, 1000);
            }).catch(err => {
                console.log(err);
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
        person.name.first = event.target.value;
        this.setState({selectedPerson: person});
    }

    changeLastname(event) {

        const person = this.state.selectedPerson;
        person.name.last = event.target.value;
        this.setState({selectedPerson: person});
       
    }
    changeDate = (event) => {
        const person = this.state.selectedPerson;
        person.birthday = event.target.value;
        this.setState({selectedPerson: person});
    }

    changeLastContact = (event) => {
        const person = this.state.selectedPerson;
        person.lastContact = event.target.value;
        this.setState({selectedPerson: person});
    }

    changeCustomerLifetimeValue = (event) => {
        const person = this.state.selectedPerson;
        person.customerLifetimeValue = event.target.value;
        this.setState({selectedPerson: person});
    }

    handleOptionChange = (event) => {

        const person = this.state.selectedPerson;
        person.gender = event.target.value;
        this.setState({
            selectedPerson: person
        });
      }
    render() {
        let people = this.state.people.map((person) => {
            return <SmallPerson key={person._id} id={person._id} firstname={person.name.first}
                                lastname={person.name.last} birthday={person.birthday} onClick={this.handleClick.bind(this)}/>;
        });
        return (
            <div>
                <h1 className="text-center text-danger" xmlns={"http://www.w3.org/1999/html"}>
                    Update Customer Details
                </h1>
                <br/>
                <div className="row">
                    <div className="col-md-3">
                        <h3 className="text-danger">Select a Customer</h3>
                        <hr/>
                        <div className="dropdown">
                            <button className="btn btn-default dropdown-toggle" type="button" id="peopleDropdown"
                                    data-toggle="dropdown">
                                {this.state.selectedPerson.name.first + "  " + this.state.selectedPerson.name.last + " "}
                                <span className="caret"/>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="peopleDropdown">
                                {people}
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="form-group">
                            <label className="inputEmail">ID</label>
                            <input type="text" className="form-control input-lg"
                                   placeholder="Person ID" disabled value={this.state.selectedPerson._id}/>
                        </div>
                        <div className="form-group">
                            <label className="inputPassword">First Name</label>
                            <input type="text" className="form-control input-lg"
                                   placeholder="Person First Name"
                                   value={this.state.selectedPerson.name.first}
                                   onChange={this.changeFirstname.bind(this)}/>
                        </div>
                        <div className="form-group">
                            <label className="inputPassword">Last Name</label>
                            <input type="text" className="form-control input-lg"
                                   placeholder="Person Last Name"
                                   value={this.state.selectedPerson.name.last}
                                   onChange={this.changeLastname.bind(this)}/>
                        </div>
                        <div className="form-group">
                            <label className="gender">Gender</label>
                            <div className="input-group">
                                <input type="radio"  id="male" value="m" 
                                checked={this.state.selectedPerson.gender === 'm'}
                                onChange={this.handleOptionChange}  /> Male     &nbsp;
                                <input type="radio"  id="female" value="f" 
                                checked={this.state.selectedPerson.gender === 'f'} 
                                onChange={this.handleOptionChange} /> Female 
                            </div>
                            
                        </div>
                        <div className="form-group">
                            <label className="inputPassword">Birthday</label>
                            <input type="text" className="form-control input-lg"
                                 value={this.state.selectedPerson.birthday} onChange={this.changeDate.bind(this)}/>
                        </div>
                        <div className="form-group">
                            <label className="inputPassword">Customer Lifetime Value</label>
                            <input type="text" className="form-control input-lg"
                                 value={this.state.selectedPerson.customerLifetimeValue} onChange={this.changeCustomerLifetimeValue.bind(this)}/>
                        </div>
                        <div className="form-group">
                            <label className="inputPassword">Last Contact</label>
                            <input type="text" className="form-control input-lg"
                                 value={this.state.selectedPerson.lastContact} onChange={this.changeLastContact.bind(this)}/>
                        </div>

                        
                        <button className="btn btn-info form-control input-lg" onClick={this.putDataHandler}>Update
                        </button>
                    </div>
                </div>
            </div>

        );
    }

}

export default UpdateView;