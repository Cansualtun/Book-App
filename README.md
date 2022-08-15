# Book App

Book app is an archive application where users can save the books they read and follow their progress.
You can reach project with link --> https://book-app-v1.herokuapp.com/landing

---

## Used Technologies:
  ### Client:
  - React.js
  - React-Router@6 
  - React-Redux-Toolkit
  - Axios
  - Styled Components
  - normalize.css 
  - React-Toastify
  - React-icons 
  - Moment.js
  ---
  ### Server:
  - node.js
  - express.js
  - nodemon
  - dotenv
  - mongoose
  - validator
  - express-async-errors
  - http-status-codes
  - bcryptjs
  - jsonwebtoken
  - concurrently
  - morgan
  - mockaroo
  - helmet
  - xss-clean
  - express-mongo-sanitize
  - express-rate-limit

---

## Installation:

### Before you start
```
- git clone https://github.com/OzanYasin/Books-App.git
- create .env file
- setup values for MONGO_URL, JWT_SECRET, JWT_LIFETIME in .env
- npm install && npm start
```

We created our frontend application and that is our public assets. So, we use express static (in server.js) to serve them as our public assets. 
By doing that, we can use our app on localhost:5000
