# Social Network API
  ![Github licence](http://img.shields.io/badge/license-MIT-blue.svg)

  
  ## Description 
  A REST API for a social network web application where user can share their thoughts, react to friends' thoughts, and create a friends list.

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 
  Clone or fork repo to your local device, install `Node.js` and `MongoDB` if they aren't already, open the repo and run `npm i` in the integrated terminal.

  ## Usage 
  After installation; Run `npm start` in the integrated terminal, Open Insomia and use the calls listed in the tests section below at `localhost:3001`.
  A walkthrough video can be seen here -> [SCREENCASTIFY]()

  ## License 
  This project is license under MIT

  ## Contributing 
  Clone/Fork the repo and/or email me.

  ## Tests

  ### User 
  - Create a new user: `POST /api/users`
  - Get all users: `GET /api/users`
  - Get a single user by id: `GET /api/users/:userId`
  - Update a user by id: `PUT /api/users/:userId`
  - Delete a user by id: `DELETE /api/users/:userId`

  ### Friend
  - Add a new friend to a user's friend list: `POST /api/users/:userId/friends/:friendId`
  - Delete a friend from a user's friend list: `DELETE /api/users/:userId/friends/:friendId`

  ### Thought
  - Create a new thought: `POST /api/thoughts`
  - Get all thoughts: `GET /api/thoughts`
  - Get a single thought by id: `GET /api/thoughts/:thoughtId`
  - Update a thought by id: `PUT /api/thoughts/:thoughtId`
  - Delete a thought by id: `DELETE /api/thoughts/:thoughtId`

  ### Reaction 
  - Create a reaction: `POST /api/thoughts/:thoughtId/reactions`
  - Delete a reaction by id: `DELETE /api/thoughts/:thoughtId/reactions/:reactionId`

  ## Questions
  If you have any questions about this projects, please contact me directly at tyler.rodgers74@gmail.com. You can view more of my projects at https://github.com/TSRodgers.
