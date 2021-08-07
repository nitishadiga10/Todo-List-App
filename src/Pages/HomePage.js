import { TdApp, Heading } from "../Components/StyledItem";
import TodoList from "../Components/TodoList";

const HomePage = () => {
  return (
    <TdApp>
      <Heading>TO-DO LIST</Heading>
      <TodoList></TodoList>
    </TdApp>
  );
};

export default HomePage;
