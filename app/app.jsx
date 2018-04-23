import React from 'react';
import { hot } from 'react-hot-loader';
import B from './b';
import Cany from './c';

const App = () => (
  <div>
    <div className="container">
      <h1>ello React</h1>
      <div>233</div>
    </div>
    <h1>
      <B />
    </h1>
    <h1>
      <Cany name="dmj123" />
    </h1>
  </div>
);

export default hot(module)(App);
