import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getApps } from '../actions/apps';
import { Container, Grid, Header, Card, Image } from 'semantic-ui-react';
import { Container, Grid, Header, Card, Image, Dropdown, Divider, Button } from 'semantic-ui-react';

class Apps extends React.Component {

  state = { category: '' }

  apps = () => {
    const { apps } = this.props;
    const { category } = this.state;
    let visible = apps;
    if (category)
      visible = apps.filter( a => a.category === category )
    return visible.map( app =>
      <Card key={app.id}>
        <Image src={app.logo} />
        <Card.Content>
          <Card.Header>
            {app.name}
          </Card.Header>
          <Card.Meta>
            <span>
              {app.author}
            </span>
          </Card.Meta>
          <Card.Description>
            {app.category}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Link to={`/apps/${app.id}`}>
            View App
          </Link>
        </Card.Content>
      </Card>
    )
  }

  categoryOptions = () => {
      return this.props.categories.map( (c,i) => { return { key: i, text: c, value: c } })
    }

  rrender() {
    let { category } = this.state;
    return (
      <Container>
        <Header as="h3" textAlign="center">Apps</Header>
        <Dropdown
          placeholder="Filter by category"
          fluid
          selection
          options={this.categoryOptions()}
          onChange={ (e, data) => this.setState({ category: data.value }) }
          value={category}
        />
       { category && <Button fluid basic onClick={ () => this.setState({ category: '' }) }>Clear Filter: {category}</Button> }
       <Divider />
         <Card.Group itemsPerRow={4}>
           { this.apps() }
          </Card.Group>
        </Container>
      )
    }
  }

  const mapStateToProps = (state) => {
    return { apps: state.apps }
  }

export default connect(mapStateToProps)(Apps);
