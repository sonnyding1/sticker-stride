"use client";

import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

export default function HomePage() {
  const events = [
    {
      start: new Date(),
      end: new Date(moment().add(1, "days").toDate()),
      title: "Some title",
    },
  ];
  const views = Object.keys(Views).map((k) => Views[k as keyof typeof Views]);

  return (
    <div className="h-screen">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        views={["month"]}
      />
    </div>
  );
}
