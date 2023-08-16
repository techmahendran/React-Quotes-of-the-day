const FooterArea = ({ quoteBtn, quoteText, speakText, copyText }) => {
  return (
    <>
      <footer>
        <div className="btns">
          <button className="speak" title="Speak" onClick={speakText}>
            <i className="fa fa-volume-up"></i>
          </button>
          <button className="copy_text" title="Copy" onClick={copyText}>
            <i className="fa fa-copy"></i>
          </button>
        </div>
        <div
          onClick={quoteBtn}
          className={`quote_btn ${quoteText ? "loading" : ""}`}
        >
          <button>{quoteText ? "Loading..." : "New Quote"}</button>
        </div>
      </footer>
    </>
  );
};

export default FooterArea;
