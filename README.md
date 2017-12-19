This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Any detailed explanations can be found [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Table of Contents

- [App info](#app-info)
- [Usage](#usage)
- [Tools](#tools)
- [Project Structure](#project-structure)

## App info

This application can be used to:
* `get weather data based on user's current location` - needs location permission
* `search weather data by city name`
* `store fetched data in browser's application storage`

## Usage
* clone the repo
* install required modules with `yarn`
* run the app with `yarn start`

## Tools
App is using [Open Weather API](http://openweathermap.org/forecast16) for fetching the weather data based on the requested city,
and for getting user's location it's using the [Geolocation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation) service.
Core programming includes usage of following:
* React JS
* Redux
* Redux Saga
* React Router 4
* Semantic UI

## Project structure
Weather app project structure was made modular and grouped, so that every part of the project can be easily replaced. E.g. `redux` folder contains all actions, reducers and store (in separate folders as well), `utils` are for commonly used functions, `constants` to keep some constant values, `sagas` to keep all redux sagas in one place, `routes` to easily add/remove page routes, `assets` to keep static files, `api` for async actions handling, `containers` for react components wrappers while keeping components in `components`.