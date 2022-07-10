/**
 * Formate a date given a valid datetime
 * @param date
 * @returns {String} String in mmm dd, YYYY
 */
const fmtDate = (date?: null | string): string => {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date || Date.now()));
};

export default fmtDate;
