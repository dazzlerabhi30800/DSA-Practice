const { useEffect } = React;

function App() {
  async function getQuote() {
    const data = await fetch("https://api.api-ninjas.com/v1/quotes");
    const response = await data.json();
    console.log(response);
  }
  useEffect(() => {
    return () => getQuote();
  }, []);
  return (
    <>
      <h1>Quote Box</h1>
    </>
  );
}

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);
ReactDOM.render(<App />, document.getElementById("quote-box"));
