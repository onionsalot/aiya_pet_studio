import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const TableSkeleton = () => {
  return (
    <div className="m-2">
      <h2>
        <Skeleton width={200} height={30} />
      </h2>
      <br />
      <div className='flex flex-col'>
        <div className='text-center'>
          <Skeleton width={200} height={30} />
        </div>
        <table>
          <thead>
            <tr>
              {Array(4)
                .fill()
                .map((_, i) => (
                  <th key={i}>
                    <Skeleton width={100} height={20} />
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {Array(10)
              .fill()
              .map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {Array(4)
                    .fill()
                    .map((_, colIndex) => (
                      <td className="p-1" key={colIndex}>
                        <Skeleton width={100} height={20} />
                      </td>
                    ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
 
export default TableSkeleton