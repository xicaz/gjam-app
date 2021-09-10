# Project Overview

## GJAM Jam

## Project Description

This is a jam selling website that when users log in they can view, customize and edit jams. Jams are stored in a database so that users can see products created by other users. If a user is not signed in, they will not be able to edit or customize a jam.

## Wireframes

![Wireframe for Site](https://res.cloudinary.com/dyfvqwppd/image/upload/v1631298603/p3/gjam-whimsical_rrzxlc.png)

## Component Hierarchy

![Component Hierarchy](https://res.cloudinary.com/dyfvqwppd/image/upload/v1631298578/p3/gjam-component-hierarchy_zkiwcv.png)

## API and Data Sample

## Schema

#### Jam(Product) Schema

```
const Jam = new Schema(
  {
    name: { type: String, required: true },
    sweetness: { type: String, required: true },
    spiciness: { type: String, required: true },
    imgURL: { type: String, required: true },
    description: { type: String, required: true },
    creator: {type: String, required true},
    price: { type: String, required: true },
    ingredients: [{ type: String, required: true }]
  },
  { timestamps: true }
)
```

#### User Schema

```
const User = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password_digest: { type: String, required: true, select: false },
  },
  { timestamps: true }
```

### MVP/PostMVP

#### MVP

- Team Expectations Google document.
- Filled out README.md.
- Component Hierarchy
- Assign and discuss team roles as well as strengths and any areas where a teammate wishes to improve
- Have a working, interactive React app.
- Have at least 6 separate, rendered components stored within an organized folder/file structure.
- Utilize functional and class React components appropriately.
- Use only React for DOM Manipulation.
- Consume data from your API, and render that data in your components.
- Utilize React Router, for client-side routing.
- Authentication!
- Home Screen
- Listing Screen
- Detail Screen
- Have working generic controller actions for full-CRUD using Express, Mongoose, and MongoDB.
- CSS styling.
- Use flexbox and/or CSS Grid.
- Implement responsive design on 2 screen sizes (desktop and mobile)
- Deploy the fully functional front-end via Netlify.
- Deploy the back-end via Heroku.
- Deploy the MongoDB database on MongoDB Atlas.

#### PostMVP

- Implement a shopping cart so users can store items for one purchase

## Project Schedule

| Day    | Deliverable                                                                                           | Status   |
| ------ | ----------------------------------------------------------------------------------------------------- | -------- |
| Sep 9  | WireFrame, Project Approval                                                                           | Complete |
| Sep 10 | Component Hierarchy, Github Setup, Team Expectations Doc, Start Coding, Backend, initialize react app |          |
| Sep 12 | Backend, meet for an hour                                                                             |          |
| Sep 13 | Aim for functionality by end of day                                                                   |          |
| Sep 14 | MVP                                                                                                   |
| Sep 15 | Responsiveness and extra styling                                                                      |          |
| Sep 16 | Polishing, Post MVP                                                                                   |          |
| Sep 17 | Project Presentations                                                                                 |          |

## Team Expectations

[Team expectations](https://docs.google.com/document/d/14oVUIscUusLaHkfb1EMABAU5zR2UN-phRX395Y1lUj8/edit?usp=sharing)
