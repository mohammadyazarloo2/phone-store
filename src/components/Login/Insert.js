import React, { Component } from 'react'
import axios from 'axios';

export default class Insert extends Component {
    constructor(props){
        super(props)

        this.onChangeFirstName=this.onChangeFirstName.bind(this)
        this.onChangeLastName=this.onChangeLastName.bind(this)
        this.onChangeEmail=this.onChangeEmail.bind(this)
        this.onSubmit=this.onSubmit.bind(this)

        this.state={
            first_name:'',
            last_name:'',
            email:''
        }
    }

    onChangeFirstName(e){
        this.setState({
            first_name:e.target.value
        })
    }

    onChangeLastName(e){
        this.setState({
            last_name:e.target.value
        })
    }

    onChangeEmail(e){
        this.setState({
            email:e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        const obj={
            first_name:this.state.first_name,
            last_name:this.state.last_name,
            email:this.state.email
        };

        axios.post('http://localhost/react/insert.php', obj)
      .then(res => {
        res.header('Access-Control-Allow-Origin', '127.0.0.1');
        console.log(res.data);
      })

        this.setState({
            first_name:'',
            last_name:'',
            email:''
        })
        
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                <div className="col-5 mx-auto my-5">
                <h3 className="text-center">
                     add new user
                </h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={this.onChangeFirstName} value={this.state.first_name}
                         type="text" name="firstname" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input onChange={this.onChangeLastName} value={this.state.last_name}
                         type="text" name="lastname" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" onChange={this.onChangeEmail} value={this.state.email}
                         name="email" className="form-control" />
                    </div>
                    <div className="form-group text-center">
                        <input type="submit" className="btn btn-primary" value="register" />
                    </div>
                </form>
                </div>
            </div>
            </div>
        )
    }
}
