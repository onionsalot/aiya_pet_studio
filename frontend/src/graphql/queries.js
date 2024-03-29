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

export const GET_ONE_USER = {
  query: `
    query OneUser($id: ID!) {
      user(id: $id) {
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
        product {
          id
          name
          description
          price
        }
      }
    }
  `,
}

export const GET_ONE_FEATURED_PRODUCT = {
  query: `
    query OneFeaturedProduct($id: ID!) {
      featuredProduct(id: $id) {
        id,
        productId
        createdAt
        updatedAt
      }
    }
  `,
};

export const GET_REVIEWS_FOR_HOMEPAGE = {
  query: `
    query ReviewsForHomepage {
      reviewsForHomepage {
        rating
        review
        image
        reviewer
        product {
          id
          name
        }
      }
    }
  `,
}

export const GET_POPULAR_PRODUCT = {
  query: `
    query PopularProduct {
      popularProduct {
        id
        name
        price
        description
      }
    }
  `,
}

export const GET_SEARCH_PRODUCTS = {
  query: `
    query SearchProducts($searchTerm: String!, $sortBy: String!) {
      searchProducts(searchTerm: $searchTerm, sortBy: $sortBy) {
        id
        name
        description
        price
        quantity
        tags {
          id
          name
        }
      }
    }
  `,
}