## SPA Website

install dependencies
```sh
npm install -d
```

run the server
```sh
npm run serve
```

It should open [http://localhost:8080/](http://localhost:8080/) in your default browser

## Into the code

At `src/index.html` we require `src/js/index.js` and everything starts there, `index.js` requires `routes.js` which is responsable for requiring pages modules from `src/js/home` and `src/js/add`

Any trouble running this demo? File an issue

# TODO
- CSS should be placed inside module folder /src/js/home/styles etc...
- Tests
- deploy single entry point
- deploy with lazy load
