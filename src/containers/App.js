import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestRobots } from "../app/robotSlice";

import Header from "../components/Header";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const searchField = useSelector((state) => state.search.searchField);
  const robots = useSelector((state) => state.robot.robots);
  const isPending = useSelector((state) => state.robot.isPending);

  useEffect(() => {
    dispatch(requestRobots());
  }, [dispatch]);

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });
  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <Header />
      <SearchBox />
      <Scroll>
        {isPending ? (
          <h1>Loading</h1>
        ) : (
          <ErrorBoundary>
            <CardList robots={filteredRobots} />;
          </ErrorBoundary>
        )}
      </Scroll>
    </div>
  );
};

export default App;
