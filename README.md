
# Lab37 - Complex Reducers

Reducers made from scratch

### Author: Chris Kozlowski

### Links and Resources

- [GitHub PR](https://github.com/401-advanced-javascript-cdk/lab37-complex-reducers/pull/1)
- [Netlify Deployment](https://thirsty-chandrasekhar-d201b4.netlify.com/)

### Modules

#### `index.js`

Gets the root element in the HTML and renders the App component wrapped in the store provider

#### `app.js`

Connects to the store and maps the store state to props.

#### `redux/index.js`

Creates the store from the combined reducers.

#### `store/reducer-combiner.js`

Combines the instrumentType and instrument reducers

#### `redux/instrument-type-reducer.js`

Defines some default state and handles actions related to categories based on different types of instruments.

#### `redux/instrument-reducer.js`

Defines some default state and handles actions related to individual entries based on specific instruments.

#### Operation

Go to the deployment [here](https://thirsty-chandrasekhar-d201b4.netlify.com/).  The current state of the store can be viewed with Redux Devtools in the browser.

#### Available Actions
Actions can be dispatched from the devtools to manipulate the store's state.
### Actions for instrument type categories
* `{
  type: 'CREATE_INSTRUMENT_TYPE',
  payload: {id, name}
}`
* `{
  type: 'UPDATE_INSTRUMENT_TYPE',
  payload: {id, name}
}`
* `{
  type: 'DELETE_INSTRUMENT_TYPE',
  payload: {id}
}`

### Actions for individual insturments
* `{
  type: 'CREATE_INSTRUMENT',
  payload: {id, typeId, name}
}`
* `{
  type: 'UPDATE_INSTRUMENT',
  payload: {id, typeId, name}
}`
* `{
  type: 'DELETE_INSTRUMENT',
  payload: {id, typeId}
}`
