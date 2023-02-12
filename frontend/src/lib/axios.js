import axios from "axios"

axios.defaults.xsrfCookieName = "CSRF-TOKEN"
axios.defaults.xsrfHeaderName = "X-CSRF-Token"
// axios.defaults.headers.common['X-CSRF-TOKEN'] = CSRFToken(document.cookie)
axios.defaults.withCredentials = true

export default axios