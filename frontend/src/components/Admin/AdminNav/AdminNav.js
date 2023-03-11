import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import NavLink from './NavLink'

const AdminNav = () => {
  const database = <FontAwesomeIcon icon={faDatabase} />
  const truck = <FontAwesomeIcon icon={faTruckFast} />

  return ( 
    <div className="flex flex-col bg-blue-500 h-screen w-64 pl-2 pt-4">
      <span className="text-admin_main text-2xl mb-3">Admin Pet Studio</span>
      <hr className="w-40 content-center mb-3"/>
      <div className="text-admin_link2">
        <div>
          <label className="text-admin_main text-lg">{truck} Quick Launch</label>
          <ul className="list-none p-1 pl-3">
            <li><NavLink url="/admin/dashboard" text="DashBoard"/></li>
          </ul>
        </div>
        <br />
        <div>
          <label className="text-admin_main text-lg">{database} Object Management</label>
          <ul className="list-none p-1 pl-3">
            <li><NavLink url="/admin/users" text="Users"/></li>
            <li><NavLink url="/admin/products" text="Products"/></li>
            <li><NavLink url="/admin/tags" text="Tags"/></li>
            <li><NavLink url="/admin/dashboard" text="Categories"/></li>
            <li><NavLink url="/admin/dashboard" text="Invoices"/></li>
            <li><NavLink url="/admin/dashboard" text="Reviews"/></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
 
export default AdminNav