import React, {Component} from 'react';

import Layout from './Components/Layout/Layout';
import Main from './Containers/Main/Main';


class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Main/>
        </Layout>
      </div>
    )
  }
};



export default App;
