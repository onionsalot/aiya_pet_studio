import { useMutation, useQueryClient } from "react-query"
import { ADD_NEW_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, UPDATE_TAG, ADD_NEW_TAG } from "../graphql/mutations"
import { gqlHelper } from "../helpers/gql-helper"
import toast from 'react-hot-toast'

export const useMutate = () => {
  const queryClient = useQueryClient()
  const checkResponse = (response) => {
    if (response.data?.errors) {
      sendError(response.data?.errors[0].message)
    } else {
      toast.success('Success!')
      queryClient.invalidateQueries('get-all-products') 
    }
  }
  const sendError = (e) => {
    toast.error(`An error has occured => ${e || 'unknown'}`)
  }
  // Product Mutations

  const addProduct = useMutation((input) => gqlHelper(ADD_NEW_PRODUCT, input),
    {
      onSuccess: (response) => {
        checkResponse(response)
      },
      onError: (e) => {
        sendError(e.response.data.errors[0].message)
      }
    })

  const deleteProduct = useMutation((input) => gqlHelper(DELETE_PRODUCT, input),
    {
      onSuccess: (response) => {
        checkResponse(response)
      },
      onError: (e) => {
        sendError(e.response.data.errors[0].message)
      }
    })

  const updateProduct = useMutation((input) => gqlHelper(UPDATE_PRODUCT, input),
    {
      onSuccess: (response) => {
        checkResponse(response)
      },
      onError: (e) => {
        sendError(e.response.data.errors[0].message)
      }
    })

    const addTag = useMutation((input) => gqlHelper(ADD_NEW_TAG, input),
    {
      onSuccess: (response) => {
        checkResponse(response)
      },
      onError: (e) => {
        sendError(e.response.data.errors[0].message)
      }
    })

    const updateTag = useMutation((input) => gqlHelper(UPDATE_TAG, input),
    {
      onSuccess: (response) => {
        checkResponse(response)
      },
      onError: (e) => {
        sendError(e.response.data.errors[0].message)
      }
    })

  return {
    addProduct,
    deleteProduct,
    updateProduct,
    addTag,
    updateTag
  }
}
