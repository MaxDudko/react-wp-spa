import React from 'react';
import styles from './App.module.scss';
import {connect} from "react-redux";
import {IReduxState} from "../store/reducers";

interface IProps {}

const App: React.FC<IProps> = (props) => {
  return (
    <div className={styles.App}>
      React-WP SPA
    </div>
  );
};

export default connect((state: IReduxState) => {
  return {}
}, (dispatch) => {
  return {}
})(App)
