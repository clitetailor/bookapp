export const date = time => time.getDate()
export const month = time => time.getMonth()
export const hours = time => time.getHours()
export const minutes = time => time.getMinutes()

export const displayTime = time =>
  `${date(time)}/${month(time)} ${hours(time)}:${minutes(time)}`
