import "bootstrap/dist/css/bootstrap.min.css";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const DEFAULT_QUOTE = {
    id: 1,
    quote:
      "Sometimes, not getting what you want is a wonderful stroke of luck.",
    author: "Dalai Lama",
  };
  const [quoteList, setQuoteList] = useState([]);
  const [quote, setQuote] = useState(DEFAULT_QUOTE);

  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then((res) => res.json())
      .then((data) => setQuoteList(data.quotes));
  }, []);

  const quoteGenerator = () => {
    const randomNumber = Math.floor(Math.random() * 30);
    setQuote(quoteList[randomNumber]);
  };

  return (
    <div id="quote-box">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title" id="text">
            <FaQuoteLeft /> {quote.quote} <FaQuoteRight />
          </h4>
          <p className="card-text" id="author">
            - {quote.author}
          </p>
          <div>
            <a
              href="https://x.com/"
              target="_blank"
              className="btn btn-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-twitter-x"
                viewBox="0 0 16 16"
              >
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
              </svg>
            </a>
            <button
              id="new-quote"
              className="btn btn-primary"
              onClick={quoteGenerator}
            >
              New Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
