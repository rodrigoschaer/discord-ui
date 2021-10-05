import React from "react";

import { Button } from "./styles";
import Logo from "../assets/images/Discord-Icon.svg";

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  hasNotifications,
  mentions,
}) => {
  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? "active" : ""}
    >
      {isHome && <img alt="Discord" src={Logo} />}
    </Button>
  );
};

export default ServerButton;
