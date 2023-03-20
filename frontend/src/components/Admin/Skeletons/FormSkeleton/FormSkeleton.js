import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const FormSkeleton = ({ count }) => {
  return (
    <div className="max-w-2xl m-6">
        <div className="text-2xl text-center mb-3">
          <Skeleton width={400} height={30} />  
        </div>
        <div>
          {Array(count)
            .fill()
            .map((_, i) => (
              <div className="admin-form-label">
              <Skeleton width={100} height={20} />
              <Skeleton height={40} /> 
            </div>
            ))
          }
        </div>
        
        <Skeleton width={100} height={40} /> 
      </div>
  );
}
 
export default FormSkeleton