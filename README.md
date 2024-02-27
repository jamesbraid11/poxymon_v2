# Poxymon

## Description

My final project from my SEI training is a full stack application with a Python Django back end serving data from my own Postgres database. The front end consuming the API is built with React. Keen to demonstrate my fun and creative side, the application is a monster creation platform with a view to building in battling functionality in the future. Users have full CRUD capability on the poxymon model when registered and logged in.

## Deployment link

[https://poxymon-6ef2721d90ac.herokuapp.com/](https://poxymon-6ef2721d90ac.herokuapp.com/)

## Code Installation

1. [GitHub Repo](https://github.com/jamesbraid11/poxymon_v2) >>
2. Download directory >>
3. Server side:
   i. npm install in root directory
   ii. npm run serve
4. Client side (cd to client directory):
   i. npm install
   ii. npm run dev
5. Open local host in local browser

## Timeframe & Working Team

This was a solo project that we had nine days to complete.

## Technologies Used

- VS Code
- GitHub
- Insomnia
- Cloudinary
- Node.js
- Neon
- Django
- Pipenv
- Psycopg2-binary
- Django REST Framework
- Django-environ
- React
- React Router
- JSON Web Token
- Axios
- Sass
- Bootstrap
- React Bootstrap

## Brief

**Technical Requirements**
- Build a full-stack application by making your own backend and your own frontend.
- Use a Python Django API using Django REST Framework to serve your data from a Postgres database.
- Consume your API with a separate frontend built with React.
- Be a complete product which most likely means multiple relationships and CRUD functionality for at least a couple of models.
- Implement thoughtful user stories/wireframes that are significant enough to help you know which features are core MVP.
- Have a visually impressive design.
- Be deployed online so it's publicly accessible.

**Necessary Deliverables**
- A working app hosted on the internet.
- A link to your hosted working app in the URL section of your Github repo.
- A git repository hosted on Github, with a link to your hosted project, and frequent commits dating back to the very beginning of the project.
- A readme.md file.

## Planning

After deciding on the idea for my application, I created a diagram of the main components needed on the client side. I then assigned names for the components, their paths and their loaders or actions (where applicable) to be used in the code.

<img width="1195" alt="1-front-end-diagram" src="https://github.com/jamesbraid11/poxymon_v2/assets/147768485/1e149578-db58-4fe2-b8fc-222948c7ded9">

From here I was able to visualise the models needed on the backend and the relationships between them.

<img width="1138" alt="2-erd" src="https://github.com/jamesbraid11/poxymon_v2/assets/147768485/8dc6e349-e930-49b0-a8a2-24b9b39254bd">

Next, I created wireframe designs for the main client side components. Below is an example, the wireframe for the home component:

<img width="1280" alt="3-wireframe" src="https://github.com/jamesbraid11/poxymon_v2/assets/147768485/5e040b0d-d741-47db-a176-4b0c0175bdfe">

Lastly, I created a Trello board to organise my daily sprints and to ensure the MVP would be prioritised.

<img width="1844" alt="4-trello" src="https://github.com/jamesbraid11/poxymon_v2/assets/147768485/0d6ebb20-ce19-4bb4-ac15-511d86e7e3d3">

## Code Process

After setting up a new project and installing Django and other packages I would need, I entered the pipenv shell and installed the project app. I connected the project to a Neon database in settings.py, then encoded the database information and secret key into a .env file for security. Next, I created the poxymon app and began working on the model. I initially added foreign key fields as CharField to allow for testing. I imported min and max value validators for positive integer fields that would be battling stats for created poxymon. This was to ensure that the battling platform in the future would be competitive and fair. I also planned to add a combined maximum for all positive integer fields on the client side later.

![5-min-validator](https://github.com/jamesbraid11/poxymon_v2/assets/147768485/c46f1235-1e34-42c8-a48a-dc8ceec2be90)
![6-max-validator](https://github.com/jamesbraid11/poxymon_v2/assets/147768485/43e70c41-3e57-44f8-b80d-6171091cc41c)

I created a common serializer for the poxymon model, which I then referenced in the first get and post view.

![7-list-create-view](https://github.com/jamesbraid11/poxymon_v2/assets/147768485/d2fbb556-47c6-45ee-89f2-2bd986c5a044)

I then set up paths in urls.py in the project and poxymon app folders to connect them. I tested and added poxymon to the database using Insomnia.

Once happy with this, I installed a user app. I followed the same process of creating a model, serializer, view and url paths. A lot of important code was needed in the serializer. Firstly, I added an extra field named password_confirmation for user registration, and ensured to make that field and the password field write only for security.

![8-user-model](https://github.com/jamesbraid11/poxymon_v2/assets/147768485/6a67b0c4-fada-47dd-bcd1-b9a4c095d492)

Again for security, I ensured that the password_confirmation field would be removed from the data object after validation, and that the password would be hashed upon user creation.

![9-user-validation](https://github.com/jamesbraid11/poxymon_v2/assets/147768485/eabdc3bd-a938-4e09-91bd-cad1aaf393f4)
![10-hash-password](https://github.com/jamesbraid11/poxymon_v2/assets/147768485/ebda3d9a-ba85-4336-8544-80320761e7cf)

Next, I created a poxymon list user serializer and a new populated poxymon list serializer to automatically populate a poxymon record with the creator field containing the creating user’s id and username.

![11-populated-serializer](https://github.com/jamesbraid11/poxymon_v2/assets/147768485/497248e0-0530-4990-8902-e32c30f0258e)
![12-populated-serializer](https://github.com/jamesbraid11/poxymon_v2/assets/147768485/70c44144-ea85-41b2-a3b4-0d70f0e68533)

Editing the creator field was the final step in achieving this, linking it as a foreign key to the user model.

![13-foreign-key](https://github.com/jamesbraid11/poxymon_v2/assets/147768485/8d602a31-d22f-47d9-ae79-75d1cc9d86a6)

After testing registration and login in Insomnia, I could now add a put, patch and delete view to the poxymon app, ensuring to add the url path. I added permission restrictions to all poxymon model views where necessary, and ensured the correct serializer would be returned based on the request type.

![14-views-with-permissions](https://github.com/jamesbraid11/poxymon_v2/assets/147768485/159c47a5-d8e1-438c-9235-156aa6775be4)

While here, I created a view for user likes to be able to build in that functionality for users on the client side in the future. I overrode the patch method from the generic UpdateAPIView so that a user would be able to toggle likes on and off.

![15-likes-toggle](https://github.com/jamesbraid11/poxymon_v2/assets/147768485/866829aa-cbe3-4c1d-98a3-d305897b5c92)

Next, I created apps for poxymon types and reviews. I followed the same process again creating models, serializers, views and paths. I then updated the poxymon model, changing all necessary related fields to foreign keys, and I updated the populated poxymon list serializer to connect those fields.

![16-populated-serializer](https://github.com/jamesbraid11/poxymon_v2/assets/147768485/152f0d03-d45f-4211-8e86-b6f84ffd052b)

After a final test of all routes in Insomnia, I began adding records to the database in Django Admin. Once created, I dumped the data into seed files in their respective app folders to protect it.  With the backend now complete, I could turn to the frontend.

I created a folder named client, then set it up with necessary React JavaScript front end files using Vite. I set up React Router in main.jsx and coded App.jsx to contain Nav, Outlet and Footer components, where Outlet would interchange based on users’ navigation. I also added a loading gif to the Outlet component to display when not idle.

![17-loading-gif](https://github.com/jamesbraid11/poxymon_v2/assets/147768485/8b92153b-4581-40fe-a9dd-a6b28c767a06)

After stubbing up all other main components and testing their paths, I began work on the Nav component. I added the poxymon logo I had created, as well as user and menu React icons. I coded modals that would display and hide on clicks from a user. The menu icon displays a modal with which you can navigate to different components on the application. The user icon displays initially a login modal, from which you can toggle to and from a register modal. I created functions that would enable a user to login or register from these modals, see below examples for registration.

![18-register-usestate](https://github.com/jamesbraid11/poxymon_v2/assets/147768485/46538297-508b-4605-9d9c-29fbacb4e2dd)
![19-register-function](https://github.com/jamesbraid11/poxymon_v2/assets/147768485/9b527dd5-2968-4c3b-a5a2-37c91e9bd8ea)
![20-register-function](https://github.com/jamesbraid11/poxymon_v2/assets/147768485/0a5f73e9-c07b-48ea-8806-e1aaef55e2a8)

I then created functions for setting, getting and removing JSON Web Tokens to/from local storage. After testing the login and register functionality, I created the Footer component. Here I added icons and links to my GitHub page and social sites.

On the Home component, I set it up as shown in the planning wireframe, with the poxymon logo and about blurb on the left and a button and poxymon ‘card’ on the right. I used intricate JSX markup and flexbox to create an exciting design for the card. I then created functions to serve get requests for the poxymon model and loaded it into the Home component to fill the card with relevant data. I gave the type field and move type fields ids of poxymon.type.name and created styling in Sass for each type name so that each would display in a different colour. I also gave the parent div of the card the classname of poxymon.type.name and created styling in Sass in the same way so that the background of each card would be a lightened version of a poxymon’s type colour using a linear-gradient.

![21-poxymon-home-screen](https://github.com/jamesbraid11/poxymon_v2/assets/147768485/120a0583-f9c5-4529-963f-f493fe3d71e1)

I then wrote code that would select a random poxymon to display from the database upon clicking the button above the poxymon card. I wanted users to be drawn in immediately on the home page by showing records from the model.

![22-random-selector](https://github.com/jamesbraid11/poxymon_v2/assets/147768485/3ddcc008-85a3-4203-86f9-9e0b6f96e5c0)

On the Poxymon component, I used the same loader of the poxymon model to display all poxymon. I used the same card set up as on the Home component, displaying them using a React Bootstrap Container. I then added a dropdown that filters by type and a search bar that filters by name. I wrote code that enabled these filters to be handled simultaneously by one function as shown below:

![23-filters-function](https://github.com/jamesbraid11/poxymon_v2/assets/147768485/daea164b-192f-44b3-bcf7-44dadc7e1040)

![24-poxymon-list-screen](https://github.com/jamesbraid11/poxymon_v2/assets/147768485/49e7bc08-7646-47ad-8c58-037480c4334a)

Next, I created the PoxymonSingle component. I created a new function and loader for it that would only return the record of a single poxymon. I changed the styling from the poxymon card structure used so far to make the component feel more unique. I also included all data fields so that the creator and poxymon description would be visible.

![25-poxymon-single-screen](https://github.com/jamesbraid11/poxymon_v2/assets/147768485/37094a74-3c14-48af-9c13-cd2d64ecf45f)

From there, I moved on to the PoxymonCreate component. After creating a form with all necessary fields, I began setting up an ImageUploadField component linked to Cloudinary to store images. I made this secure by exporting Cloudinary account data to a .env file.

![26-image-upload-field](https://github.com/jamesbraid11/poxymon_v2/assets/147768485/e2feadfa-1919-4ca3-a0eb-ca2916d210a4)

After completing this, I added one last element to the form that would track the combined total of stats input by a user. If the total surpasses 500, the create button to submit the form disappears from the page. I have since learned that you could check for this on the server side, which I will aim to change to in the future, reporting a useful message back to the user.

![27-poxymon-cretae-screen](https://github.com/jamesbraid11/poxymon_v2/assets/147768485/33763aeb-5b78-46c1-a8eb-c4504a8485f0)

I set up the PoxymonUpdate component to look identical to this, but added a loader of the single poxymon requested by a user so that fields are populated with current data. I also added a delete button.

To make the last two mentioned components work, I created action functions for creating, updating and deleting a poxymon and tested them. I was able to code the updating or deleting of a poxymon into one action function by adding ‘intent’ and a value as a key value pair in the submitted form data as shown below:

![28-update-or-delete](https://github.com/jamesbraid11/poxymon_v2/assets/147768485/7f715c5f-bfa6-4730-bf81-11f801255228)
![29-update-or-delete](https://github.com/jamesbraid11/poxymon_v2/assets/147768485/e375a35a-faeb-4ded-bc0b-1fbcd62f04b6)

Finally, I thoroughly tested the application in terms of full CRUD capability for users on the poxymon model with permissions and authentication. I am happy to report that it is all working as expected.

## Challenges

A challenge for me in this project was definitely creating a detailed poxymon ‘card’. I felt confident in my flexbox and JSX knowledge, but had never created something this intricate before, and I wanted to ensure each poxymon’s card had styling unique to its type. I am very proud of the final product, and I think it will draw users in to explore the application further after seeing it on the homepage.

## Wins

I feel that I have thought a lot about the user experience in this application. An example of this is the points tracker added to the create and update poxymon forms to help users easily adhere to the positive integer field constraints. Also, adding these constraints in the first instance will make for a much more competitive and interesting experience for users when battle functionality is added.

Around styling, I improved my knowledge of image creation using AI programmes. I feel that using original images for the poxymon makes the application look more professional. I used another programme to remove the backgrounds of the images I created. This makes them look great on the PoxymonSingle component, and they will look appropriate in a battle animation that I am hoping to create on the app in the future.

## Key Learnings

Over the course of this project, I became very confident with:
- Creating models in Django and adding attributes to fields.
- Subclassing serializers and tailoring them to my needs.
- Using generic views but also overriding functions when needed.
- Creating/handling JWTs in Django.
- Creating secure registration and login routes in Django.

New learnings I achieved while building this project include:
- Creating a thorough ERD.
- Uploading and accessing images securely through Cloudinary.
- Creating original images/logos for an application.
- Using linear-gradient to mix colours in Sass.

## Bugs

No known bugs.

## Future Improvements

I would like to add the following to this application in the future:
- Burger menu modal appears on the right side of the screen.
- Logged in users are able to leave reviews on the PoxymonSingle component (already set on the backend).
- Profile component where users can change their details and upload an image. It would also show their created poxymon and all time battle wins.
- Media queries for all screen sizes and mobiles.
- Tailored user error messages throughout.
- Battle component where users can track current battle requests/invites and select users to request a battle with.
- Battle Team component where users select two pokemon for their battle request.
- Battle Ground component where an automated turn based battle occurs once an invited user accepts a battle request.
