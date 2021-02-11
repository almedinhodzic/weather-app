import React from "react";
import Loader from "./components/Loader";
import Search from "./components/Search";
import Today from "./components/Today";
import Week from "./components/Week";
import "./App.css";
import { useSelector } from "react-redux";
import { RootState } from "./store";

const App: React.FC = () => {
  const loading = useSelector((state: RootState) => state.weather.loading);
  const data = useSelector((state: RootState) => state.weather);
  return (
    <div className="App">
      <Search />
      {!data.today || !data.week ? (
        <>Please type valid city name</>
      ) : loading ? (
        <Loader />
      ) : (
        <>
          <Today />
          <Week />
        </>
      )}
    </div>
  );
};

export default App;
