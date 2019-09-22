module.exports.json = (data, status = true, message = '') => {
  if (status) {
    return {
      status,
      data,
      message: ''
    }
  } else {
    return {
      status,
      data,
      message
    }
  }
}
