# Project Overview

## GJAM Jam

##### Casey McClenathan Garrett Foster Jexica Ayran Joshua Ramnanan

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
    creator: {type: String, required: true},
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

- User will be able to sign in, on sign in users will have the ability to create a jam and delete their own. Featured jams will not be able to be changed or deleted.
- If user is not signed in, create link will not be available, instead it will redirect user to sign up page.
- When a user clicks on a jam in the jams page, a modal will pop up of that jam. The ingredients will be listed as well as price and a brief description.
- In order to make it easier for users to search for jams, a search bar has been included that will filter as the user types
- A Sort feature lets the user sort the jams alphabetically(or reverse) and low to high(or high to low)
- The app is password protected by authentication to protect user's personal information

#### PostMVP

- Implement a shopping cart so users can store items for one purchase

## Project Schedule

| Day    | Deliverable                                                                                           | Status   |
| ------ | ----------------------------------------------------------------------------------------------------- | -------- |
| Sep 9  | WireFrame, Project Approval                                                                           | Complete |
| Sep 10 | Component Hierarchy, Github Setup, Team Expectations Doc, Start Coding, Backend, initialize react app | Complete |
| Sep 12 | Backend, meet for an hour                                                                             | Complete |
| Sep 13 | Aim for functionality by end of day                                                                   | Complete |
| Sep 14 | MVP                                                                                                   | Complete |
| Sep 15 | Responsiveness and extra styling                                                                      | Complete |
| Sep 16 | Polishing, Post MVP                                                                                   | Complete |
| Sep 17 | Project Presentations                                                                                 |          |

## Team Expectations

[Team expectations](https://docs.google.com/document/d/14oVUIscUusLaHkfb1EMABAU5zR2UN-phRX395Y1lUj8/edit?usp=sharing)
