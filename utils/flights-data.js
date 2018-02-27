
const now = new Date();
const departureDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 3).toDateString();
const returnDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7).toDateString();

export const  flightsData =[{
  "airline": "GoAir", 
  "flight_number": "AF-667", 
  "from":"New Delhi", 
  "sourceCode":"DEL",
  "to":"Goa", 
  "destinationCode":"GOI",
  "departureTime":"09:00", 
  "arrivalTime":"03:20", 
  "duration":"6h 20m", 
  "timeRange": [departureDate, returnDate],
  "cost":"38706",
  "stops":"1",
  "stopsTo":"BOM"
},
{
  "airline": "GoAir", 
  "flight_number": "AF-557", 
  "from":"New Delhi", 
  "sourceCode":"DEL",
  "to":"Goa", 
  "destinationCode":"GOI",
  "departureTime":"20:05", 
  "arrivalTime":"22:40", 
  "duration":"2h 35m", 
  "cost":"38706",
  "stops":"Non-Stop",
  "timeRange": [departureDate, returnDate]
}]
