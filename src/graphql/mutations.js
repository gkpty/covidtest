/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPatient = /* GraphQL */ `
  mutation CreatePatient(
    $input: CreatePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    createPatient(input: $input, condition: $condition) {
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
export const updatePatient = /* GraphQL */ `
  mutation UpdatePatient(
    $input: UpdatePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    updatePatient(input: $input, condition: $condition) {
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
export const deletePatient = /* GraphQL */ `
  mutation DeletePatient(
    $input: DeletePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    deletePatient(input: $input, condition: $condition) {
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
export const createCase = /* GraphQL */ `
  mutation CreateCase(
    $input: CreateCaseInput!
    $condition: ModelCaseConditionInput
  ) {
    createCase(input: $input, condition: $condition) {
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
export const updateCase = /* GraphQL */ `
  mutation UpdateCase(
    $input: UpdateCaseInput!
    $condition: ModelCaseConditionInput
  ) {
    updateCase(input: $input, condition: $condition) {
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
export const deleteCase = /* GraphQL */ `
  mutation DeleteCase(
    $input: DeleteCaseInput!
    $condition: ModelCaseConditionInput
  ) {
    deleteCase(input: $input, condition: $condition) {
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
export const createTest = /* GraphQL */ `
  mutation CreateTest(
    $input: CreateTestInput!
    $condition: ModelTestConditionInput
  ) {
    createTest(input: $input, condition: $condition) {
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
export const updateTest = /* GraphQL */ `
  mutation UpdateTest(
    $input: UpdateTestInput!
    $condition: ModelTestConditionInput
  ) {
    updateTest(input: $input, condition: $condition) {
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
export const deleteTest = /* GraphQL */ `
  mutation DeleteTest(
    $input: DeleteTestInput!
    $condition: ModelTestConditionInput
  ) {
    deleteTest(input: $input, condition: $condition) {
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
export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
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
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
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
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
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
