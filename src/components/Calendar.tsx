"use client";

import styles from "@/styles/main.module.css";

const Calendar = () => {
  return (
    <div className={styles.calendar}>
      <iframe
        src='https://calendar.google.com/calendar/embed?src=d752981dedde0e48195a368b76af0dd2e27874af7e2efd1c84365f9872594baa%40group.calendar.google.com&ctz=America%2FChicago'
        style={{ border: 0, width: "100%" }}
        //   width='800'
        height='600'
      ></iframe>
    </div>
  );
};

export default Calendar;
