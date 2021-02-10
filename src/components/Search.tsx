import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getWeather } from "../store/actions/weatherAction";

const Search = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(getWeather(city));
    setCity("");
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="" id="" onChange={onChange} value={city} />
        <input type="submit" value="Get Data" />
      </form>
    </div>
  );
};

export default Search;
