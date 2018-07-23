import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { setFlash } from "../actions/flash";
import { connect } from "react-redux";
import { Grid, Header } from "semantic-ui-react";
import styled from "styled-components";

class DateSelector extends React.Component {
  checkStart = () => {
    if (this.startDate === null) {
      this.props.dispatch(setFlash("Choose a start date first"));
    }
  };

  render() {
    return (
      <Grid stackable>
        <Grid.Row>
          <MyContainer>
            <Grid.Column>
              <SubHeader textAlign="center"> Start Date </SubHeader>
              <DatePicker
                inline
                fixedHeight
                selectsStart
                title="Start Date"
                id="pickMe"
                minDate={moment()}
                startDate={this.props.startDate}
                endDate={this.props.endDate}
                selected={this.props.startDate}
                onChange={this.props.handleStart}
              />
            </Grid.Column>
            <Grid.Column>
              <SubHeader textAlign="center"> End Date </SubHeader>
              <DatePicker
                inline
                fixedHeight
                selectsEnd
                title="End Date"
                minDate={this.props.startDate}
                startDate={this.props.startDate}
                endDate={this.props.endDate}
                onChange={this.props.handleEnd}
              />
            </Grid.Column>
          </MyContainer>
        </Grid.Row>
      </Grid>
    );
  }
}

const HeaderText = styled.div`
  display: flex;
  justify-content: center;
  font-size: 3em;
  padding-top: 40px;
`

const SubHeader = HeaderText.extend`
  font-size: 2em;
  padding: 20px;
`


const MyContainer = styled.div`
  display: flex;
  width: 50vw;
  justify-content: space-around;
  align-items: center;
`;

export default connect()(DateSelector);
