import './App.css';
import { useContext } from 'react';
import { ThemeContext } from './Context/ThemeContext';
import Month from './Month/Month';
import Calendar from './Calendar/Calendar';
import Settings from './Settings/Settings';
import Modal from './Modal/Modal';
import COLORS from './Constant/Colors'

function App() {
  const { isDark } = useContext(ThemeContext);

  return (
    <main className="App" style={{
        color: isDark ? COLORS.light : COLORS.dark,
        backgroundColor: isDark ? COLORS.dark : COLORS.light,
      }}>
      <Month/>
      <Calendar/>
      <Settings/>
      <Modal/>
    </main>
        
  );
}

export default App;
