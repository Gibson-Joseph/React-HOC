import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import UserList from "./components/hoc/UserList";
import TodoList from "./components/hoc/TodoList";
function App() {
  return (
    <div>
      <h1>Higher Order Components</h1>
      {/* <ClickCounter name="Gibson" />
      <HoverCounter name="Joseph" /> */}

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <UserList />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
