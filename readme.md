# Gemini Front-End Engineer Interview Question

## Install
`npm i`

## Run dev server
`npm run dev` and go to `http://localhost:8080`

## Test
`npm run test` or `npm run test:watch`

## Packages used
- devOps: Webpack, Eslint, husky
- Test: Mocha, Chai, Enzyme, jsdom, redux-mock-store
- React application: Redux + Thunk, reselect, Emotion, Plotly, antd, redux-notifications

## Notes
- I used alias (see webpack config)
- The address is stored in the local storage simulate a consistence login


## Improvements
- add Prettier
- abstract webpack config and create prod/dev webpack config
- hot reload in webpack
- emotionjs theme
- <AppRouter /> need to be more consistant 
- naming can be better:
    - selector should start with select: `selectIsLoading...`
- use antd grid and not my own custom css
- figure out how not to import jsx and the comment every time
- add eslint rule for a new line before a return statement
- wrap localStorage in a class 
- `actionCreator => (type, params) =({type, payload: {...params})`
- Entity for redux store:
```
class Entity {
     setData(data)
     startLoading()
     stopLoading()
}
```
- action types generator:
```
const WORDS: {
    FETCH,
    GET,
    START,
    END,
    FAIL
}

const creteActionTypes = (NAME: string) => ({
    start: `${WORD.START}_${NAME}`,
    end: ......,
}) 
const sendCoinActions =  creteActionTypes(SEND_COIN_AT);
```

OR 

```
const START_ACTION = name => `${WORDS.START}_${name}`;
const END_ACTION = name => `${WORDS.END}_${name}`;
...
...
```
