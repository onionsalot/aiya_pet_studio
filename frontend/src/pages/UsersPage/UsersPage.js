import Table from "../../components/Admin/Table/Table"
import { useUsers } from "../../hooks/user-hooks"
import { useMemo } from "react";
import Checkmark from "../../components/Admin/Checkmark/Checkmark";
import TableSkeleton from "../../components/Admin/TableSkeleton/TableSkeleton";
import { humanReadableDate } from "../../helpers/helper";

const UsersPage = () => {
  const users = useUsers()
  const columns = useMemo(
    () => [
      {
        Header: "Users",
        columns: [
          {
            Header: "ID",
            accessor: "id",
          },
          {
            Header: "Email",
            accessor: "email",
          },
          {
            Header: "Full Name",
            accessor: "fullName",
          },
          {
            Header: "Admin",
            accessor: "admin",
            Cell: ({ cell: { value } }) => <Checkmark bool={value} />
          },
          {
            Header: "SignIn Count",
            accessor: "signInCount",
          },
          {
            Header: "Created At",
            accessor: "createdAt",
            Cell: ({ cell: { value } }) => humanReadableDate(value)
          }
        ],
      }
    ],
    []
  )

  const content = useMemo(
    () => {
      if (users.isError) return <h1>Something went wrong!</h1>
      if (users.isLoading) return <TableSkeleton />
      return <Table columns={columns} data={users?.data?.data?.data?.users} />
    }, [users]
  )

  return (
    <div className="bg-white h-full overflow-y-scroll">
      {content}
      <Table columns={columns} data={users?.data?.data?.data?.users} />
    </div>
  )
}
 
export default UsersPage