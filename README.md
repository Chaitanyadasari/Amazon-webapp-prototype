# Amazon
Shopping web app prototype
 
   
# Features Implemented
CQRS split- (command query responsibility segregation) and event sourcing to the respective topic.
Redis Master-slave cluster with sentinel to backup and also load-balanced reads.
Distributed multi-broker and multi zookeeper Kafka.
Server powered by Kubernetes, to ensure easy scaling, rolling updates, and rollouts.
Content delivery network(cloud front) for edge locations and route 53 for a latency based routing.
Sequelize ORM for MySQL and mongoose ODM for MongoDB
Transactions for mysql writes.
Code commit pipelines.


### Architecture
![Cloud Distributed Architecture](amazonArchitecture.png)

### Database Architecture
![Data Modeling](amazon%20Schema.png)

### Cloud Native Architecture
The application is designed using cloud native technologies, specifically AWS. The frontend will be served as a static website from an S3 bucket. The authentication and authorization will be via third party social identity providers using AWS Cognito. The stateless NodeJS servers will be running as Docker containers in an AWS ECS cluster. To provide global latency-free access to the application, the website will be served via a CloudFront CDN

### Backend Services
We will be using NodeJs APIs to fetch the values from the DynamoDB database. Since our application will render information on run-time, the non-blocking asynchronous nature of NodeJS will help us get good performance.

### Data Layer
The data will be stored and accessed from a serverless NoSQL database MongoDB and also MYSQL. MongoDB provides document and key-value oriented storage structure which will assist in storing and querying unstructured data.

### Client Side
On the client side, we will make a ReactJS application. We are using ReactJS for the frontend as ReactJS is a light-weight library built over JavaScript, which doesn't re-render the entire DOM on change of components on the browser, rather it just re-renders the changed components. Hence ReactJS would improve application performance.
 
