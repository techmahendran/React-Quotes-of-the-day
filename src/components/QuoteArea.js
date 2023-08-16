const QuoteArea = ({ quoteContent }) => {
  return (
    <>
      <div className="Quote">
        <div className="content">
          <div className="quote_area">
            <i className="fa fa-quote-left"></i>
            <p className="quote">{quoteContent.content}</p>
            <i className="fa fa-quote-right"></i>
          </div>

          <div className="author_name">
            <span>
              -- by <span className="author">{quoteContent.author}</span>{" "}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuoteArea;
