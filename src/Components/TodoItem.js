import { TdItem, DelButton, Item } from "./StyledItem";
import propTypes from "prop-types";
import { useState } from "react";

const TodoItem = ({ item, click, id }) => {
  const [strikeOut, setStrikeOut] = useState(false);

  const deleteHandler = () => {
    click(item);
  };
  const clickHandler = () => {
    setStrikeOut((prevState) => !prevState);
  };
  return (
    <TdItem onClick={clickHandler} strike={strikeOut}>
      <Item>
        <span>{id + 1}.</span> {item}
      </Item>
      <DelButton onClick={deleteHandler}></DelButton>
    </TdItem>
  );
};

TodoItem.propTypes = {
  item: propTypes.string.isRequired,
  click: propTypes.func.isRequired,
  id: propTypes.number.isRequired,
};
export default TodoItem;
