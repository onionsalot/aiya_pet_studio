export const GET_ALL_PRODUCTS = {
  query: `
    query AllProducts {
      products {
        id
        name
        price
        description
        createdAt
      }
    }
  `,
};

export const GET_ONE_PRODUCT = {
  query: `
    query OneProduct($id: ID!) {
      product(id: $id) {
        id
        name
        price
        description
      }
    }
  `,
};

export const GET_ALL_USERS = {
  query: `
    query AllUsers {
      users {
        id
        email
        fullName
        signInCount
        createdAt
        admin
      }
    }
  `,
};

export const GET_ALL_TAGS = {
  query: `
    query AllTags {
      tags {
        id
        name
        createdAt
      }
    }
  `,
};

export const GET_ONE_TAG = {
  query: `
    query OneTag($id: ID!) {
      tag(id: $id) {
        id
        name
        createdAt
      }
    }
  `,
};

export const GET_ALL_FEATURED_PRODUCTS = {
  query: `
    query AllFeaturedProducts {
      featuredProducts {
        id,
        productId
        createdAt
        updatedAt
      }
    }
  `,
}

export const GET_ONE_FEATURED_PRODUCT = {
  query: `
    query OneFeaturedProducts($id: ID!) {
      featuredProduct(id: $id) {
        id,
        productId
        createdAt
        updatedAt
      }
    }
  `,
};