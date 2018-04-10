export function checkUname (username) {
  return (/^[A-Za-z0-9/\-/]+$/).test(username)
}

export function checkPwd (password) {
  return (/^[A-Za-z0-9]{6,}$/).test(password)
}
