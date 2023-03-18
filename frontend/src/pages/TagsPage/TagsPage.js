import Table from "../../components/Admin/Table/Table"
import { useTags } from "../../hooks/tag-hooks"
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { humanReadableDate } from "../../helpers/helper";
import TableSkeleton from "../../components/Admin/TableSkeleton/TableSkeleton";

const TagsPage = () => {
  const tags = useTags()
  const columns = useMemo(
    () => [
      {
        Header: "Tags",
        columns: [
          {
            Header: "ID",
            accessor: "id",
          },
          {
            Header: "Name",
            accessor: "name",
          },
          {
            Header: "Created At",
            accessor: "createdAt",
            Cell: ({ cell: { value } }) => humanReadableDate(value),
          }
        ],
      }
    ],
    []
  )

  if (tags.isError) return <h1>Something went wrong!</h1>

  return (
    <div className="bg-white h-full overflow-y-scroll">
      <Link className="admin-form-submit w-24 ml-2" to="/admin/tags/create">+ Add</Link>
      {tags.isLoading ? (
        <TableSkeleton />
      ) : (
        <Table columns={columns} data={tags?.data?.data?.data?.tags} />
      )}
    </div>
  )
}

export default TagsPage