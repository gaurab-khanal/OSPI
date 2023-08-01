# OSPI
A simple fullstack MERN app where user can find different opensource programs and learn more about it. Non logged in user can only view the programs and logged in users can add the open source program they are aware of.

# Open Source Prorams and Internships

## Contributing to the project

## Installing Project Locally

### 1. Get the code

- Fork and then clone
  ```bash
  $ git clone https://github.com/YOUR-USERNAME/ospi
  ```
- cd into project using
  ```bash
  $ cd ospi
  ```
## Setting Up Client
- Get into cient
  ```bash
  $ cd client
  ```
- Install dependencies
  ```bash
  $ npm install
  ```
 ### 2. Setup Environment Variable

  - Create .env file at client
  - Copy and paste the below code. Note: Replace values with your own values.
    ```
    REACT_APP_BACKEND = http://localhost:<Backend PORT NUMBER>/api
    ```
 ### 3. Run Project
 ```bash
  $ npm start
  ```

## Setting Up Server
- Get into server
  ```bash
  $ cd ..
  $ cd server
  ```
- Install dependencies
  ```bash
  $ npm install
  ```
  ### 2. Setup Environment Variable

  - Create .env file at server
  - Copy and paste the below code. Note: Replace values with your own values.
    ```
    DATABASES = <Database connection URL>
    PORT = <Port Number>
    SECRET = <Secret Key>
    ```
 ### 3. Run Project
 ```bash
  $ npm start
  ```