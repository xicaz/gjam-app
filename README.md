# Project Overview

## GJAM Jam

## Project Description

## Wireframes

![Wireframe for Site]()

## Component Hierarchy

![Component Hierarchy](gjam-component-hierarchy.png)

## API and Data Sample

## Schema

### Jam Schema

```
const Jam = new Schema(
  {
    name: { type: String, required: true },
    sweetness: { type: String, required: true },
    spiciness: { type: String, required: true },
    imgURL: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true }
    ingredients: [{ type: String  }, required: true]
  },
  { timestamps: true }
)
```

tags: [{
type: String
}]

### User Schema

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

-

#### PostMVP

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

## SWOT Analysis

### Strengths:

### Weaknesses:

### Opportunities:

### Threats:
