import moment from 'moment'

export const timestampToTime = (timestamp) => {
  return formatTime(moment(timestamp))
}

function formatTime(date) {
    const now = moment();
    const hourAgo = now.diff(date, 'hour');
    const minuteAgo = now.diff(date, 'minute');
    return  hourAgo ? hourAgo + " hours " + minuteAgo + " minutes ago" : minuteAgo + " minutes ago";
}
