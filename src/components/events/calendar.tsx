import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

export default function CustomCalendar() {
  const events = [
    {
      start: new Date(),
      end: new Date(moment().add(1, "days").toDate()),
      title: "Some title",
    },
  ];

  return (
    <Calendar
    localizer={localizer}
    events={events}
    startAccessor="start"
    endAccessor="end"
    views={["month"]}
    />
  );
}
