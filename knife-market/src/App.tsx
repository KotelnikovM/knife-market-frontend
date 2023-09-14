import { useEffect } from 'react';
import './App.css';

function App() {
  const getData = async () => {
    return fetch(`http://localhost:8000/api/data`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>Hello Vite!</div>
    </>
  );
}

export default App;
