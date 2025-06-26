import { useState } from 'react';
import './App.css'
import BoughtCorn from './components/BoughtCorn';
import BuyCornForm from './components/BuyCornForm'
import Card from './components/Card';
import Info from './components/Info';

const App = () => {
  const [email, setEmail] = useState('');

  return (
    <div>
      <Info />
      <div className="flex flex-row items-center mb-4 gap-10">
        <Card title="Buy Corn">
          <BuyCornForm onSubmit={(email) => setEmail(email)} />
        </Card>
        <Card title="Bought Corn">
          <BoughtCorn email={email} />
        </Card>
      </div>
    </div>
  );
};

export default App;
