import React from "react";
import Search from "./components/Search";
import Today from "./components/Today";
import Week from "./components/Week";

const App = () => {
  return (
    <div>
      <Search />
      <Today />
      <Week />
    </div>
  );
};

export default App;
