import { store } from "./redux/store";
import WeatherApp from "./weatherApp";
import {Provider} from 'react-redux'

function App() {
  return (
    <div className="main">
      <Provider store={store}>

    <WeatherApp/>
      </Provider>
    </div>
  );
}

export default App;
