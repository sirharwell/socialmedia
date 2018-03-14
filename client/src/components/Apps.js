import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getApps } from '../actions/apps';
import { Container, Grid, Header, Card, Image, Dropdown, Divider, Button } from 'semantic-ui-react';
import AppForm from './AppForm'

class Apps extends React.Component {
  state = { name: '', showForm: false }

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm }
    })
  }

  apps = () => {
    let { apps } = this.props;
    let { name } = this.state;
    let visible = apps;
    if (name)
      visible = apps.filter( a => a.name === name )

    return visible.map( app =>
    <Card key={app.id}>
      <Image src={app.pic} />
      <Card.Content>
        <Card.Header>
          {app.name}
        </Card.Header>
        <Card.Meta>
          <span>
            {app.age}
          </span>
        </Card.Meta>
        <Card.Description>
          {app.city}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Link to={`/apps/${app.id}`}>
          View Person
        </Link>
      </Card.Content>
    </Card>
  )
  }

  nameOptions = () => {
    return this.props.categories.map( (c,i) => { return { key: i, text: c, value: c } })
  }

  render() {
    const { name, showForm } = this.state;
    return (
      <Container>
        <Header as="h3" textAlign="center">Peeps</Header>
        <Button onClick={this.toggleForm}>
          { showForm ? 'Hide Form' : 'Show Form' }
        </Button>
        { showForm ?
          <AppForm closeForm={this.toggleForm} />
          :
          <div>
            <Dropdown
              placeholder="Filter by name"
              fluid
              selection
              options={this.nameOptions()}
              onChange={ (e, data) => this.setState({ name: data.value }) }
              value={name}
            />
            { name && <Button fluid basic onClick={ () => this.setState({ name: '' }) }>Clear Filter: {name}</Button> }
            <Divider />
            <Card.Group itemsPerRow={4}>
              { this.apps() }
            </Card.Group>
          </div>
        }
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  const { apps } = state
  const categories = [...new Set(apps.map( a => a.name ))]
  return { apps, categories}
}

export default connect(mapStateToProps)(Apps);
