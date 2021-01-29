import React from "react";
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { carReducer } from "./reducers/carReducer";

const store = createStore(carReducer);

const App = () => {
  const state = {
    additionalPrice: 0,
    additionalFeatures: [
      { id: 1, name: "V-6 engine", price: 1500 },
      { id: 2, name: "Racing detail package", price: 1500 },
      { id: 3, name: "Premium sound system", price: 500 },
      { id: 4, name: "Rear spoiler", price: 250 },
    ],
  };

  return (
    <Provider store={store}>
      <div className="boxes">
        <div className="box">
          <Header />
          <AddedFeatures />
        </div>
        <div className="box">
          <AdditionalFeatures additionalFeatures={state.additionalFeatures} />
          <Total additionalPrice={state.additionalPrice} />
        </div>
      </div>
    </Provider>
  );
};

export default App;
