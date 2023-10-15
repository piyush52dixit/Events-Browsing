import React from "react";
import classes from "./EventList.module.css";
import EventItem from "./EventItem";

const EventList = (props) => {
  const { items } = props;
  return (
    <ul className={classes.list}>
      {items.map((x) => (
        <EventItem
          key={x.id}
          id={x.id}
          title={x.title}
          location={x.location}
          image={x.image}
          date={x.date}
        />
      ))}
    </ul>
  );
};

export default EventList;
