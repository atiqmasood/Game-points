# Game Points

## Requirements

* [node](https://nodejs.org/en/) v8.11.3 (npm v5.6.0)
* [yarn](https://yarnpkg.com/en/) 1.7.0


## Getting started

Compile and run (development mode):

```
yarn
yarn start
```

## Production Build

```
yarn
yarn build
```

## Project structure

### Folders

* public - contains the public resources to expose.
* scripts - contains the npm scripts to start (development), to build (production)
  or to test the project.
* src - contains all the source code and resources related to this application
  (this is the project root).
  * app - main application source folder.
    * actions - Redux Actions.
    * components - React Components.
    * containers - React containers.
    * reducers - Redux reducers.
    * store - Redux store configuration.
  * App.jsx - App main object.
  * index.js - App startup script.
  * registerServiceWorker.js - service worker used to improve the App performance.
* .eslintrc - [eslint](http://eslint.org/docs/user-guide/configuring) configuration.
* .flowconfig - [Flow](https://flow.org/) configuration.
* .gitignore - git ignore configuration.
* .gitlab-ci.yml - GitLab CI configuration to deploy the app in the CI environments.
* yarn.lock - created and used by yarn to lock the modules versions
  in order to get consistent installs across machines.

### Conventions

#### React Containers and Components

The _/src/app/containers_ folder contains all the React Containers,
while the _/src/app/components_ folder contains all the React Components.

A React Container:

* it concerns with _how things works_.
* it should extends the
  [React.PureComponent](https://facebook.github.io/react/docs/react-api.html#react.purecomponent).
* it can contains Components and/or Containers.
* it uses the Redux connect function to read from the Redux state and to connect Redux Actions.
  The connected Actions can be used directly in the Container
  or can be passed as parameter to the Components.
* it provides the data and behavior to presentational Components or other Containers.
* it can be generated using
  [Higher-Order Components](https://facebook.github.io/react/docs/higher-order-components.html).

A React Component (presentational):

* it concerns with _how things looks_.
* it should extends the
  [React.PureComponent](https://facebook.github.io/react/docs/react-api.html#react.purecomponent).
* it can contains other Components but it must not contains any Containers.
* it must not use the Redux connect function.
* rarely have its own state and it should be written as a
  [functional component](https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html#stateless-functional-components).
* it must not be generated using
  [Higher-Order Components](https://facebook.github.io/react/docs/higher-order-components.html)

#### Redux Actions

The _/src/actions_ folder contains all the Redux Actions.
All the generated Redux Actions MUST NOT include properties other than:
* type
* payload
* error
* meta

##### Action Type

The _type_ property is a string that identify the Action,
it is a required field and its value must be unique.

##### Action Payload

The optional _payload_ property MAY be any type of value.
It represents the payload of the action.
Any information about the action that is not the type or status of the action
should be part of the payload field.
By convention, if _error_ property is true, the payload SHOULD be an error object.
The _payload_ must be immutable.

##### Action Error

The optional _error_ property is a boolean and if true indicates that action represents an error.
In case the Action is not an error this property must be omitted rather that setting it to false.


#### Redux Reducers

The _/src/reducers_ folder contains all the Redux reducers.
The relative path of the reducers (starting from the _reducers_ folder)
must reflects the path where we are storing the information in the Redux store.
For example, the eventsListReducer is located in the _src/reducers/stream/events/list_ folder
and it will write in the  _state.stream.events.list_ property of the Redux store.
The reduces is a **pure function**.
A pure function is a function where the return value is only determined by its input values.
A pure function must not mutate the value of any input parameter.
When the reducer has to mutate the state, it has to create and return a new immutable object.
It's good practice define the default values in the reducer to safely access to the value from
the actions and in the components.

#### Style

For style 

* Material ui
* style-components
