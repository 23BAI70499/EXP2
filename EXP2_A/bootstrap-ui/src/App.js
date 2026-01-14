import React from "react";

function App() {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <div className="card p-4" style={{ width: "350px" }}>
        <h3 className="mb-3">Learning Bootstrap</h3>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Username"
        />

        <input
          type="password"
          className="form-control mb-4"
          placeholder="Password"
        />

        <button className="btn btn-primary w-100">
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
