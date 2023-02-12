export const GET_ALL_PRODUCTS = {
  query: `
    query AllProducts {
      products {
        id
        name
      }
    }
  `
}

export const GET_ONE_PRODUCT = {
  query: `
    query OneProduct($id: ID!) {
      product(id: $id) {
        id
        name
        description
      }
    }
  `
}

export const GET_ALL_USERS = {
  query: `
    query AllUsers {
      users {
        id
        fullName
      }
    }
  `
}
