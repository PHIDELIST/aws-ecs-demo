## Overview
This project demonstrates deploying ECS services for a backend application and a MySQL database on AWS. The backend is built with Node.js and Express, while the database is managed using MySQL. The infrastructure is provisioned and managed using AWS CloudFormation.
![ecsdemo](https://github.com/user-attachments/assets/6218ef2e-5454-4dd0-b63a-ee1c49b03c53)
### Key Features
- Node.js Backend: The backend application is developed using Node.js and serves HTTP requests via Express.
- MySQL Database: Data is stored and managed using a MySQL database.
- AWS Infrastructure: The infrastructure is provisioned and managed using AWS CloudFormation. Key components include:
  
  + Amazon ECS: For running Docker containers in a scalable and managed environment.
  + AWS VPC: A Virtual Private Cloud setup for network isolation and security.
  + Amazon CloudWatch: For logging and monitoring application and database logs.
  + 
### Deployment Details
- The setup includes a public subnet for the backend service and a private subnet for the MySQL database, ensuring secure and isolated communication.
- NAT Gateway: Used to enable the pulling of the MySQL image from Docker Hub in a secure manner.
- Security Groups: Configured to allow appropriate traffic between the backend and database services.
- Fargate Launch Type: Utilized for serverless container management, reducing the need for managing EC2 instances.

### Getting Started

