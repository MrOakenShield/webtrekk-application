import React, {Component} from 'react';
import axios from "axios/index";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.min.css";

class CreateView extends Component {

    state = {
        firstname: "",
        lastname: "",
        lastContact: "",
        customerLifetimeValue : 0.0,
        gender: "",
        lastContactStartDate :moment(),
        startDate: moment("1950-01-01"),
        selectedGender: "m"
    };
 
    postDataHandler = () => {
        const data = {
            firstname: this.state.firstname.trim(),
            lastname: this.state.lastname.trim(),
            birthday: moment(this.state.startDate).format("YYYY-MM-DD"),
            lastContact: moment(this.state.lastContactStartDate).format("YYYY-MM-DD"),
            customerLifetimeValue : parseFloat(this.state.customerLifetimeValue),
            gender: this.state.selectedGender
        };

        axios.post("http://localhost:8080/customer", data)
            .then(response => {
                console.log(response);
                alert("Successfully added!");
                setTimeout(() => {
                    window.location = "/";
                }, 1000);
            }).catch(err => {
            //console.log(err);
        });

    };

    handleChange = (date) => {
        this.setState({
            startDate: date
          });
    }
    handleLastContact = (date) => {
        this.setState({
            lastContactStartDate: date
        });
    }   
    handleOptionChange = (changeEvent) => {
        this.setState({
            selectedGender: changeEvent.target.value
        });
      }

    render() {
        return (
            <div>
                <h1 className="text-center text-danger">Add Person</h1>
                <br/>
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="form-group">
                            <label className="firstname">First Name</label>
                            <input type="text" className="form-control input-lg" placeholder="Person First Name"
                                   value={this.state.firstname}
                                   onChange={(event) => this.setState({firstname: event.target.value})}/>
                        </div>
                        <div className="form-group">
                            <label className="lastname">Last Name</label>
                            <input type="text" className="form-control input-lg" placeholder="Person Last Name"
                                   value={this.state.lastname}
                                   onChange={(event) => this.setState({lastname: event.target.value})}/>
                        </div>
                        <div className="form-group">
                            <label className="gender">Gender</label>
                            <div className="input-group">
                                <input type="radio"  id="male" value="m" 
                                checked={this.state.selectedGender === 'm'}
                                onChange={this.handleOptionChange}  /> Male     &nbsp;
                                <input type="radio"  id="female" value="f" 
                                checked={this.state.selectedGender === 'f'} 
                                onChange={this.handleOptionChange} /> Female 
                            </div>
                            
                        </div>
                        <div className="form-group">
                            <label className="customerLifetimeValue">Customer Lifetime Value</label>
                            <input type="text" className="form-control input-lg" placeholder="Customer Lifetime Value"
                                   value={this.state.customerLifetimeValue}
                                   onChange={(event) => this.setState({customerLifetimeValue: event.target.value})}/>
                        </div>
                        <div className="form-group">
                            <label className="customerLifetimeValue">Birthday</label>
                            <DatePicker className="form-control input-lg"  openToDate={moment("1950-09-28")} dropdownMode="select" peekNextMonth showMonthDropdown showYearDropdown selected={this.state.startDate}  onChange={this.handleChange.bind(this)}  dateFormat="YYYY-MM-DD"/>

                        </div>
                        <div className="form-group">
                            <label>Last Contact</label>
                            <DatePicker className="form-control input-lg" dropdownMode="select"  peekNextMonth showMonthDropdown showYearDropdown  selected={this.state.lastContactStartDate} onChange={this.handleLastContact.bind(this)}  dateFormat="YYYY-MM-DD"/>
                        </div>
                        <button className="btn btn-info form-control input-lg" onClick={this.postDataHandler}>Save
                        </button>
                    </div>
                </div>  
            </div>
        );
    }
}

export default CreateView;