import { BiSearch } from "react-icons/bi"

const SearchBar = () => {
  const searchIcon = <BiSearch className="text-2xl" />
  
  return (
    <div className="flex border-2 rounded-md border-gray-600 mr-2 px-1 hover:border-indigo-400 ease-in duration-150">
      <input type="text" className="bg-transparent focus:outline-none"></input>
      <button className="hover:text-indigo-400 ease-in duration-150">{searchIcon}</button>
    </div>
  )
}

export default SearchBar;