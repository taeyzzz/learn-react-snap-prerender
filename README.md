# Learn React Snap Prerender

# This project come from
- https://coffeencoding.com/cra-vs-next-js-vs-gatsby/
- https://coffeencoding.com/prerender-react-app-for-seo-without-ssr-or-next-js/
- https://web.dev/prerender-with-react-snap

## Library
- https://github.com/stereobooster/react-snap

## how to use
```
yarn
yarn start
```

# Key to concern
- After npm run build react snap will generate html folder depend on Link in react-router-dom
- in package.json "script"
```
"postbuild": "react-snap"
```
it will be call after npm run build automatically to generate all router

- in src/index.js ReactDOM example

```javascript
const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(
    <Provider store={store}>
      {routes}
    </Provider>,
    rootElement
  );
}
else {
  ReactDOM.render(
    <Provider store={store}>
      {routes}
    </Provider>,
    rootElement
  );
}
```
