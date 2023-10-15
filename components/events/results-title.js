import Link from "next/link";
import classes from "./results-title.module.css";

function ResultsTitle(props) {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <button>
        <Link href="/events">Show all events</Link>
      </button>
    </section>
  );
}

export default ResultsTitle;
