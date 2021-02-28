import './App.css';
import Subscribers from "./components/subscribers";
import {Provider} from "react-redux";
import store from "./redux/store";
import Display from "./components/display";
import Views from "./components/view";
import Comments from "./components/comments"
import Posts from "./components/posts"

function App() {
  return (
      <Provider store={store}>
        <div className="App">
            <Posts/>
            <Comments/>
            <Subscribers/>
            <Views/>
            <Display/>
        </div>
      </Provider>
  );
}

export default App;
