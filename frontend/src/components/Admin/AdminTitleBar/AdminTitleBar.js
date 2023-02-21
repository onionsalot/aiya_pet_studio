import { useLocation } from 'react-router-dom';
import { useBoundStore } from '../../../stores/useBoundStore'
import Logout from '../../Auth/Logout'

const AdminTitleBar = () => {
  const location = useLocation();
  const user = useBoundStore((state) => state.user)
  const getTitle = () => {
    const path = location.pathname
    const pathArr = path.split('/')
    pathArr.splice(0,2)

    return pathArr.map((path) => path.charAt(0).toUpperCase() + path.substring(1)).join(' > ')
  }
  return ( 
    <div className="bg-admin_main h-[10%] flex flex-row p-4">
      <span className='text-2xl'> {getTitle()} </span>
      <span className="ml-auto"> User: {user.email} <Logout /> </span>
    </div>
   );
}
 
export default AdminTitleBar;