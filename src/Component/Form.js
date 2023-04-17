//Create a form component in react which has name,email,address,phone no. as input fields and on submitting the form the data should be displayed below as a list.
import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            email: '',
            address: '',
            phoneNumber: '',
            storedataitems: []  //intialize the value and constructor should return abouve the render().
        };
    }
    handlechange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        const newData = {
            username: this.state.username,
            email: this.state.email,
            address: this.state.address,
            phoneNumber: this.state.phoneNumber
        };
        this.setState({
            storedataitems: [...this.state.storedataitems, newData],
            username: '',
            email: '',
            address: '',
            phoneNumber: ''
        });

    };


    render() {
        //const {storedataitems}=this.state;
        return (

            <div>
                <h1>class component based form</h1>
                <form onSubmit={this.handleSubmit}>

                    < label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={this.state.username}
                        name="username"
                        onChange={this.handlechange}
                    />
                    <br />
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="
                        email"
                        value={this.state.email}
                        name="email"
                        onChange={this.handlechange}
                    />
                    <br />
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        id="address"
                        value={this.state.address}
                        name="address"
                        onChange={this.handlechange}
                    />
                    <br />
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                        type="text"
                        id="Number"
                        value={this.state.phoneNumber}
                        name="phoneNumber"
                        onChange={this.handlechange}
                    />
                    <br />
                    <input type="submit" value="Submit" />

                </form>
                <div><h1>Submitted Data:</h1>
                    <ul>
                        {this.state.storedataitems.map((data, index) => (
                            <li key={index}>
                                <li>UserName:{data.username}</li>
                                <li>Email:{data.email}</li>
                                <li>Address:{data.address}</li>
                                <li>PhoneNumber:{data.phoneNumber}</li>

                            </li>
                        ))}
                    </ul>
                     {/* {/* {storedataitems.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone No.</th>
              </tr>
            </thead>
            <tbody>
              {storedataitems.map((data, index) => (
                <tr key={index}>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.address}</td>
                  <td>{data.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>)}  */}
        
                </div>

            </div>
        );
    }
}

export default Form;