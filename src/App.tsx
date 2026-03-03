import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";
import { TasksList } from "./components/TasksList";

export default function App() {
  return (
    <ReduxProvider store={store}>
      <TasksList />
    </ReduxProvider>
  );
}