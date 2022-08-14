import Wrapper from '../assets/wrappers/JobInfo';

function BookInfo({ icon, text }) {
  return (
    <Wrapper>
      <span className="icon">{icon}</span>
      <span className="text">{text}</span>
    </Wrapper>
  );
}

export default BookInfo;
