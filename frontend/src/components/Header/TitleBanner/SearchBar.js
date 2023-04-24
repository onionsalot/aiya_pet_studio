import { BiSearch } from "react-icons/bi"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"

const SearchBar = () => {
  const searchIcon = <BiSearch className="text-2xl" />
  const formRef = useRef()
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)
    navigate(`/app/search?query=${encodeURIComponent(data.searchTerm)}`)
    e.target.reset()
  }

  return (
    <form ref={formRef} onSubmit={handleSearch} className="flex justify-between border-2 rounded h-9 shadow border-gray-600 mx-2 px-1 hover:text-indigo-400 hover:border-indigo-400 ease-in duration-150">
      <input type="text" name="searchTerm" className="bg-transparent focus:outline-none w-full text-gray-700" required></input>
      <button type="submit">{searchIcon}</button>
    </form>
  )
}

export default SearchBar