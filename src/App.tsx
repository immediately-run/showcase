// Root component — immediately.run renders the default export of THIS file.
// Global CSS is imported here (not in main.tsx) because immediately.run's
// runtime never loads main.tsx; anything the rendered tree needs must be
// reachable from App.tsx.
//
// This is a *section* app: it fills the showcase region and draws no site nav
// or footer (the shell owns those). It is the curated storefront that links into
// the full directory at /apps.
import './index.css';
import './App.css';
import ShowcaseGrid from './components/ShowcaseGrid';

function App() {
  return (
    <main className="page">
      <header className="masthead">
        <span className="tag">/SHOWCASE</span>
        <h1 className="title grad-text">Built with immediately.run.</h1>
        <p className="lede">Real apps, running from their source. Open one, then take it apart.</p>
      </header>

      <ShowcaseGrid />

      <div className="browse-all">
        <a className="btn btn--browse" href="/apps">
          Browse all apps →
        </a>
      </div>
    </main>
  );
}

export default App;
