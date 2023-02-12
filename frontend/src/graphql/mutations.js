
export const ADD_NEW_PRODUCT = {
  query: `
    mutation ($name: String!, $price: Int!) {
      productCreate(input: {name: $name, price: $price}) {
        product {
          id
          name
          price
        }
      }
    }        
  `
}

export const UPDATE_PRODUCT = {
  query: `
    mutation ($id: ID!, $name: String!, $price: Int!) {
      productUpdate(input: {id: $id, name: $name, price: $price}) {
        product {
          id
        }
      }
    }
  `
}

export const DELETE_PRODUCT = {
  query: `
    mutation ($id: ID!) {
      productDelete(input: {id: $id}) {
        product {
          id
        }
      }
    }    
  `
}