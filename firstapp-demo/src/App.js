import './App.css';
import Header from './components/header';
import Slider from './components/slider';

function App() {
  const name = "sonam soni";
  const loggedIn = false;
  const user = { id: 1, name: 'sonam', email: 'sonam@gmail.com', country: 'india' }
  const array = [
    { id: 1, name: 'alex' },
    { id: 2, name: 'bob' },
    { id: 3, name: 'catty' },
    { id: 4, name: 'john' }
  ]

  return (
    <div className="App">
      <h1>Hello World</h1>
      <h2>Welcome {name}</h2>
      <button>{loggedIn ? 'logout' : 'login'}</button>
      <p>{user.id}, {user.name}, {user.email}, {user.country}</p>
      <Header />
      <Slider />
      <table>
        <thead><tr><th>Id</th><th>Name</th></tr></thead>
        <tbody>
          {
            array.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
