import React from "react";

import { Button } from "./styles";

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
    <Button>
      {isHome && <img alt="" src={"../assets/images/discord-icon.jpg"} />}
    </Button>
  );
};

export default ServerButton;
