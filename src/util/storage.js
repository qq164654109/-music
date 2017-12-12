const storage = {
  set(key, val) {
    let newVal = JSON.stringify(val);
    sessionStorage.setItem(key, newVal)
  },
  get(key) {
    let val = sessionStorage.getItem(key);
    if (val) {
      return JSON.parse(val)
    }
  }
}
export {storage}
