import React from "react";

function App() {
  const cards = [
    { title: "Card 1", text: "This is card one." },
    { title: "Card 2", text: "This is card two." },
    { title: "Card 3", text: "This is card three." },
    { title: "Card 4", text: "This is card four." },
    { title: "Card 5", text: "This is card five." },
  ];

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">
        Card-Based Layout Using Bootstrap
      </h3>

      <div className="d-flex flex-column align-items-center">
        {cards.map((card, index) => (
          <div className="card mb-3 w-75" key={index}>
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.text}</p>
              <button className="btn btn-primary">View</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
