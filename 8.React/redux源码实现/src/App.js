/*
 * @Description: 更改前请留下你的姓名
 * @Author: Tokyo
 * @Date: 2021-09-27 11:00:51
 * @LastEditTime: 2021-09-27 14:39:44
 * @LastEditors: Tokyo
 * @FilePath: /study_redux/src/App.js
 */
import logo from './logo.svg';
import './App.css';
import createStore from './redux/createStore';
function App() {
  function test(params) {
    return {
      type: 'ADD',
      state: 1,
    };
  }

  createStore().dispatch(test());

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
