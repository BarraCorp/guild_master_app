const moment = require('moment')

const date = (value) => {
  if (!value) {
    return ''
  }

  return moment(value).format('DD/MM/YYYY')
}

const dateHour = (value) => {
  if (!value) {
    return ''
  }

  return moment(value).format('DD/MM/YYYY HH:mm')
}

const format = {
  date,
  dateHour,
}

export default {
  install(app) {
    app.config.globalProperties.$format = format
  },
}
