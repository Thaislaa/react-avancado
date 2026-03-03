import { Provider as ReduxProvider} from "react-redux";
import { store } from "./store";

export default function App() {
  return(
    <ReduxProvider store={store}>
      <h1>Bem vindo ao Redux Toolkit</h1>
    </ReduxProvider>
  );
}