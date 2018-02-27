export const timestampToDate = (timestamp) => {
  return formatDate(new Date(timestamp))
}

function formatDate(date) {
    var year = date.getFullYear(),
        month = date.getMonth() + 1, // months are zero indexed
        day = date.getDate(),
        hour = date.getHours(),
        minute = date.getMinutes(),
        //second = date.getSeconds(),
        minuteFormatted = minute < 10 ? "0" + minute : minute;
        //hourFormatted = hour % 12 || 12, // hour returned in 24 hour format
        //morning = hour < 12 ? "am" : "pm";

    return  day + "/" + month + "/" + year + " " + hour + ":" + minuteFormatted;
}
