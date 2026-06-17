import { useState } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [quotes, setQuotes] = useState([]);

  function addQuote(e) {
    e.preventDefault();

    if (quote.trim() === "" || author.trim() === "") {
      alert("Please fill both fields");
      return;
    }

    const newQuote = {
      id: Date.now(),
      text: quote,
      author: author,
    };

    setQuotes([newQuote, ...quotes]);
    setQuote("");
    setAuthor("");
  }

  function deleteQuote(id) {
    const updatedQuotes = quotes.filter((item) => item.id !== id);
    setQuotes(updatedQuotes);
  }

  return (
    <div className="app">
      import { useState } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [quotes, setQuotes] = useState([]);

  function addQuote(e) {
    e.preventDefault();

    if (quote.trim() === "" || author.trim() === "") {
      alert("Please fill both fields");
      return;
    }

    const newQuote = {
      id: Date.now(),
      text: quote,
      author: author,
    };

    setQuotes([newQuote, ...quotes]);
    setQuote("");
    setAuthor("");
  }

  function deleteQuote(id) {
    const updatedQuotes = quotes.filter((item) => item.id !== id);
    setQuotes(updatedQuotes);
  }

  return (
    <div className="app">
      <h1>Quote Saver</h1>
      <p className="subtitle">Learn React useState by saving quotes</p>

      <form onSubmit={addQuote} className="form">
        <input
          type="text"
          placeholder="Write a quote"
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
        />

        <input
          type="text"
          placeholder="Author name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <button type="submit">Add Quote</button>
      </form>

      <h2>Total Quotes: {quotes.length}</h2>

      <div className="quote-list">
        {quotes.length === 0 ? (
          <p>No quotes saved yet.</p>
        ) : (
          quotes.map((item) => (
            <div className="quote-card" key={item.id}>
              <p>"{item.text}"</p>
              <h3>- {item.author}</h3>
              <button onClick={() => deleteQuote(item.id)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
      <h1>Quote Saver</h1>
      <p className="subtitle">Learn React useState by saving quotes</p>

      <form onSubmit={addQuote} className="form">
        <input
          type="text"
          placeholder="Write a quote"
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
        />

        <input
          type="text"
          placeholder="Author name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <button type="submit">Add Quote</button>
      </form>

      <h2>Total Quotes: {quotes.length}</h2>

      <div className="quote-list">
        {quotes.length === 0 ? (
          <p>No quotes saved yet.</p>
        ) : (
          quotes.map((item) => (
            <div className="quote-card" key={item.id}>
              <p>"{item.text}"</p>
              <h3>- {item.author}</h3>
              <button onClick={() => deleteQuote(item.id)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;