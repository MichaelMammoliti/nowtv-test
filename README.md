## This is a test for NowTv.

### Folder structure changes:
- I moved some files in their specific directories as it was confusing browsing files.

### Info
- node version used: `10.2.1`;
- npm version used: `6.4.1`.

### How to
- `npm i` <- this first
- `npm start` to run the server;
- `npm test` to run tests.

### Q&A
- How would you achieve this with Redux?
  I've already implemented redux in this app.

- How would you handle an error from the API?
depends.
  1. `try/catch` block for `async` functions;
  2. `Promise.reject()` if we want to return a rejected promise (in order to use... see point 3);
  3. using `Promise.catch()`.

- If you were to continue this application, what would you add?
  1. more styles
  2. linting with airbnb (I haven't check!)

- If you were to deploy this application (or any web application) to production, how would you personally do it?
  1. I am not an expert here since I've always focused on complex front end components (Bing Maps, dealer locator, etc) and I never had the chance to dive into deployment, but I know the basics here. but..
  2. create a dedicated npm script which builds/compiles everything. This script is going to be run by a CI tool like Jenkins.

- Finally, what did you think of the test? 😀
  1. the test was fairly simple but at the same time a bit challenging. I had to implement some optimisations when I normalised the data set in order to avoid `.find()` for every single message/user.