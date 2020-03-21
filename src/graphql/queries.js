/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPatient = /* GraphQL */ `
  query GetPatient($document_id: ID!) {
    getPatient(document_id: $document_id) {
      document_type
      document_id
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
          type
        }
        nextToken
      }
    }
  }
`;
export const listPatients = /* GraphQL */ `
  query ListPatients(
    $document_id: ID
    $filter: ModelPatientFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPatients(
      document_id: $document_id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        document_type
        document_id
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
        document_type
        document_id
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
          document_type
          document_id
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
      result
      case {
        id
        title
        patient {
          document_type
          document_id
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
      type
      coordinates {
        lat
        lon
      }
      patient {
        document_type
        document_id
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
        type
        coordinates {
          lat
          lon
        }
        patient {
          document_type
          document_id
          name
          age
        }
      }
      nextToken
    }
  }
`;
