import "./App.css";
import FeedbackForm from "./FeedbackForm";

function Button({ children, backgroundColor, onClick }) {
  return (
    <>
      <button style={{ backgroundColor }} onClick={onClick}>{children}</button>
    </>
  );
}

const handleReset = () => {
  console.log('Handle Reset');
};

function App() {

  const handleSubmit = (props) => {
    console.log(props);
    console.log("Form submitted!");
  };

  return (
    <>
      
      <div className="App">
        <FeedbackForm onSubmit={handleSubmit} />
      </div>
      <Button backgroundColor='blue' onClick={handleReset}>Delete</Button>
    </>
  );
}

export default App;
