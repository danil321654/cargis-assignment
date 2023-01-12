import { Button } from "components";
import { AddIcon } from "icons";
import "./SearchPanel.scss";

export const SearchPanel = () => (
  <div className="searchPanel">
    <Button>
      <AddIcon /> Новая заявка
    </Button>
    <div className="searchPanel__filterButton" />
  </div>
);
