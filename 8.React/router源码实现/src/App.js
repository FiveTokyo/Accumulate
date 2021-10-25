/*
 * @Description: 更改前请留下你的姓名
 * @Author: Tokyo
 * @Date: 2021-09-29 15:58:18
 * @LastEditTime: 2021-10-06 17:19:18
 * @LastEditors: Tokyo
 * @FilePath: /study_react_router/src/App.js
 */
import './App.css';

import './router/browserRouter';
import Home from './pages/home1';
import ManageCenter from './pages/manageCenter';
import { BrowserRouter as Router, Route } from './router';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/home" component={Home}></Route>
        <Route path="/manageCenter" component={ManageCenter}></Route>
      </Router>
    </div>
  );
}

export default App;
