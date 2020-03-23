/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePatient = /* GraphQL */ `
  subscription OnCreatePatient {
    onCreatePatient {
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
export const onUpdatePatient = /* GraphQL */ `
  subscription OnUpdatePatient {
    onUpdatePatient {
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
export const onDeletePatient = /* GraphQL */ `
  subscription OnDeletePatient {
    onDeletePatient {
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
export const onCreateCase = /* GraphQL */ `
  subscription OnCreateCase {
    onCreateCase {
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
export const onUpdateCase = /* GraphQL */ `
  subscription OnUpdateCase {
    onUpdateCase {
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
export const onDeleteCase = /* GraphQL */ `
  subscription OnDeleteCase {
    onDeleteCase {
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
export const onCreateTest = /* GraphQL */ `
  subscription OnCreateTest {
    onCreateTest {
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
export const onUpdateTest = /* GraphQL */ `
  subscription OnUpdateTest {
    onUpdateTest {
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
export const onDeleteTest = /* GraphQL */ `
  subscription OnDeleteTest {
    onDeleteTest {
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
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation {
    onCreateLocation {
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
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation {
    onUpdateLocation {
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
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation {
    onDeleteLocation {
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
