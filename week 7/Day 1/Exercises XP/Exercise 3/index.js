// Exercise Component: Demonstrates various JSX elements and styling
class Exercise extends React.Component {
    render() {
      // Inline CSS styling using JavaScript object
      // Note: CSS properties are in camelCase in React
      const style_header = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };
  
      return (
        <div>
          {/* Header with inline styling using style prop */}
          <h1 style={style_header}>This is a Header</h1>
          
          {/* Paragraph with CSS class for styling */}
          <p className="para">This is a Paragraph</p>
          
          {/* Link element */}
          <a href="https://www.example.com">This is a Link</a>
          
          {/* Form section */}
          <h3>This is a Form:</h3>
          <form>
            {/* Input field with label */}
            Enter your name: <input type="text" />
            {/* Submit button */}
            <button type="submit">Submit</button>
          </form>
          
          {/* Image section */}
          <h3>Here is an Image:</h3>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
            alt="React Logo" 
            width="400"
          />
          
          {/* List section */}
          <h3>This is a List:</h3>
          <ul>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
          </ul>
        </div>
      );
    }
  }
  
  // Main App Component: Renders the Exercise component
  function App() {
    return (
      <div>
        {/* Component composition: App renders Exercise */}
        <Exercise />
      </div>
    );
  }
  
  // React 18 way of rendering: Create root and render
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
  