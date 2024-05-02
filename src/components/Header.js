import { memo } from "react";
import CounterButton from "./CounterButton";

const Header = memo(function Header() {
  return (
    <div>
      <h1 className="f1">RoboFriends</h1>
      <CounterButton />
    </div>
  );
});

export default Header;
