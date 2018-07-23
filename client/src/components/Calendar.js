import React from 'react'
import axios from 'axios'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";
BigCalendar.momentLocalizer(moment); 

class Calendar extends React.Component {
  state = {reservations: [], view: 'month'}

  componentDidMount(){
     axios.get('/api/all_reservations')
      .then(res => this.setState({ reservations: res.data }));
  }

  render() {
    const {reservations} = this.state
    let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])
    return(
    <div>
      <BigCalendar
        events={reservations}
        titleAccessor='special_requests'
        views={allViews}
        startAccessor='start_date'
        endAccessor='end_date'
        style={{height: '95vh'}}
      />
    </div>
    )
  }
}

export default Calendar;
