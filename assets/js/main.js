const hour = document.getElementById('clock-hour'),
  minutes = document.getElementById('clock-minutes'),
  seconds = document.getElementById('clock-seconds')

const clock = () => {
  let date = new Date()

  let hh = date.getHours() * 30,
    mm = date.getMinutes() * 6,
    ss = date.getSeconds() * 6

  hour.style.transform = `rotateZ(${hh + mm / 12}deg)`
  minutes.style.transform = `rotateZ(${mm}deg)`
  seconds.style.transform = `rotateZ(${ss}deg)`
}

setInterval(clock, 1000)

//=============== CLOCK AND DATE TEXT ==============//

const textHour = document.getElementById('text-hour'),
  textMinutes = document.getElementById('text-minutes'),
  textAmPm = document.getElementById('text-ampm'),
  dateDay = document.getElementById('date-day'),
  dateMonth = document.getElementById('date-month'),
  dateYear = document.getElementById('date-year')

const clockText = () => {
  let date = new Date()

  let hh = date.getHours(),
    ampm,
    mm = date.getMinutes(),
    day = date.getDate(),
    month = date.getMonth(),
    year = date.getFullYear()

  //ampm
  if (hh >= 12) {
    hh = hh - 12
    ampm = 'PM'
  } else {
    ampm = 'AM'
  }

  if (hh == 0) {
    hh = 12
  }

  //zeros
  if (hh < 10) {
    hh = `0${hh}`
  }
  if (mm < 10) {
    mm = `0${mm}`
  }

  // show time
  textHour.innerHTML = `${hh}:`

  // show minutes
  textMinutes.innerHTML = `${mm}`

  // show ampm
  textAmPm.innerHTML = ampm

  //months
  let months = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Maio',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez'
  ]

  // show month day and year
  dateDay.innerHTML = day
  dateMonth.innerHTML = `${months[month]},`
  dateYear.innerHTML = year
}

setInterval(clockText, 1000)
