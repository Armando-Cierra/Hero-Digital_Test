# Hero Digital Test

<div>
  <img src="./public/hero-header.png" style="width: 100%; border-radius: 12px" />
  <br/>
</div>

### Project Description

This was a test I did for the company Hero Digital following the brief below.

**Year:** 2022

---

### Figma Prototypes Links

[Desktop](https://www.figma.com/proto/X5e9USJ3ikairh6MTN4XGs/Hero-Digital-Test?node-id=51%3A1874)

[Mobile](https://www.figma.com/proto/X5e9USJ3ikairh6MTN4XGs/Hero-Digital-Test?node-id=6%3A367)

---

### Technolgy Used

- [Figma](https://www.figma.com/design/)
- [ReactJS](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Redux](https://redux.js.org/)
- [EsLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Axios](https://axios-http.com/)
- [React Responsive](https://www.npmjs.com/package/react-responsive)
- [Swiper](https://swiperjs.com/)
- [React Helmet](https://www.npmjs.com/package/react-helmet)

---

# Brief

### Overview

Please create a responsive web page that displays a card-based grid based on the requirements below. We have provided mockups to assist in styling, please follow them as closely as possible, as this assignment tests for visual fidelity.

---

### Requirements

- Filter Grid Component: 3 columns for desktop, 2 for mobile.
- Content cards flip on hover for desktop, flip on tap for mobile. 3D CSS transform.
- Filters are compounding, if Tag #1 & Tag #2 are selected, only show cards with both tags. If no - filters are selected, show all cards.
- Filters distribute as shown below, and become a dropdown on mobile.
- All cards must be uniform in height, and support any amount of content. Note the text truncation in - the mockup below.
- Filters are buttons on desktop, dropdown on mobile
- Parse this [JSON file](https://s3-us-west-1.amazonaws.com/hero-engineering-public/interview/fe-code-challenge.json) to populate your content
- Utilize React as your framework
- Use SASS for your style system following the [BEM methodology](http://getbem.com/introduction/)
- Data Card vars:
  - String: ID
  - Array: Tags
  - String: Title
  - String: Image URL
  - String: Description
  - Boolean: featured

#### Sample Data

```json
{
  "id": "Nerium",
  "tags": ["CMS Selection", "Experience Design"],
  "image": "http://herodigi....jpg",
  "title": "Nerium: Reimagining the digital CX for Nerium International",
  "description": "As Nerium Internation....",
  "featured": 0
}
```

When we open the repo for review, we should be able to do the following (from project root):

- Run `npm install` to install dependencies
- Run `npm start` to view the web page locally (with the mock API endpoint returning a mock success response)

---

### Mockups

The `/designs` folder contains all the mockups you need to complete the assignment. There's a mockup for the `Data Card Component`, one for `Filter Grid Component Desktop` and a corresponding one for `Filter Grid Component Mobile`.

---

### Evaluation Criteria

- **JavaScript** best practices
- **React** as your Frontend Framework
- Show us your work through your commit history
- We're looking for you to produce working code, with enough room to demonstrate how to structure components in a small program
- Completeness: did you complete the features?
- Correctness: does the functionality act in sensible, thought-out ways?
- Maintainability: is it written in a clean, maintainable way?
- Ease of use: Can we run `npm build && npm start` to run the whole thing?

---

### Deliverables

Make sure to include all source code in the repository.

Please organize, design, test and document your code as if it were going into production - then push your changes to the master branch. After you have pushed your code, you may submit the assignment on the assignment page.

All the best and happy coding,

The Hero Digital Team
