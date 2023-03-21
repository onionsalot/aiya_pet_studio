import { useMutation, useQueryClient } from "react-query"
import {
  ADD_NEW_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_TAG,
  ADD_NEW_TAG,
  ADD_NEW_FEATURED_PRODUCT,
  UPDATE_FEATURED_PRODUCT
} from "../graphql/mutations"
import { gqlHelper } from "../helpers/gql-helper"
import toast from 'react-hot-toast'

export const useMutate = () => {
  const queryClient = useQueryClient()
  const checkResponse = (response, ...args) => {
    if (response.data?.errors) {
      sendError(response.data?.errors[0].message)
    } else {
      toast.success('Success!')
      for (let i = 0; i < args.length; i++) {
        queryClient.invalidateQueries(args[i])
      }
    }
  }
  const sendError = (e) => {
    toast.error(`An error has occured => ${e || 'unknown'}`)
  }
  // Product Mutations

  const addProduct = useMutation((input) => gqlHelper(ADD_NEW_PRODUCT, input),
    {
      onSuccess: (response) => {
        checkResponse(response, 'get-all-products')
      },
      onError: (e) => {
        sendError(e.response.data.errors[0].message)
      }
    })

  const deleteProduct = useMutation((input) => gqlHelper(DELETE_PRODUCT, input),
    {
      onSuccess: (response) => {
        checkResponse(response, 'get-all-products')
      },
      onError: (e) => {
        sendError(e.response.data.errors[0].message)
      }
    })

  const updateProduct = useMutation((input) => gqlHelper(UPDATE_PRODUCT, input),
    {
      onSuccess: (response) => {
        checkResponse(response, 'get-all-products', 'get-one-product')
      },
      onError: (e) => {
        sendError(e.response.data.errors[0].message)
      }
    })

    const addTag = useMutation((input) => gqlHelper(ADD_NEW_TAG, input),
    {
      onSuccess: (response) => {
        checkResponse(response, 'get-all-tags')
      },
      onError: (e) => {
        sendError(e.response.data.errors[0].message)
      }
    })

    const updateTag = useMutation((input) => gqlHelper(UPDATE_TAG, input),
    {
      onSuccess: (response) => {
        checkResponse(response, 'get-all-tags', 'get-one-tag')
      },
      onError: (e) => {
        sendError(e.response.data.errors[0].message)
      }
    })

    const addFeaturedProduct = useMutation((input) => gqlHelper(ADD_NEW_FEATURED_PRODUCT, input),
    {
      onSuccess: (response) => {
        checkResponse(response, 'get-all-featured-products')
      },
      onError: (e) => {
        sendError(e.response.data.errors[0].message)
      }
    })

    const updateFeaturedProduct = useMutation((input) => gqlHelper(UPDATE_FEATURED_PRODUCT, input),
    {
      onSuccess: (response) => {
        checkResponse(response, 'get-all-featured-products', 'get-one-featured-product')
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
    updateTag,
    addFeaturedProduct,
    updateFeaturedProduct
  }
}
