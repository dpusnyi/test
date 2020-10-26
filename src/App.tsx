import React from 'react';
import Select from './components/Select';

import './App.css';


const App: React.FC = () => {
  const options = ['option 1', 'option 2', 'option 3', 'option 4', 'option 5'];
  return (
    <div>
      <Select options={options} placeholder='Select option' />
    </div>
  )
}

export default App;