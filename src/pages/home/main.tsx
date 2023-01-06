import { FC } from 'react';

const Main: FC = () => {
  return (
    <>
      <section className="nes-container">
        <div className="nes-container  with-title is is-centered is-yellow">
          <p className="title">Container</p>
        </div>
      </section>
      <main className="nes-container-grid">
        <div className="nes-container  with-title is-left is-dark-blue">
          <p className="title">Container</p>
          <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
          <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
          <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
        </div>

        <div className="nes-container is-pink with-title is-right">
          <p className="title">Container</p>
          <p>Good morning. Thou hastt had a good night's sleep, I hope.</p>
          <p>Good morning. Thou hastt had a good night's sleep, I hope.</p>
          <p>Good morning. Thou hastt had a good night's sleep, I hope.</p>
        </div>
      </main>

      <main className="nes-container-grid-left">
        <div className="nes-container with-title  ">
          <p className="title">Container</p>
          <ul className="nes-list is-disc">
            <li>Good morning.</li>
            <li>Thou hast had a good night's sleep, I hope.</li>
            <li>Thou hast had a good night's sleep, I hope.</li>
            <li>Thou hast had a good night's sleep, I hope.</li>
            <li>Thou hast had a good night's sleep, I hope.</li>
            <li>Thou hast had a good afternoon</li>
            <li>Good night.</li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Main;
