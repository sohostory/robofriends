import { useEffect } from "react";

import Header from "../components/Header";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";

const MainPage = (props) => {
  const { isPending, onSearchChange } = props;
  useEffect(() => {
    props.onRequestRobots();
  }, []);

  const filteredRobots = () => {
    const { robots, searchField } = props;
    return robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
  };
  return (
    <div className="tc">
      <Header />
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        {isPending ? (
          <h1>Loading</h1>
        ) : (
          <ErrorBoundary>
            <CardList robots={filteredRobots()} />;
          </ErrorBoundary>
        )}
      </Scroll>
    </div>
  );
};

export default MainPage;
