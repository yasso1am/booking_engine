import React, {Fragment} from 'react';
import axios from 'axios';
import { Grid, Divider } from 'semantic-ui-react';


class Employees extends React.Component {
  state = { employees: [] };

  componentDidMount() {
    axios.get('/api/employees')
      .then(res => this.setState({ employees: res.data }));
  }

  render() {
    const {employees} = this.state;
    return (
      <Grid>
        <Grid.Row textAlign="center" fontWeight="bold">
          <Grid.Column width={4}>
            Name
          </Grid.Column>
          <Grid.Column width={4}>
            Nickname
          </Grid.Column>
          <Grid.Column width={4}>
            Email
          </Grid.Column>
          <Grid.Column width={4}>
            Role
          </Grid.Column>
        </Grid.Row>
        {employees.map((employee, i) =>
        <Fragment>
          <Grid.Row textAlign="center">
            <Grid.Column width={4} >
              {employee.name}
            </Grid.Column>
            <Grid.Column width={4} >
              {employee.nickname}
            </Grid.Column>
            <Grid.Column width={4} >
              {employee.email}
            </Grid.Column>
            <Grid.Column width={4} >
              {employee.role}
            </Grid.Column>
          </Grid.Row>
        <Divider />
        </Fragment>
        )}
      </Grid>
    )
  }
}

export default Employees;