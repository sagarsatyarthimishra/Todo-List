import "./App.css";
import Tudo from "./TudoList.jsx";
function App() {
  return (
    <>
      <div
        style={{
          textAlign: "center",
          border: "4px solid #14ab41",
          padding: "12px",
          width: "100%",
          margin: "auto",
          marginTop: "50px",
          borderRadius: "10px",
          backgroundColor: "#f0f0f0",
        }}
      >
        <br />
        <h3
          style={{
            backgroundColor: "#14ab41",
            color: "WHite",
            display: "inline",
            padding: "8px",
            borderRadius: "5px",
          }}
        >
          Todo List
        </h3>
        <br />
        <br />
        <Tudo />
      </div>
    </>
  );
}

export default App;
