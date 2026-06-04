// Root component — immediately.run renders the default export of THIS file.
// Global CSS is imported here (not in main.tsx) because immediately.run's
// runtime never loads main.tsx; anything the rendered tree needs must be
// reachable from App.tsx.
import './index.css';
import './App.css';
import ShowcaseGrid from './components/ShowcaseGrid';

function App() {
  return (
    <main className="page">
      <header className="masthead">
        <p className="eyebrow">Showcase</p>
        <h1 className="title">
          Real apps, <span className="grad-text">built to take apart.</span>
        </h1>
        <p className="lede">
          Every tile is a public repo that runs on immediately.run. Open one to
          use it, then tinker to see exactly how it works — and make it yours.
        </p>
      </header>

      <ShowcaseGrid />

      <footer className="footer">
        <p>
          Built with immediately.run. Each app loads from GitHub and runs in
          your browser — no install, no build step.
        </p>
      </footer>
    </main>
  );
}

export default App;
