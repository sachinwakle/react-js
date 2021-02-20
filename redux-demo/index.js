console.log("Redux Demo");

const redux = require("redux");
const createStore = redux.createStore;

const BUY_CAKE = "BUY_CAKE";

// Action Creator
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "Redux Action - Buy Cake",
  };
}

// reducer = (initialState, action) =>newState

const initialState = {
  numOfCake: 10,
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUY_CAKE":
      console.log(action.info);
      return {
        ...state,
        numOfCake: state.numOfCake - 1,
      };

    default:
      return state;
  }
};

// Store creator

const store = createStore(reducer);
console.log(`Initial State:`,store.getState());

const unsubscribe = store.subscribe(() => {
  console.log(`Updated State:`, store.getState());
});

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();
