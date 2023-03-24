
export const ADD_NEW_PRODUCT = {
  query: `
    mutation ($name: String!, $price: Int!, $description: String!) {
      productCreate(input: {name: $name, price: $price, description: $description}) {
        product {
          id
          name
          price
          description
        }
      }
    }        
  `
}

export const UPDATE_PRODUCT = {
  query: `
    mutation ($id: ID!, $name: String!, $price: Int!, $description: String!) {
      productUpdate(input: {id: $id, name: $name, price: $price, description: $description}) {
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

export const ADD_NEW_TAG = {
  query: `
    mutation ($name: String!) {
      tagCreate(input: {name: $name}) {
        tag {
          id
          name
        }
      }
    }        
  `
}

export const UPDATE_TAG = {
  query: `
    mutation ($id: ID!, $name: String!) {
      tagUpdate(input: {id: $id, name: $name}) {
        tag {
          id
        }
      }
    }
  `
}

export const ADD_NEW_FEATURED_PRODUCT = {
  query: `
    mutation ($productId: Int!) {
      featuredProductCreate(input: {productId: $productId}) {
        featuredProduct {
          id
        }
      }
    }        
  `
}

export const UPDATE_FEATURED_PRODUCT = {
  query: `
    mutation ($id: ID!, $productId: Int!) {
      featuredProductUpdate(input: {id: $id, productId: $productId}) {
        featuredProduct {
          id
        }
      }
    }        
  `
}

export const ADD_NEW_USER = {
  query: `
    mutation ($first_name: String!, $middle_name: String!, $last_name: String!, $gender: String!, $email: String!, $admin: Boolean!, $address1: String!, $address2: String!, $city: String!, $state: String!, $country: String!, $zipcode: String!, $phone_number: String!) {
      userCreate(input: {firstName: $first_name, middleName: $middle_name, lastName: $last_name, gender: $gender, email: $email, admin: $admin, address1: $address1, address2: $address2, city: $city, state: $state, country: $country, zipcode: $zipcode, phoneNumber: $phone_number}) {
        user {
          id
          firstName
          middleName
          lastName
          gender
          email
          admin
          address1
          address2
          city
          state
          country
          zipcode
          phoneNumber
        }
      }
    }
  `
}

export const DELETE_FEATURED_PRODUCT = {
  query: `
    mutation ($id: ID!) {
      featuredProductDelete(input: {id: $id}) {
        featuredProduct {
          id
        }
      }
    }    
  `
}

export const UPDATE_USER = {
  query: `
    mutation ($id: ID!, $first_name: String!, $middle_name: String!, $last_name: String!, $gender: String!, $email: String!, $admin: Boolean!, $address1: String!, $address2: String!, $city: String!, $state: String!, $country: String!, $zipcode: String!, $phone_number: String!) {
      userUpdate(input: {id: $id, firstName: $first_name, middleName: $middle_name, lastName: $last_name, gender: $gender, email: $email, admin: $admin, address1: $address1, address2: $address2, city: $city, state: $state, country: $country, zipcode: $zipcode, phoneNumber: $phone_number}) {
        user {
          id
        }
      }
    }
  `
}
