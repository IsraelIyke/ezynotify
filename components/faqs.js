export default function FAQ(props) {
  return (
    <div className="faq-container" id={props.id}>
      <div className="faq-container-question">{props.question}</div>
      <div className="faq-container-answer">{props.answer}</div>
    </div>
  );
}
