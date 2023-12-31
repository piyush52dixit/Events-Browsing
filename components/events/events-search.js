import React, { useRef } from "react";
import classes from "./events-search.module.css";

const EventsSearch = (props) => {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;

    props.onSearch(selectedMonth, selectedYear);
  };

  return (
    <>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="year">Year</label>
            <select id="year" ref={yearInputRef}>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
            </select>
          </div>
          <div className={classes.control}>
            <label htmlFor="month"> Month </label>
            <select id="month" ref={monthInputRef}>
              <option value="1">Jan</option>
              <option value="2">Feb</option>
              <option value="3">March</option>
              <option value="4">Apr</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">Aug</option>
              <option value="9">Sep</option>
              <option value="10">Oct</option>
              <option value="11">Nov</option>
              <option value="12">Dec</option>
            </select>
          </div>
        </div>
        <button>Find Events </button>
      </form>
    </>
  );
};

export default EventsSearch;
