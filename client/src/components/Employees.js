import React from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import InfiniteScroll from 'react-infinite-scroller';
import { 
  Grid, 
  Divider,
  Loader,
  Form, 
} from 'semantic-ui-react';
import styled from "styled-components";

class Employees extends React.Component {
  state = { employees: [], total_pages: 0, page: 1, search_term: '' };

  componentDidMount() {
    axios.get('/api/employees')
      .then( res => {
        this.setState({ employees: res.data.employees, total_pages: res.data.total_pages });
        this.props.dispatch({ type: 'HEADERS', headers: res.headers });
    });
  };

  loadMore = () => {
    const page = this.state.page + 1
    axios.get( `/api/employees?page=${page}`)
    .then( ({data, headers}) => {
      this.setState(state => {
        return{ employees: [...state.employees, ...data.employees], page: state.page + 1 }
      })
      this.props.dispatch({ type: 'HEADERS', headers })
    })
  };

  handleChange = (e) => {
    this.setState({ search_term: e.target.value })
  };

  listEmployees = () => {
    const { employees } = this.state;
    return employees.map((employee, i) => {
     return ( 
      <Grid.Row key={i} columns={4} textAlign="center">
        <Grid.Column>
          {employee.first_name}
        </Grid.Column>
        <Grid.Column>
          {employee.last_name}
        </Grid.Column>
        <Grid.Column>
          {employee.email}
        </Grid.Column>
        <Grid.Column>
          {employee.role}
        </Grid.Column>
      </Grid.Row>
    )}
  )};

  searchEmployee = () => {
    const { search_term, employees } = this.state;
    if (search_term) {
      let filtered_employees = employees.filter( e => 
         e.first_name.includes(search_term) || e.last_name.includes(search_term)
      );
      return (
        filtered_employees.map( (emp, i) => 
          <Grid.Row key={i} columns={4} textAlign="center">
            <Grid.Column>
              { emp.first_name }
            </Grid.Column>
            <Grid.Column>
              { emp.last_name }
            </Grid.Column>
            <Grid.Column>
              { emp.email }
            </Grid.Column>
            <Grid.Column>
              { emp.role }
            </Grid.Column>
         </Grid.Row>
        )
      )
    }
  };

  render() {
    const { total_pages, search_term, page } = this.state;
    return (
      <Container>
        <Form.Input
          placeholder="Search By Name..."
          value={search_term}
          onChange={this.handleChange}
        >
        </Form.Input>
        <Divider hidden />
        <InfiniteScroll
          pageStart={page}
          loadMore={this.loadMore}
          hasMore={ page < total_pages && search_term.length === 0 }
          loader={<Loader />}
          useWindow={false}
        >
          <Grid divided="vertically">
            <Grid.Row columns={4} textAlign="center">
              <Grid.Column>
                First Name
              </Grid.Column>
              <Grid.Column>
                Last Name
              </Grid.Column>
              <Grid.Column>
                Email
              </Grid.Column>
              <Grid.Column>
                Role
              </Grid.Column>
            </Grid.Row>
            { (search_term.length > 0) ?
              this.searchEmployee()
              :
              this.listEmployees()
            };
          </Grid>
        </InfiniteScroll>
      </Container>
    )
  }
};

const Container = styled.div`
  margin-top: 20px;
  height: 100vh;
  overflow: auto;
  width: auto;
`
export default connect()(Employees);