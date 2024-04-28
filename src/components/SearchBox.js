import { useDispatch } from "react-redux";
import { setSearchField } from "../app/searchSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  // Handler function to dispatch setSearchField action
  const onSearchChange = (event) => {
    dispatch(setSearchField(event.target.value));
  };

  return (
    <div className="pa2">
      <input className="pa3 ba b--green bg-lightest-blue" type="search" placeholder="search robots" onChange={onSearchChange} />
    </div>
  );
};

export default SearchBox;
