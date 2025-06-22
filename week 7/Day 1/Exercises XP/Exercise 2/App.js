// Import the UserFavoriteAnimals component (Babel will allow this inline for simple case)
import UserFavoriteAnimals from './UserFavoriteAnimals.js';

function App() {
  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals : ['Horse', 'Turtle', 'Elephant', 'Monkey']
  };

  return (
    <div>
      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>
      <UserFavoriteAnimals favAnimals={user.favAnimals} />
    </div>
  );
}

export default App;
