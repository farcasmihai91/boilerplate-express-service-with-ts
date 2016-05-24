Typescript and Express.js 
=========================

A boilerplate Express.js project implemented using TypeScript:

# Installation

Clone the repository

```
npm install 
typings install
run TypeScript build task from VS Code (included), or create your own.
node index.js
```

Browse to http://localhost:3000



# Start in watch mode

`npm run nodemon`

# Folder structure

    .
    ├── manager                # routes, access points, highly volatile logic.
    ├── engine                 # application logic, actual implementation of the routes.
    ├── resource-access        # manages connection to DB and exposes models.
	index.js                   # main app - configuration only.

# License

MIT - Do with as you like.