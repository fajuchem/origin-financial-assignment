import './App.css';
import { Header } from './components/Header';
import { SavingGoal } from './components/SavingGoal';

function App() {
  return (
    <div className="relative flex flex-col min-h-screen bg-blue-gray">
      <Header />
      <SavingGoal />
    </div>
  );
}

export default App;
