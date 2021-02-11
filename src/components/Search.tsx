import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getWeather } from "../store/actions/weatherAction";

const Search: React.FC = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (city.trim() === "") {
      alert("cant be emptty");
    } else {
      dispatch(getWeather(city));
    }
    setCity("");
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={onSubmit}>
        <input type="text" name="" id="" onChange={onChange} value={city} />
        <input type="submit" value="SEARCH" />
      </form>
    </div>
  );
};

export default Search;
