import './App.css';
import { MonthContextProvider } from './Context/MonthContext';
import Month from './Month/Month';
import Calendar from './Calendar/Calendar';

function App() {
  return (
    <MonthContextProvider>
      <main className="App">
        <Month/>
        <Calendar/>
      </main>
    </MonthContextProvider>
  );
}

export default App;
