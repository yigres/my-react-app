import React from 'react';
import "./app.css";
import "./app.scss";

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       username: '',
       age: null,
       mycar: 'Kalina',
       about: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis consectetur corporis assumenda impedit qui laboriosam, provident nobis molestias ipsum libero veritatis, eos vel perferendis consequuntur eveniet labore quidem, fugiat perspiciatis.',
       errormessage: ''
  };
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    let age = this.state.age;

    if (!Number(age)) {
      alert("Your age must be a number");
    } else {
      alert(`You are submitting: ${this.state.username} ${this.state.age}`);
    }
  }
  
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = '';

    if (nam === "age") {
      if (val !=="" && !Number(val)) {
        err = <strong>Your age must be a number</strong>;
      }
    }

    this.setState({errormessage: err});
    this.setState({[nam]: val});
  }
  
  render() {
    let header = '';

    if (this.state.username) {
      header = <h1>Hello, {this.state.username} {this.state.age}</h1>;
    }

    return (
      <form onSubmit={this.mySubmitHandler}>
        {header}
        <p>Enter your name:</p>
        <input
          type='text'
          name='username'
          onChange={this.myChangeHandler}
        />
        <p>Enter your age:</p>
        <input
          type='text'
          name='age'
          onChange={this.myChangeHandler}
        />
        <br/>
        {Boolean(this.state.errormessage) && <p className="error">{this.state.errormessage}</p>}
        <br/>
        <p>About yourself:</p>
        <textarea value={this.state.about} />
        <p>Car:</p>
        <select value={this.state.mycar}>
          <option value="Fiat">Fiat</option>
          <option value="Kalina">Kalina</option>
          <option value="Hyundai">Hyundai</option>
        </select>
        <input type='submit' />
      </form>
    );
  }
}

export default MyForm;