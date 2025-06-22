// PART I + II + III combined
class Exercise extends React.Component {
    render() {
      const style_header = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };
  
      return (
        <div>
          <h1 style={style_header}>This is a Header</h1>
  
          <p className="para">This is a Paragraph</p>
  
          <a href="https://www.example.com">This is a Link</a>
  
          <h3>This is a Form:</h3>
          <form>
            Enter your name: <input type="text" />
            <button type="submit">Submit</button>
          </form>
  
          <h3>Here is an Image:</h3>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
            alt="React Logo" 
            width="400"
          />
  
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
  