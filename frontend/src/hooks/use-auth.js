import { useBoundStore } from '../stores/useBoundStore'
import { useMutation, useQueryClient } from "react-query"
import { 
  login, 
  logout, 
  signup, 
  resetRequest, 
  resetPassword,
  checkResetToken,
  confirmation
} from "../helpers/users-api"
import toast from 'react-hot-toast'

export const useAuth = () => {
  const queryClient = useQueryClient()
  const setUser = useBoundStore((state) => state.setUser)

  const signinUserMutation = useMutation(login,
    {
      onSuccess: (response) => {
        if (response.data?.message === "Logged in.") {
          localStorage.setItem('isLoggedIn', true)
          toast.success(`Welcome back, ${response.data.data.email}`)
          queryClient.invalidateQueries('user') 
        }
      }
    }
  )

  const signupUserMutation = useMutation(signup,
    {
      onSuccess: (response) => {
        if (response.data?.message === "Signed up sucessfully."){
          queryClient.invalidateQueries('user') 
        }
      }
    }
  )

  const signoutUserMutation = useMutation(logout, {
    onSuccess: (response) => {
      if (response.data?.message === "Logged out successfully."){
        localStorage.removeItem('isLoggedIn')
        setUser(null)
        queryClient.invalidateQueries('user')
      }
    },
    onError: (e) => {
      toast.error(`An error has occured`)
    }
  })

  const requestPasswordResetMutation = useMutation(resetRequest, {
    onSuccess: () => {
      toast.success(`Request sent!`)
    },
    onError: (e) => {
      toast.error(`An error has occured`)
    }
  })

  const resetPasswordMutation = useMutation(resetPassword, {
    onSuccess: () => {
      toast.success(`Success!`)
    },
    onError: (e) => {
      toast.error(`An error has occured`)
    }
  })

  const checkResetTokenMutation = useMutation(checkResetToken)

  const confirmationMutation = useMutation(confirmation, {
    onSuccess: () => {
      toast.success(`Email confirmed successfully! Please log in to continue.`)
    },
    onError: (e) => {
      toast.error(`An error has occured. Please ensure link has not expired.`)
    }
  })

  return {
    signinUserMutation,
    signupUserMutation,
    signoutUserMutation,
    requestPasswordResetMutation,
    resetPasswordMutation,
    confirmationMutation,
    checkResetTokenMutation
  }
}