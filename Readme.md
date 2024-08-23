# Random Quote Machine 🗨️✨

## Project Description 📝

> ### 🎨 **Random Quote Machine** 🧠
is a React-based application that generates random quotes from a public API. It features dynamic background images that change every 5 seconds, and includes functionality to copy quotes to the clipboard. The app is designed with an intuitive interface and smooth animations for an engaging user experience.

## [Live Demo](https://random-quote-9wrr1iinq-shogofs-projects.vercel.app/) 🎥

## Demo 📸

![Quote Machine Screenshot](public/images/sc.jpg)

## Technologies Used 🛠️

- [React](https://reactjs.org/): JavaScript library for building user interfaces.
- [Axios](https://axios-http.com/): Promise-based HTTP client for the browser and Node.js.
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS): Styling the application with custom CSS.
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML): Provides the basic structure and content of the web application.

## Installation 💻

To set up the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone git@github.com:yourusername/random-quote.git
   ```

2. **Navigate to project directory:**
   ```bash
   cd random-quote
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm start
   ```

   Open `http://localhost:3000` in your web browser to view the app.

## Usage 🎯

1. **Fetch a new quote:**
   Click the "New Quote" button to generate a new random quote.

2. **Copy quote to clipboard:**
   Click the "Copy Quote" button to copy the current quote and author to your clipboard.

3. **Background Image:**
   The background image changes every 5 seconds automatically.

## Code Overview 📂

### `QuoteMachine.js`

- **State Management:**
  - `quote`: Stores the current quote.
  - `author`: Stores the current quote's author.
  - `bgImage`: Stores the current background image URL.
  - `copied`: Boolean to handle the clipboard copy status.

- **fetchQuote Function:**
  Fetches a random quote from the API and updates the `quote` and `author` states.

- **setRandomBackgroundImage Function:**
  Chooses a random background image from a predefined list and sets it as the `bgImage`.

- **useEffect Hook:**
  Initializes the quote and background image on component mount and sets up an interval to change the background image every 5 seconds.

- **copyQuoteToClipboard Function:**
  Copies the current quote and author to the clipboard and updates the `copied` state.

## Author 👩‍💻

- **LinkedIn:** [LinkedIn Profile](www.linkedin.com/in/shegofa-developer-aa362030b)
- **Email:** shogofadeveloper12@gmail.com
- **GitHub:** [GitHub Profile](https://github.com/shogof)

## Contributing 🤝

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. **Fork the repository** on GitHub.
2. **Clone your fork** to your local machine:
   ```bash
   git clone https://github.com/shogof/random-quote/tree/random-quote
   ```
3. **Create a new branch** for your changes:
   ```bash
   git checkout -b feature/your-feature
   ```
4. **Make your changes** and **commit** them:
   ```bash
   git commit -am 'Add your feature'
   ```
5. **Push** your changes:
   ```bash
   git push origin feature/your-feature
   ```
6. **Submit a pull request** on GitHub.

## Feedback and Support 💬

If you have any questions, feedback, or need support, feel free to reach out via:

- **Issues:** [GitHub Issues](https://github.com/shogof/random-quote/issues)
- **Email:** [email](shogofadeveloper12@gmail.com)
