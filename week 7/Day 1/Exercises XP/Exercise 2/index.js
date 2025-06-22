class UserFavoriteAnimals extends React.Component {
    render() {
      return (
        <ul>
          {this.props.favAnimals.map((animal, index) => (
            <li key={index}>{animal}</li>
          ))}
        </ul>
      );
    }
  }
  
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
  
  // Render the app
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
  