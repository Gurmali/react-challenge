import css from './App.module.css';
import ContentHooks from './components/ContentHooks';
import NavBarForm from './components/NavBarForm';
import NavBarSimple from './components/NavBarSimple';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className={css.App}>
{/*      <NavBarSimple /> */}
      <NavBarForm />
      <Sidebar />
      <ContentHooks />
    </div>
  );
}

export default App;