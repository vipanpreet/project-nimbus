import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";

import AppScreen from "./screens/AppScreen";

function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}

const MainApp = () => {
  return (
    <div className="bg-white flex h-screen">
      <AppScreen />
    </div>
  );
};

export default App;
