
import { useState } from 'react';

function Welcome() {
  return <h1>Welcome to my React Tutorial</h1>;
}



function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(c => c + 1);
  }

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => {
        increment();
      }}>
        +1
      </button>

      <button onClick={() => {
        increment();
        increment();
        increment();
      }}>
        +3
      </button>
    </div>
  );
}



function TextField() {
  const [name, setName] = useState('');

  return (
    <div>
      <h2>Text Field Practice</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Hello, {name}!</p>
    </div>
  );
}


function CheckboxPractice() {
  const [liked, setLiked] = useState(false);

  return (
    <div>
      <h2>Checkbox Practice</h2>

      <label>
        <input
          type="checkbox"
          checked={liked}
          onChange={(e) => setLiked(e.target.checked)}
        />
        I like React
      </label>

      <p>You {liked ? 'like' : 'do not like'} React.</p>
    </div>
  );
}


function FormPractice() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <div>
      <h2>Form Practice</h2>

      <label>
        First Name:
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>

      <br />

      <label>
        Last Name:
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>

      <p>Hello, {firstName} {lastName}!</p>
    </div>
  );
}


function App() {
  return (
    <div>
      <Welcome />
      <p>I am practicing React for my WDD 360 class.</p>
      <Counter />
      <TextField />
      <CheckboxPractice />
      <FormPractice />
    </div>
  );
}


export default App;
