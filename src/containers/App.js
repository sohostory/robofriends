import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestRobots } from "../app/robotSlice";
import MainPage from "../components/MainPage";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const searchField = useSelector((state) => state.search.searchField);
  const robots = useSelector((state) => state.robot.robots);
  const isPending = useSelector((state) => state.robot.isPending);

  useEffect(() => {
    dispatch(requestRobots());
  }, [dispatch]);

  const onSearchChange = (event) => {
    dispatch(searchField.setSearchField(event.target.value));
  };
  const onRequestRobots = () => {
    dispatch(requestRobots());
  };

  return <MainPage {...{ searchField, robots, isPending, onSearchChange, onRequestRobots }} />;
};

export default App;
