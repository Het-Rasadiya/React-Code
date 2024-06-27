import "./App.css";
import Card from "./components/Card";

function App() {
  let myObj = {
    username: "Het",
    age: 19,
  };

  let newArr = [1, 2, 3, 4];
  return (
    <>
      <h1 classNameName="text-black bg-green-400 p-4 rounded-xl mb-4">
        Tailwind CSS
      </h1>
      <Card username="card" btnText="click me"/>
    </>
  );
}

export default App;
