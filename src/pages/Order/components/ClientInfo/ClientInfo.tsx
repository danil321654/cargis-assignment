import "./ClientInfo.scss";

import { FC } from "react";

import { ClientInfoProps } from "./types";
import { ShieldIcon, VerifiedIcon } from "icons";

export const ClientInfo: FC<ClientInfoProps> = ({ order }) => (
  <div className="client-info">
    <div className="client-info__value">
      {order.short_name} <VerifiedIcon />
      <ShieldIcon />
    </div>
    <div className="client-info__label">Автор заявки</div>
  </div>
);
