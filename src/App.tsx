import React from "react";
import Loader from "./components/Loader";
import Search from "./components/Search";
import Today from "./components/Today";
import Week from "./components/Week";
import "./App.css";

const App = () => {
  return (
    <div>
      <Search />
      <Today />
      <Week />
      <Loader />
    </div>
  );
};

export default App;
