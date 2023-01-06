import React, { useState } from 'react';
import './nes.css';
import Modal from './pages/home/modal';
import Header from './pages/home/header';
import Main from './pages/home/main';

const App: React.FC = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="container">
      {modal === true ? <Modal setModal={setModal} /> : null}
      <Header setModal={setModal} />
      <Main />
    </div>
  );
};

export default App;
