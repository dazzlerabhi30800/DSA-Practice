class Kitten extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }
  render() {
    return (
      <div>
        <h1>Hello React {this.props.name}!</h1>
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <p>The value of input is: {this.state.input}</p>
      </div>
    );
  }
}

Kitten.defaultProps = { name: "Neko" };
Kitten.propTypes = {
  name: PropTypes.string.isRequired,
};

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "Dazzler",
    };
  }
  render() {
    return <h1>My First React Component {this.state.firstName}!</h1>;
  }
}

function App() {
  return (
    <div>
      <h1>Hello this is a React Component.</h1>
      <Kitten />
      <MyComponent />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
