import "./AdditionalInfo.scss";

import { FC } from "react";

import { AdditionalInfoProps } from "./types";

export const AdditionalInfo: FC<AdditionalInfoProps> = ({ order }) => (
  <div className="additional-info">
    <div className="additional-info__row">
      <div className="additional-info__row-label">Наименование</div>
      <div className="additional-info__row-value">{order.short_name}</div>
    </div>
    <div className="additional-info__row">
      <div className="additional-info__row-label">ИНН</div>
      <div className="additional-info__row-value">-</div>
    </div>
    <div className="additional-info__row">
      <div className="additional-info__row-label">Представитель</div>
      <div className="additional-info__row-value">-</div>
    </div>
    <div className="additional-info__row">
      <div className="additional-info__row-label">Телефон</div>
      <div className="additional-info__row-value">-</div>
    </div>
  </div>
);
