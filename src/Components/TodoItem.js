import { TdItem, DelButton, Item } from "./StyledItem";
import propTypes from "prop-types";

const TodoItem = ({ item, click, id }) => {
  const deleteHandler = () => {
    click(item);
  };
  return (
    <TdItem>
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
