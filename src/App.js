import "./App.css";
import FeedbackForm from "./FeedbackForm";

function App() {
  const handleSubmit = (props) => {
    console.log(props);
    console.log("Form submitted!");
  };

  return (
    <div className="App">
      <FeedbackForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
