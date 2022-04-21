const dateTime = new Date();

const hours = dateTime.getHours();
const minutes = dateTime.getMinutes();
const seconds = dateTime.getSeconds();
const monthDate = dateTime.getDate();
const month = dateTime.getMonth();
const year = dateTime.getFullYear();

export const time = `${hours}:${minutes}:${seconds}`;
export const date = `${monthDate}/${month}/${year}`;
