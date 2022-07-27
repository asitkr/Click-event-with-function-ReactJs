import "./styles.css";

function App() {

  let fullName = "Ashit Kumar Sinha"

  function apple() {
    fullName = "Rohan Raj";
    alert(fullName);
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox Welcomes You {fullName}</h1>
      <button onClick={apple}>Click Me...!</button><hr/>
      <button onClick={() => apple()}>Click Me...!</button>
    </div>
  );
}

export default App;