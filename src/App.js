import "./App.css";

export function Person(props) {
  return (
    <>
      <p>
        <h1>Name : {props.name} </h1>
        <h1>Age : {props.Age} </h1>
        <h1>Location : Hyderabad</h1>
        <h1>-------------------------</h1>
      </p>
      <h1></h1>
    </>
  );
}

export function App() {
  const name = "Josh";
  let isNameShowing = false;
  return (
    <>
      <Person name={"Akshit"} Age={23} Location={"Hyderabad"} />
      <Person name={"Jagriti"} Age={24} Location={"Hyderabad"} />
      <Person name={"Nijit"} Age={24} Location={"Hyderabad"} />
    </>
  );
}
