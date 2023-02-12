export default function CSRFToken(cookies) {
  if (!cookies) return
  const splitCookies = cookies.split('; ')
  return splitCookies.find(cookie => cookie.startsWith("CSRF-TOKEN=")).split('=')[1]
}