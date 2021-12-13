/* 
resource: https://www.youtube.com/watch?v=9jULHSe41ls
*/

/* 
Key Terms / Terminologies
--------------
1.Reducer: The Banker
2.Action: The initiative of function. What the servant does
3.Action Creator: The function. The servant
4.Action Type: Method. Type that servant writes in the letter
5.Action Payload: ammount. The ammount servant writes in the envelop
6.Dispatch: what the pegion does
7.Store: The bank
*/

/* 
Title: Bank Statement with Redux
*/

/* 
Steps
----------
installaton
------------
1. npx create-react-app app-name
2. npm install redux react-redux

create store and reducer
=========================

1. create a folder in src named state/store whatever
2. create another folder named reducers into it
3. create a file accountReducer.js
    3.1. reducer is a function that ultimately returns a state
    3.2. this function takes 2 parameters
        3.2.1. initial state
        3.2.2. that particular action (type: deposit) that it has to do 
    3.3. Typically we write switch statement in the reducer action function

if you have multiple reduceers you need to merge the reducers before putting into the store
------------------------------------------------------------------------------------------------
1. create index.js inside the reducers folder
2. we will need to import combineReducers and the files needed to combine (eg. accountReducer.js)
3. then put them into the combine reducer function as key value pair.

Now lets create store
===========================
1. create a file inside the state folder named store.js
2. we need to import createStore from redux and index,js from the state
3. store takes the reducers (from the index.js) and an empty object as default

*/

/* 
Reducer and store completed Now we have to hook it up with the react app with provider
1. into the main index.js wrap the <App/> component into the provider
2. import the provider from React-Redux
3. we also imported our redux store in our index.js
4. pass it as prop as <Provider store={store}/>

Now how to access the data in the store?
=============================================
1. In the app.js import useSelector from react-redux
2. Then we used a callback function as const account = useSelector((state)=>state.account);

Now time to create the action creator
=========================================
1. In this particulat example we need to create 2 different functions 
2. create a folder named actionCreators in the state folder
3. create index.js file in it and create all action functions in it
4. we created necessary functions
5. after that we created a central index.js into the state folder to combine all actions 


Now time to access all actions into the app.js
===================================================
1. call another hook "useDispatch" and bindActionCreators
.
.
.
Redux thunk middleware
============================



*/