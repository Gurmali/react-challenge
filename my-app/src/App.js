import css from './App.module.css';
import NavBarForm from './components/NavBarForm';
import NavBarSimple from './components/NavBarSimple';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

function App() {
  return (
    <div className={css.App}>
{/*      <NavBarSimple /> */}
      <NavBarForm />
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;