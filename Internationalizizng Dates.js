"use strict";

    // const options = {
    //   hour: "numeric",
    //   minute: "numeric",
    //   day: "numeric",
    //   month: "numeric",
    //   year: "numeric",
    //   weekday: 'long',
    // };

    const options = {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      weekday: "long",
    };

const locale= 'hn-IN';
const now = new Date();
const dates = new Intl.DateTimeFormat(locale,options).format(now);

console.log(dates)