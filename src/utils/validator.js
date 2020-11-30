export const lt = (e, len, callback) => {
  const value = e.target.value.trim()

  if (value.length > len - 1) {
    callback({ valid: true, value })
  } else {
    callback({ valid: false, value })
  }
}

export const isAlpha = (e, len, callback) => {
  const value = e.target.value.trim()

  if (/^\w+$/.test(value) && value.length > len - 1) {
    callback({ valid: true, value })
  } else {
    callback({ valid: false, value })
  }
}

export const isDigit = (e, callback) => {
  const value = e.target.value.trim()

  if (/^\d+$/.test(value)) {
    callback({ valid: true, value })
  } else {
    callback({ valid: false, value })
  }
}

export const isWebsiteValid = (e, callback) => {
  const value = e.target.value.trim()
  //eslint-disable-next-line
  const reg = /[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/

  if (reg.test(value)) {
    callback({ valid: true, value })
  } else {
    callback({ valid: false, value })
  }
}

export const isEmailValid = (e, callback) => {
  const value = e.target.value.trim()
  //eslint-disable-next-line
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  if (reg.test(value)) {
    callback({ valid: true, value })
  } else {
    callback({ valid: false, value })
  }
}

export const isPassword = (e, len, callback) => {
  const value = e.target.value.trim()

  if (value.length > len - 1) {
    callback({ valid: true, value })
  } else {
    callback({ valid: false, value })
  }
}

export const isConfirm = (e, callback) => {
  callback({ value: e.target.value.trim() })
}
