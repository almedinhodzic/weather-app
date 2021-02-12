import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { getWeather } from "../store/actions/weatherAction";

const Search: React.FC = () => {
  const [city, setCity] = useState("");
  const [alert, setAlert] = useState(false);
  const dispatch = useDispatch();
  const error = useSelector((state: RootState) => state.weather.error);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (city.trim() === "") {
      setAlert(true);
    } else {
      dispatch(getWeather(city));
      setAlert(false);
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
        <button type="submit">
          <i className="fas fa-search"></i>
        </button>
        {alert && <p className="alert">Input can not be empty!</p>}
        {error && <p className="alert">Place does not exists!</p>}
      </form>
    </div>
  );
};

export default Search;
