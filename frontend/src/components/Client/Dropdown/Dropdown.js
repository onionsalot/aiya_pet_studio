import Select from 'react-select'
import { components } from 'react-select'

const Dropdown = ({ prefix, options, handleOptions, defaultValue }) => {
  // const options = sortOptions.map((option, i) => (
  //   <option value={option.value} key={i}>{option.display}</option>
  // ))
  // const options = [
  //   { value: 'chocolate', label: 'Chocolate' },
  //   { value: 'strawberry', label: 'Strawberry' },
  //   { value: 'vanilla', label: 'Vanilla' }
  // ]

  const prefixControl = {
    SingleValue: ({ children, ...props }) => {
      return (
        <components.SingleValue {...props}>
          {`${prefix}: ${children}`}
        </components.SingleValue>
      )
    }
  }

  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      border: '1px solid rgb(82 82 91)',
      borderRadius: '0.25rem',

    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? 'rgb(55 65 81)' : 'rgb(156 163 175)',
      backgroundColor: state.isSelected ? 'rgb(245 243 255)' : 'white',
      '&:hover': {
        backgroundColor: 'rgb(245 243 255)',
        color: 'rgb(55 65 81)',
      },
    }),
    control: (provided, state) => ({
      ...provided,
      minHeight: '36px',
      height: '36px',
      fontSize: '0.9rem',
      borderRadius: '0.25rem',
      border: '2px solid rgb(82 82 91)',
      boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      '&:hover': {
        borderColor: 'rgb(129 140 248)',
      },
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      padding: '4px',
    }),
  }

  return (
    // <div className="relative form-input py-0 w-48 m-4 md:my-0 border-gray-600 px-1 hover:border-indigo-400/80 ease-in duration-150 bg-transparent">
    //   <span className="absolute left-2 bottom-[10px] z-0 pointer-events-none">{prefix && `${prefix}:`} </span>
    //   <select
    //     className="bg-transparent focus:outline-none w-full text-center font-medium py-2"
    //     required
    //     onChange={handleOptions}
    //     defaultValue={defaultValue}
    //   >
    //     {options}
    //   </select>
    // </div>
    <div className='w-48  rounded h-9'>
      <Select
        placeholder={`${prefix}...`}
        defaultValue={defaultValue}
        // onChange={handleOptions}
        options={options}
        isSearchable={false}
        styles={customStyles}
        components={prefixControl}
      />
    </div>
  )
}

export default Dropdown
