import { useEffect } from 'react';
import './App.css';
import { Counter } from './Counter';
import Header from './components/header/header';

function App() {
  const getData = async () => {
    return fetch('http://localhost:8000/api/data')
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />
      <Counter />
    </>
  );
}

export default App;
