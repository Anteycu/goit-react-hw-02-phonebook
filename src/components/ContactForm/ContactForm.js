import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./contactForm.module.css";

export class ContactForm extends Component {
  static propTypes = {
    onAddContact: PropTypes.func,
  };

  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddContact(this.state.name, this.state.number);
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label className={styles.label}>
            Name
            <input
              className={styles.inputs}
              type="text"
              value={name}
              onChange={this.handleChange}
              name="name"
              placeholder="name"
              required
            />
          </label>
          <label className={styles.label}>
            Tel.number
            <input
              className={styles.inputs}
              type="number"
              value={number}
              onChange={this.handleChange}
              name="number"
              placeholder="number"
              required
            />
          </label>
          <button className={styles.button} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}
