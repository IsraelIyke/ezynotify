export default function FAQ(props) {
  return (
    <div className="faq-container">
      <div className="faq-container-question">{props.question}</div>
      <div className="faq-container-answer">{props.answer}</div>
    </div>
  );
}
