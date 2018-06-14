import React, {Component} from 'react';
import axios from "../../DAL/database";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.min.css";
import MaterialIcon from 'material-icons-react';
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

        axios.post("customer", data)
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
                <h1 className="text-center text-success">Add Person</h1>
                <br/>
                <div className="row align-items-center">
                <div className="col"></div>
                    <div className="col-8">
                        <div className="md-form">
                            <label htmlFor="firstname" className="firstname">First Name</label>
                            <input type="text" id="firstname" className="form-control input-lg" 
                                   value={this.state.firstname}
                                   onChange={(event) => this.setState({firstname: event.target.value})}/>
                        </div>
                        <div className="md-form">
                            <label htmlFor="firstname" className="lastname">Last Name</label>
                            <input type="text" id="lastname" className="form-control input-lg" 
                                   value={this.state.lastname}
                                   onChange={(event) => this.setState({lastname: event.target.value})}/>
                        </div>
                        
                        
                            <label >Gender</label>
                            <div className="form-check mb-4">
                            <input type="radio" className="form-check-input" id="Man" value="m" 
                                checked={this.state.selectedGender === 'm'}
                                onChange={this.handleOptionChange}  /><label className="form-check-label" htmlFor="Man">
                                Man
                            </label> 
                            </div>

                            <div className="form-check mb-4">
                                <input type="radio"  className="form-check-input" id="Woman" value="w" 
                                checked={this.state.selectedGender === 'w'} 
                                onChange={this.handleOptionChange} /> <label className="form-check-label" htmlFor="Woman">
                                Woman
                                </label>
                            </div>
                                    
                               
                            
                            <label htmlFor="customerLifetimeValue" className="customerLifetimeValue">Customer Lifetime Value</label>
                        <div className="md-form">
                            
                            <input type="text" className="form-control input-lg" 
                                   value={this.state.customerLifetimeValue}
                                   onChange={(event) => this.setState({customerLifetimeValue: event.target.value})}/>
                        </div>
                        <label htmlFor="birthday" className="customerLifetimeValue">Birthday</label>
                        <div className="md-form">
                            
                            <DatePicker className="form-control input-lg"  id="birthday" openToDate={moment("1950-09-28")} dropdownMode="select" peekNextMonth showMonthDropdown showYearDropdown selected={this.state.startDate}  onChange={this.handleChange.bind(this)}  dateFormat="YYYY-MM-DD"/>

                        </div>
                        <label htmlFor="lastContact">Last Contact</label>
                        <div className="md-form">
                            
                            <DatePicker className="form-control input-lg" dropdownMode="select"  id="lastContact" peekNextMonth showMonthDropdown showYearDropdown  selected={this.state.lastContactStartDate} onChange={this.handleLastContact.bind(this)}  dateFormat="YYYY-MM-DD"/>
                            
                        </div>
                        <button className="btn btn-success form-control input-lg" onClick={this.postDataHandler}><MaterialIcon icon="add_to_photos" color="#ffffff" size="small" />Save
                        </button>
                        
                    </div>
                    <div className="col"></div>
                </div>  
            </div>
        );
    }
}

export default CreateView;