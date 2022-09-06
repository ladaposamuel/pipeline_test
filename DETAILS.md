# How does it work
The implementation is based on ExpressJS framework including Babel plugin to compile javascript.

## File structure
```
├── DETAILS.md
├── LICENSE
├── README.md
├── package.json
├── properties.json
├── src
│   ├── controllers
│   │   └── dobController.js
│   ├── index.js
│   ├── routes
│   │   ├── api
│   │   │   └── dob.js
│   │   └── index.js
│   └── utils
│       ├── messages.js
│       └── response.js
└── yarn.lock
```

Starting from the `index.js` where the Expressjs `app` is initialized, from there we extend other features to other files and folders for easy and well arannged folder structure.

All the other required files are in the `src` folder, `controllers`, `route` and `utililites`.

```
index.js -> routes -> index.js -> api/dob.js -> controllers/dobController.js (utils/messages|response)
```
