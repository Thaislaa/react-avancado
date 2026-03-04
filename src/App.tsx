import { Provider as ReduxProvider } from "react-redux";
import { persistedStore, store } from "./store";
import { TasksList } from "./components/TasksList";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistedStore} />
      <TasksList />
    </ReduxProvider>
  );
}