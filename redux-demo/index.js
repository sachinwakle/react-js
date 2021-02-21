console.log("Redux Demo");

const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

// Action Creator
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "Redux Action - Buy Cake",
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: "Redux Action - Buy Ice-Cream",
  };
}

// reducer = (initialState, action) =>newState

const initialCakeState = {
  numOfCake: 10,
};

const initialIceCreamState = {
  numOfIceCream: 20,
};

// Reducer
const cakeReducer = (state = initialCakeState, action) => {
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

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case "BUY_ICECREAM":
      console.log(action.info);
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };

    default:
      return state;
  }
};

// Store creator
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer);
console.log(`Initial State:`, store.getState());

const unsubscribe = store.subscribe(() => {
  console.log(`Updated State:`, store.getState());
});

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();
