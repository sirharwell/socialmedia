import React from 'react';
import { connect } from 'react-redux'
import { updateApp, addApp } from '../actions/apps'
import { Form } from 'semantic-ui-react';

class AppForm extends React.Component {
  initialState = {
    name: '',
    city: '',
    pic: '',
    age: '',
    height: '',
  }

  state = {...this.initialState}

  componentWillMount() {
    if (this.props.id)
      this.setState({ ...this.props })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const app = {...this.state}
    const { closeForm, dispatch } = this.props
    const func = this.props.id ? updateApp : addApp
    dispatch(func(app))
    closeForm()
  }

  render() {
    const { name, city, pic, age, height } = this.props
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name="name"
          required
          defaultValue={name}
          onChange={this.handleChange}
          label="Name"
        />
        <Form.Input
          name="city"
          defaultValue={city}
          onChange={this.handleChange}
          label="City"
        />
        <Form.Input
          name="pic"
          defaultValue={pic}
          onChange={this.handleChange}
          label="Pic"
        />
        <Form.Input
          name="height"
          defaultValue={height}
          onChange={this.handleChange}
          label="Height"
        />
        <Form.Input
          name="age"
          defaultValue={age}
          type="number"
          min="0"
          onChange={this.handleChange}
          label="Age"
        />
        <Form.Button>Save</Form.Button>
      </Form>
    )
  }
}

export default connect()(AppForm);
