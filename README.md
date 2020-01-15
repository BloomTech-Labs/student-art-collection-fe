# Student ArtCo

You can find the deployed project at [Student ArtCo](https://studentartco.netlify.com/).

## Contributors

|                                       [Ami Scott](https://github.com/Memitaru)                                        |                                       [dAVE Inden](https://github.com/daveskull81)                                        |                                       [Jason Loomis](https://github.com/jrloom)                                        |
| :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | 
|                      [<img src="https://avatars1.githubusercontent.com/u/43873460?s=460&v=4" width = "200" />](https://github.com/Memitaru)                       |                      [<img src="https://avatars1.githubusercontent.com/u/3360264?s=460&v=4" width = "200" />](https://github.com/daveskull81)                       |                      [<img src="https://media.licdn.com/dms/image/C4E03AQGlvn65v10N_A/profile-displayphoto-shrink_200_200/0?e=1582156800&v=beta&t=yg9kB-YWn0tG2MsDu_f3af626N4hIKf6uUeBCanmzAk" width = "200" />](https://github.com/jrloom)                       |
|                 [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Memitaru)                 |            [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/daveskull81)             |           [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Mister-Corn)            |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/ami-scott/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/davidinden/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](www.linkedin.com/in/jason-r-loomis) |


|                                       [Ian Schwartz](https://github.com/ian-schwartz)                                        |                                       [Grissobel Payonk](https://github.com/gspayonk)                                        |                                       [Mackenzie Weber](https://github.com/MWeberLambdaweb19)                                        |
| :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: |
|                      [<img src="https://avatars1.githubusercontent.com/u/53659667?s=460&v=4" width = "200" />](https://github.com/ian-schwartz)                       |                      [<img src="https://www.dalesjewelers.com/wp-content/uploads/2018/10/placeholder-silhouette-female.png" width = "200" />](https://github.com/gspayonk)                       |                      [<img src="https://avatars0.githubusercontent.com/u/48688377?s=460&v=4" width = "200" />](https://github.com/MWeberLambdaweb19)                       |
|                 [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/ian-schwartz)                 |            [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/gspayonk)             |           [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/MWeberLambdaweb19)            |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/ian-schwartz-277bb857/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/gspayonk/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/mackenzie-weber-a1906a186/) |


<br>
<br>

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/react-v16.7.0--alpha.2-blue.svg)
[![Netlify Status](https://api.netlify.com/api/v1/badges/b5c4db1c-b10d-42c3-b157-3746edd9e81d/deploy-status)](https://studentartco.netlify.com/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Project Overview

[Trello Board](https://trello.com/b/mOvtOPY4/labs-19-student-art-collection)

[Product Canvas](https://www.notion.so/Student-Art-Collection-Labs-19-d3b6e9472d72453f9b21b8604c94bb97)

[UX Design files](https://www.figma.com/file/KXwyQsMXcwXTqZNQT7bKuW/Student-Art-Collection-Imani-Russ?node-id=122%3A2)

Student ArtCo is an application to help schools raise money to fund their art programs by offering student art in exchange for donations. Many art students have said their finished projects end up in the garbage or collecting dust. With our app schools or art teachers can accept art donations from students and list them for sale. Family, members of the community, and art lovers can browse the art listings and connect with the school to make a donation and collect the art.

### Key Features

-    Schools can create accounts and list art created by students for sale.
-    Buyers can browse art and find pieces they like and then contact the school to make a purchase.

## Tech Stack

### Front end built using:

#### React

-    State management is helpful in creating the user interface and interactions we are looking for.
-    Lots of great packages to do things effeciently.

#### Front end deployed to Netlify

#### [Back end](https://github.com/Lambda-School-Labs/student-art-collection-be) built using:

#### Node and PostgreSQL

-    Relational database structure will make for a clean and effecient database and schema that makes sense.

#### GraphQL

-    Allows us to get just the data we need.
-    Requests are easy to make for web, iOS, and Android so they can all get the info they would like for their needs.

# APIs

## Firebase Authentication

Firebase Authentication allows for us to have secure access to our application by our users. The users all get unique identifiers set for them that we can connect to their data in our database.

## Stripe

Industry standart for payments. Safe and secure, easy to set up, will allow customers to purchase art work easily.

## Cloudinary

Media management API will be used to upload images of the artwork

# Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

    * REACT_APP_FIREBASE_API_KEY - Info found from Firebase App Config for your Firebase project
    * REACT_APP_FIREBASE_AUTH_DOMAIN - Info found from Firebase App Config for your Firebase project
    * REACT_APP_FIREBASE_DATABASE_URL - Info found from Firebase App Config for your Firebase project
    * REACT_APP_FIREBASE_PROJECT_ID - Info found from Firebase App Config for your Firebase project
    * REACT_APP_FIREBASE_STORAGE_BUCKET - Info found from Firebase App Config for your Firebase project
    * REACT_APP_FIREBASE_MESSAGING_SENDER_ID - Info found from Firebase App Config for your Firebase project
    * REACT_APP_FIREBASE_APP_ID - Info found from Firebase App Config for your Firebase project
    * REACT_APP_FIREBASE_MEASUREMENT_ID - Info found from Firebase App Config for your Firebase project
    * REACT_APP_UPLOAD_PRESET - Unique value assigned by Cloudinary
    * REACT_APP_CLOUD_NAME - Cloud name found in Cloudinary account

# Content Licenses

For all content - images, icons, etc, use this table to document permission of use. Remove the two placeholders and add you content to this table

| Image Filename | Source / Creator | License                                                                      |
| -------------- | ---------------- | ---------------------------------------------------------------------------- |
| doodles.png    | Nicole Bennett   | [Creative Commons](https://www.toptal.com/designers/subtlepatterns/doodles/) |
| rings.svg      | Sam Herbert      | [MIT](https://github.com/SamHerbert/SVG-Loaders)                             |

# Testing

Front end testing done with React Testing Libarary. Backend testing was done with Jest.

# Installation Instructions

In the project folder run `yarn` or `npm i` to get dependencies.

## Other Scripts

    build - creates a build of the application
    start - starts the production server after a build is created
    test - runs frontend tests
    eject - copy the configuration files and dependencies into the project so you have full control over them

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request
   
 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**
 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Backend Documentation](https://github.com/Lambda-School-Labs/student-art-collection-be) for details on the backend of our project.
