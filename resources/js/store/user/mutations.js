export const setUser = (state, val) => {
  state.userinfo = val
}
export const changeVal = (state, val) => {
  state.userinfo[val[0]] = val[1]
  console.log('Store: ' + val[1])
}
