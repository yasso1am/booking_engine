import React from 'react'
import axios from 'axios'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

class Calendar extends React.Component {
  state = {reservations: []}

  componentDidMount(){
    axios.get('/api/all_reservations')
    .then(res => this.setState({ reservations: res.data }));
  }

  render() {
    const {reservations} = this.state
    return(
    <div>
      <BigCalendar
        events={reservations}
        startAccessor='startDate'
        endAccessor='endDate'
      />
    </div>
    )
  }
}

export default Calendar;
