# A platform to end a pandemic
## An Open Source platform with mutliple applications to help:
1. **Streamline the testing/treatment process of potential covid19 cases**
2. **produce quality public Data and a heatmap visualization in real time**

## About
*This platform is meant to be deployed and maintained by local governments and/or non-profit organizations that can provision covid19 tests and the mobile administration of these tests.*

In this platform each organization that deploys their own version owns their data. The only data that is intentionally made public by default is the number of tests made, confirmed cases, and approximations of the locations of confirmed covid19 cases. No patient data is shared. 

The personal data of patients is encrypted and only visible to the lab that is administering the test and the local governement in charge.

# The platform
![alt text](/img/covidtest-diagram.png)

**The platform features 3 applications (web and mobile) that interact with a single graphQL API**
1. **The Patient App**: A mobile application built with react native.
2. **The Admin App**: A responsive web application built with react. features authentication with AWS cognito.
3. **The Public App**: A website built with react that features a heatmap of your region and local stats updated in real time.

## Benefits of CovidTest
- **It helps gather the correct data** 
  - Which can then be analyzed with advanced algorithms to make better predictions and gain valuable insights (like better treatments).
- **It facilitates the process for patients** 
  - By allowing them to request a movile test while remaining at home.
- **It streamlines processes for local governments** 
  - By centralizing and securing all the covid19 data. By streamlining the test registration and scheduling process. By providing an altrenative to the use of potentially contageous paper. 
- **It keeps the general population informed in realtime**
  - By providing stats and a heatmap visualization of coronavirus in your region with realtime updates.
- **Its Free and Open Source** 
  - Enables each country to customize their own private versions while still having access to collaborations from an international community 

## Phase 2
It would be nice to help local organizations fighting corona virus recieve crowd funds in the form of:
1. credit card processing (local integrations)
2. paypal integration
3. coinbase commerce integration: crypto currencies (anonymous donations)

# Installation
*This section is meant for Local Governments/ONG's that will be deploying their own version of the application, or for individual developers that want to contribute to the project*

## Requirements
1. node.js and npm
3. AWS account
4. Expo account
2. Install Expo CLI globally
3. Install the AWS Amplify CLI globally

## Installation
1. Fork the parent repo
6. Deploy each app sepparately
   1.  Patient App
      1. cd covidtest_patient
      2. expo publish
   





