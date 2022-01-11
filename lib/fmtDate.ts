/**
 * Formate a date given a valid datetime
 * @param date
 * @returns {String} String in mmm dd, YYYY
 */
const fmtDate = (date: Date): string => {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
};

export default fmtDate;
