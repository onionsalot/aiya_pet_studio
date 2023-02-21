import { useTable, useFilters, useSortBy } from "react-table"
import { useState } from "react"

const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useSortBy
  );
  const [searchInput, setSearchInput] = useState("")
  const [filterInput, setFilterInput] = useState("id")

  const handleSearchChange = (e) => {
    const value = e.target.value || ""
    setFilter(filterInput, value)
    setSearchInput(value)
  };

  const handleFilterChange = (e) => {
    const value = e.target.value || ""
    setFilterInput(value)
  }
  
  const getSearchChoices = () => {
    if(!data) return []

    return Object.keys(data[0])
  }
  
  const normalizeText = (text) => {
    const addedSpace = text.replace(/([A-Z])/g, " $1")
    return addedSpace.charAt(0).toUpperCase() + addedSpace.slice(1)
  }
  console.log(columns)
  return (
    <>
      <div className="m-2">
        <input
          value={searchInput}
          onChange={handleSearchChange}
          placeholder={"Search name"}
          className="admin-tables"
        />
        <select name="filter" className="admin-tables" onChange={handleFilterChange}>
          {getSearchChoices().map((e, index)=> {
            return <option key={index} value={e}>{normalizeText(e)}</option>
          })}
        </select>
      </div>

      <table className="admin-tables m-2" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr className="admin-tables" {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={
                    column.isSorted
                      ? column.isSortedDesc
                        ? "admin-tables after:content-['⬇️']"
                        : "admin-tables after:content-['⬆️']"
                      : "admin-tables"
                  }
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody
          {...getTableBodyProps()}
          className="[&>*:nth-child(odd)]:bg-gray-50 [&>*:nth-child(even)]:bg-admin_bg"
        >
          {rows.map((row) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td className="admin-tables" {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default Table
