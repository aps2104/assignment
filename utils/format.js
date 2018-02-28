export const timestampToTime = (timestamp) => {
  return formatTime(new Date(timestamp))
}

function formatTime(date) {
    var hour = date.getHours(),
        minute = date.getMinutes()

    return  hour + " hours " + minute + " minutes";
}
