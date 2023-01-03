import { Header } from './layouts/Header';
import { SavingGoal } from './pages/SavingGoal';

function App() {
  return (
    <div className="relative flex flex-col min-h-screen bg-blue-gray">
      <Header />
      <SavingGoal />
    </div>
  );
}

export default App;
