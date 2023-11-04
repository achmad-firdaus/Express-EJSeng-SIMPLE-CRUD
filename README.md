# Express-EJSeng-SIMPLE-CRUD
Express and EJS as the templating engine (Simple CRUD)

project structure

    - /app
        - /config           (Configuration settings)
            - config.js
        - /middlewares      (Express middlewares)
            - authMiddleware.js
        - /models           (Data models)
            - taskModel.js
        - /public           (Static files)
            - /css
            - /js
        - /routes           (Route handling)
            - indexRoute.js
        - /services         (Business logic and services)
            - taskService.js
        - /utils            (Utility functions)
            - helpers.js
        - /views            (Templates)
            - layout.ejs
            - index.ejs
        - app.js            (Entry point)
        - package.json

Sup your Node.js project

    npm init

Express for the backend and EJS as the templating engine.

    npm install express ejs body-parser

PostgreSql

    npm install pg

Install the dotenv package:

    npm install dotenv

Set Up EJS:

    npm install express-ejs-layouts

Install the 'method-override'

    npm install method-override


Deployment:

Node.js uses a process manager called pm2. pm2 allows running Node.js applications in the background, managing them, and keeping them running even after leaving the server. It also provides features for log management and process monitoring.

    npm install -g pm2
    pm2 start app.js
    pm2 list

    pm2 startup or pm2 save

    pm2 stop app
    pm2 restart app or pm2 resurrect


