import React, { Component } from 'react';
import styles from './ContactForm.module.css';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChangeName = (e) => {
    const regex = /^[A-Za-z \u0400-\u04FF]*$/;
    const name = e.target.value;
    if (name === '' || regex.test(name)) {
      this.setState({ name });
    }
  };

  handleChangeNumber = (e) => {
    const regex = /^[0-9()+-]*$/;
    const number = e.target.value;
    if (number === '' || regex.test(number)) {
      this.setState({ number });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onAddContact(name, number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.ContactForm} onSubmit={this.handleSubmit}>
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            type='text'
            value={name}
            onChange={this.handleChangeName}
            name='name'
          ></input>
        </label>
        <label className={styles.label}>
          Number
          <input
            className={styles.input}
            type='text'
            value={number}
            onChange={this.handleChangeNumber}
            name='number'
          ></input>
        </label>
        <button
          className={styles.button}
          type='submit'
          disabled={!name || !number}
        >
          Add contact
        </button>
      </form>
    );
  }
}
