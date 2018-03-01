import moment from 'moment'

export const timestampToTime = (timestamp) => {
  return formatTime(moment(timestamp))
}

function formatTime(date) {
    const now = moment();
    const hourAgo = now.diff(date, 'hour');
    const minuteAgo = now.diff(date, 'minute');
      if (hourAgo)  {
          if (minuteAgo.toString().length < 3)  {
              return hourAgo + " hours " + minuteAgo + " minutes ago";
           } 
           else {
               return hourAgo + " hours ago" ; 
           }
        }
        else if (minuteAgo.toString().length < 3) {
            return minuteAgo + " minutes ago" 
        }
        else {
            return '';
        }
}
