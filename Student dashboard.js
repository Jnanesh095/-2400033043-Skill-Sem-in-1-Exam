function Welcome(props) {
  return <h1>Welcome, {props.name}!</h1>;
}

// Rendering dynamically with different names
function App() {
  return (
    <div>
      <Welcome name="Deepak" />
      <Welcome name="Jnanesh" />
      <Welcome name="Aisha" />
    </div>
  );
}

export default App;
