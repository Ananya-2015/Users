let moment = require('moment-timezone')

// let m = moment()
// let m = moment("11/01/2022 12:43PM", "DD/MM/YYYY hh:mmA")
// let m = moment(600000)
// let m = moment.unix(36000)
// let m = moment("11/01/2022 12:43PM", "DD/MM/YYYY hh:mmA")
// let m_utc = moment.utc(m)
// console.log(m.toString())
// console.log(m_utc.toString())

// let m = moment()
// m.minute(69)
// m.set('week', 3) //week of the year
// m.set('day', 9) //day of the week
// console.log(m.minute(), m.get('minutes'))

let m = moment()
// m.add({
//     hour: 3,
//     minute : 30
// }).subtract({
//     hour : 1,
//     minute : 10
// })
// console.log(m.utcOffset())// in minutes

// m.utcOffset(5) // -15 to +15 interprete as hours, rest as minutes




console.log(m.toString())
console.log(m.toISOString())