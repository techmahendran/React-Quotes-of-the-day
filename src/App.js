import QuoteArea from "./components/QuoteArea";
import FooterArea from "./components/FooterArea";

import { useState } from "react";

function App() {
  const [quoteContent, setQuoteContent] = useState({
    content:
      "Dream is not that which you see while sleeping it is something that does not let you sleep",
    author: "Apj Abdul Kalam",
  });

  const [quoteText, setQuoteText] = useState(false);

  const quoteBtn = () => {
    let getQuotes = async () => {
      setQuoteText(true);

      let res = await fetch("https://api.quotable.io/random");
      let data = await res.json();

      setQuoteContent(data);

      setQuoteText(false);
    };
    getQuotes();
  };

  // speakText
  const speakBtn = () => {
    let sentence = new SpeechSynthesisUtterance(
      `${quoteContent.content} by ${quoteContent.author}`
    );
    speechSynthesis.speak(sentence);
  };

  // copyText
  const copyBtn = () => {
    navigator.clipboard.writeText(quoteContent.content);
  };

  return (
    <>
      <div className="Quote_container">
        <h2>quote of the day</h2>

        {/* QuoteArea */}
        <QuoteArea quoteContent={quoteContent} />

        {/* FooterArea  */}
        <FooterArea
          quoteBtn={quoteBtn}
          quoteContent={quoteContent}
          quoteText={quoteText}
          speakText={speakBtn}
          copyText={copyBtn}
        />
      </div>
    </>
  );
}

export default App;
