import { useTable, useFilters, useSortBy, usePagination } from "react-table";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faAnglesRight,
  faAnglesLeft,
  faArrowUpAZ,
  faArrowDownZA,
  faArrowRotateRight
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"

const Table = ({ columns, data, path }) => {
  const right = <FontAwesomeIcon icon={faAnglesRight} />;
  const left = <FontAwesomeIcon icon={faAnglesLeft} />;
  const asc = <FontAwesomeIcon icon={faArrowUpAZ} />;
  const desc = <FontAwesomeIcon icon={faArrowDownZA} />;
  const reset = <FontAwesomeIcon icon={faArrowRotateRight} />;
  const navigate = useNavigate()
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    setFilter,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    setAllFilters,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 25 },
    },
    useFilters,
    useSortBy,
    usePagination
  );
  const [searchInput, setSearchInput] = useState("");
  const [filterInput, setFilterInput] = useState("id");
  const { pageIndex, pageSize } = state;

  const handleSearchChange = (e) => {
    const value = e.target.value || "";
    setFilter(filterInput, value);
    setSearchInput(value);
  };

  const handleFilterChange = (e) => {
    const value = e.target.value || "";
    setFilterInput(value);
  };

  const getSearchChoices = () => {
    if (!data || columns.length === 0) return [];

    return columns[0].columns
  };

  const handleReset = () => {
    setSearchInput("")
    setAllFilters([])
  }

  const handleLink = (id) => {
    navigate(id)
  }

  return (
    <div className="m-2">
      <div className="flex flex-row justify-between">
        <div>
          <input
            value={searchInput}
            onChange={handleSearchChange}
            placeholder={"Search name"}
            className="admin-tables"
          />
          <select
            name="filter"
            className="admin-tables"
            onChange={handleFilterChange}
          >
            {getSearchChoices().map((e, index) => {
              return (
                <option key={index} value={e.accessor}>
                  {e.Header}
                </option>
              );
            })}
          </select>
          <span onClick={handleReset} className="pl-3 hover:cursor-pointer select-none">{reset} Reset</span>
        </div>

        <div>
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            className="admin-tables"
          >
            {[25, 50, 100].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <button
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
          className={"mr-2 " + (!canPreviousPage ? "text-gray-400" : "text-admin_primary")}
        >
          {left}
        </button>
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className={!canPreviousPage ? "text-gray-400" : "text-admin_primary"}
        >
          Previous
        </button>
        <span className="ml-3 mr-3">
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className={!canNextPage ? "text-gray-400" : "text-admin_primary"}
        >
          Next
        </button>
        <button
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
          className={"ml-2 " + (!canNextPage ? "text-gray-400" : "text-admin_primary")}
        >
          {right}
        </button>
        <span className="ml-4">
          Go to page:
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
            className="admin-tables w-11"
          />
        </span>
      </div>

      <table className="admin-tables" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr className="admin-tables" {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="admin-tables select-none"
                >
                  {column.render("Header")} {" "}
                  {
                    column.isSorted
                      ? column.isSortedDesc
                        ? desc
                        : asc
                      : ""
                  }
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody
          {...getTableBodyProps()}
          className="[&>*:nth-child(odd)]:bg-gray-50 [&>*:nth-child(even)]:bg-admin_bg"
        >
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td className="admin-tables cursor-pointer" {...cell.getCellProps()} onClick={() => handleLink(row.values.id)}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
