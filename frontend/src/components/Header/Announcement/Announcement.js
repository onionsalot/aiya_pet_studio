const Announcement = ({ message }) => {
  return (
    <div className="w-full h-7 bg-gradient-to-r from-indigo-400/40 to-pink-200/40 flex items-center justify-center">
      <h1 className="text-gray-700 uppercase tracking-wide font-medium">{message}</h1>
    </div>
  )
}
 
export default Announcement