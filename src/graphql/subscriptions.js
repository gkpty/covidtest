/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePatient = /* GraphQL */ `
  subscription OnCreatePatient {
    onCreatePatient {
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
export const onUpdatePatient = /* GraphQL */ `
  subscription OnUpdatePatient {
    onUpdatePatient {
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
export const onDeletePatient = /* GraphQL */ `
  subscription OnDeletePatient {
    onDeletePatient {
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
export const onCreateCase = /* GraphQL */ `
  subscription OnCreateCase {
    onCreateCase {
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
export const onUpdateCase = /* GraphQL */ `
  subscription OnUpdateCase {
    onUpdateCase {
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
export const onDeleteCase = /* GraphQL */ `
  subscription OnDeleteCase {
    onDeleteCase {
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
export const onCreateTest = /* GraphQL */ `
  subscription OnCreateTest {
    onCreateTest {
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
export const onUpdateTest = /* GraphQL */ `
  subscription OnUpdateTest {
    onUpdateTest {
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
export const onDeleteTest = /* GraphQL */ `
  subscription OnDeleteTest {
    onDeleteTest {
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
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation {
    onCreateLocation {
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
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation {
    onUpdateLocation {
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
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation {
    onDeleteLocation {
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
