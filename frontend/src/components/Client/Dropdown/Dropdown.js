import Select from 'react-select'
import { components } from 'react-select'

const Dropdown = ({ prefix=null, options, handleOptions, defaultValue }) => {
  const prefixLabel = {
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
      fontSize: '0.95rem',
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

  const defaultValueObj = options.filter(option => option.value === defaultValue)

  return (
    <div className='w-48'>
      <Select
        placeholder={`${prefix}...`}
        defaultValue={defaultValueObj}
        onChange={handleOptions}
        options={options}
        isSearchable={false}
        styles={customStyles}
        components={prefix ? prefixLabel : ""}
      />
    </div>
  )
}

export default Dropdown
