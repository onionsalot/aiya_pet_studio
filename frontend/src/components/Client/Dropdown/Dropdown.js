const Dropdown = ({prefix, sortOptions = [], handleOptions, defaultValue}) => {
  const options = sortOptions.map((option, i) => (
    <option value={option.value} key={i}>{option.display}</option>
  ))

  return (
    <div className="relative form-input py-0 w-48 m-4 md:my-0 border-gray-600 px-1 hover:border-indigo-400/80 ease-in duration-150 bg-transparent">
      <span className="absolute left-2 bottom-[10px] z-0 pointer-events-none">{prefix && `${prefix}:`} </span>
      <select
        className="bg-transparent focus:outline-none w-full text-center font-medium py-2"
        required
        onChange={handleOptions}
        defaultValue={defaultValue}
      >
        {options}
      </select>
    </div>
  );
};

export default Dropdown
