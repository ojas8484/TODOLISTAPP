import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Todo from './component/Todo';

function App() {
  return (
    <>
      <div className="max-w-full p-4">
        <Todo />
      </div>
    </>
  );
}

export default App;
