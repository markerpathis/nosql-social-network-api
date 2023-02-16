# nosql-social-network-api

[![License](https://img.shields.io/badge/License-MIT_License-blue.svg)](https://mit-license.org/)

## Description

The objective of this project was to create an api for a social network application. Using the API we're able to save data related to Users, Thoughts (Posts), and Reactions (Comments) to Mongo DB.

Below is a list of the routes that are available to be used:

User Routes

- Post user
- Post new friend to existing user
- Get all users
- Get a single user
- Update single user
- Delete friend from a user
- Delete a single user (also deletes associated Thoughts)

Thought Routes

- Post thought from an existing user
- Get all thoughts
- Get single thought
- Update single thought
- Delete thought (also updates associated User)

Reaction Routes

- Post reaction to a thought
- Delete reaction

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

In order to use this application the user needs to install the Node dependencies with npm, by running the following command in their command-line - “npm install”. Dependencies include:

- express
- mongoose

User should also have MongoDB installed.

## Usage

Below is a link to the repository on GitHub:

- https://github.com/markerpathis/nosql-social-network-api

Below is a walkthrough video:

## License

This project is licensed under the terms of the MIT License. The license badge at the top of this README includes a link to the description of the license.

## Contributing

N/A

## Tests

N/A

## Questions

If you have any questions about this project, please reach out via email. <br />
Email: parkerjmathis@gmail.com
<br />
GitHub: (https://github.com/markerpathis)
