import dayjs from 'dayjs';



const adjustDateTimeForTimezone = (dateString) => {
  if (!dateString) return new Date();
  const dateUTC = dayjs.utc(dateString);
  const dateInUTCMinus = dateUTC.tz('America/Sao_Paulo');

  return dayjs(dateInUTCMinus.format());
};


export default adjustDateTimeForTimezone;