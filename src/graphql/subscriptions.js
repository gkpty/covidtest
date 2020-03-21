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
          id
          title
          createdAt
          updatedAt
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
          id
          title
          createdAt
          updatedAt
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
          id
          title
          createdAt
          updatedAt
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
