import { Toaster } from 'react-hot-toast'

function DefaultToaster() {
  return (
    <Toaster
      position= 'top-center'
      toastOptions={{
        className: '',
        duration: 5000,
        style: {
          background: '#363636',
          color: '#fff',
        },
        success: {
          duration: 5000,
          theme: {
            primary: 'green',
            secondary: 'black',
          },
        },
      }}
    />
  )
}

export default DefaultToaster
