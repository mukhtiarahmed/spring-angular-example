#  Spring Security Oauth2, Cassandra, Docker,Angular 8 Example

## Prerequisites:
* Docker
* JDK 1.8 
* Maven 3.*

## Install and run the project 
1. download/clone the project 
2. Run following command from the project root folder and create the docker image for back end api service. 
  * `cd oauth-cassandra/ && mvn clean package && docker build -t oauth-cassandra . && cd ..`
3. Run following command from the project root folder and create the docker image for front end. 
  * `cd client && docker build -t angular-client . && cd ..`
4. Run the docker-compose using the following command   
  * `docker-compose up -d`     
  
5. Open Url [http://localhost:4200/](http://localhost:4200/) in a browser 


6. you can use following user account to login the application.
   * Username = ahmed, password = secret, Role = Super Admin
 
  
