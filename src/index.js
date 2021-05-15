import ReactDOM from 'react-dom';
import React from 'react';

const dom = document.getElementById('root');

const Main = (_props) => {
  return (
    <section>
      <h1>CoderDojo 五反田</h1>
      <img src={`${process.env.PUBLIC_URL}/images/sceen_offline.jpg`} style={{maxWidth:480}} />
      <p><a href="https://coderdojo-gotanda.doorkeeper.jp/">参加する</a></p>
    </section>
  );
};


ReactDOM.render(<Main />, dom);
