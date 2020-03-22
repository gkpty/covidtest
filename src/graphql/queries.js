/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPatient = /* GraphQL */ `
  query GetPatient($id: ID!) {
    getPatient(id: $id) {
      id
      document_type
      document_number
      name
      age
      coordinates {
        lat
        lon
      }
      cases {
        items {
          id
          title
          createdAt
          updatedAt
        }
        nextToken
      }
      locations {
        items {
          id
          platform
          createdAt
        }
        nextToken
      }
    }
  }
`;
export const listPatients = /* GraphQL */ `
  query ListPatients(
    $filter: ModelPatientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPatients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        document_type
        document_number
        name
        age
        coordinates {
          lat
          lon
        }
        cases {
          nextToken
        }
        locations {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getCase = /* GraphQL */ `
  query GetCase($id: ID!) {
    getCase(id: $id) {
      id
      title
      patient {
        id
        document_type
        document_number
        name
        age
        coordinates {
          lat
          lon
        }
        cases {
          nextToken
        }
        locations {
          nextToken
        }
      }
      tests {
        items {
          id
          type
          result
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCases = /* GraphQL */ `
  query ListCases(
    $filter: ModelCaseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCases(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        patient {
          id
          document_type
          document_number
          name
          age
        }
        tests {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTest = /* GraphQL */ `
  query GetTest($id: ID!) {
    getTest(id: $id) {
      id
      type
      result
      case {
        id
        title
        patient {
          id
          document_type
          document_number
          name
          age
        }
        tests {
          nextToken
        }
        createdAt
        updatedAt
      }
    }
  }
`;
export const listTests = /* GraphQL */ `
  query ListTests(
    $filter: ModelTestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        result
        case {
          id
          title
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
      id
      platform
      coordinates {
        lat
        lon
      }
      patient {
        id
        document_type
        document_number
        name
        age
        coordinates {
          lat
          lon
        }
        cases {
          nextToken
        }
        locations {
          nextToken
        }
      }
      createdAt
    }
  }
`;
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        platform
        coordinates {
          lat
          lon
        }
        patient {
          id
          document_type
          document_number
          name
          age
        }
        createdAt
      }
      nextToken
    }
  }
`;
