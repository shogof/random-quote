import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaCheck } from 'react-icons/fa';
import './QuoteMachine.css';

function QuoteMachine() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [bgImage, setBgImage] = useState('');
  const [copied, setCopied] = useState(false);

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
      const quotesData = response.data;
      const randomQuote = quotesData.quotes[Math.floor(Math.random() * quotesData.quotes.length)];

      setQuote(randomQuote.quote);
      setAuthor(randomQuote.author);
      setCopied(false);
    } catch (error) {
      alert('Error fetching quotes:', error);
    }
  };

  const images = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg', 'bg4.jpg', 'bg5.jpeg', 'bg6.jpg', 'bg7.png'];

  const setRandomBackgroundImage = () => {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setBgImage(`/images/${randomImage}`);
  };

  useEffect(() => {
    fetchQuote();
    setRandomBackgroundImage();

    const intervalId = setInterval(() => {
      setRandomBackgroundImage();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const copyQuoteToClipboard = () => {
    const textToCopy = `'${quote}' — ${author}`;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        alert('Failed to copy quote:', err);
      });
  };

  return (
    <div
      className="quote-machine"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1>Quote Machine</h1>
      <div className="quote-box" id="quote-box">
        <div className="quote-text">
          <p id="text">{quote}</p>
        </div>
        <div className="quote-author">
          <p>
            <span id="author">
              {author}
            </span>
          </p>
        </div>
        <div className="button-container">
          <button
            type="button"
            className="button"
            id="new-quote"
            onClick={fetchQuote}
          >
            New quote
          </button>
          <button
            className="button"
            type="button"
            id="copy-quote"
            onClick={copyQuoteToClipboard}
          >
            {copied ? <FaCheck className="check-icon" /> : 'Copy Quote'}
          </button>
          <a
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}" — ${author}`)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Tweet Quote
          </a>
        </div>
      </div>
    </div>
  );
}

export default QuoteMachine;
