"use client";

import styles from "@/styles/main.module.css";

const Calendar = () => {
  return (
    <div className={styles.calendar}>
      <iframe
        src='https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23A79B8E&ctz=America%2FChicago&showPrint=0&mode=AGENDA&src=Y19hNzk4MTYzNjBhN2EwMDc4N2VkMzQ4MmUxZWI2MWExNDk3MTYwNTdkNjM2MDRhOTc4NTA4YzhlMTFhYzU0ZjA3QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23F4511E'
        style={{ border: 0, width: "100%" }}
        //   width='800'
        height='600'
      ></iframe>

      {/* <iframe
        src='https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23A79B8E&ctz=America%2FChicago&showPrint=0&src=Y19hNzk4MTYzNjBhN2EwMDc4N2VkMzQ4MmUxZWI2MWExNDk3MTYwNTdkNjM2MDRhOTc4NTA4YzhlMTFhYzU0ZjA3QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23F4511E'
        style='border:solid 1px #777'
        width='800'
        height='600'
        frameborder='0'
        scrolling='no'
      ></iframe> */}
    </div>
  );
};

export default Calendar;
