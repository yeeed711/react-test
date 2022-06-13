import { Link } from "react-router-dom";
import styled from "styled-components";

const Section = styled.section`
  height: 250px;
  background-color: #282c35;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding-top: 20px;
  & h2 {
    color: #62dafd;
    font-size: 48px;
    font-weight: bold;
  }
  & span {
    font-weight: lighter;
    color: #fff;
    font-size: 24px;
  }
`;

const StartBtn = styled.button`
  background-color: #62dafd;
  border: none;
  padding: 10px 25px;
  font-size: 16px;
  &:hover {
    cursor: pointer;
  }
`;

const TutorialLink = styled(Link)`
  color: #62dafd;
  text-decoration: none;
  margin-left: 20px;
`;

function FirstSection() {
  return (
    <Section>
      <h2>React</h2>
      <span>사용자 인터페이스를 만들기 위한 JavaScript 라이브러리</span>
      <div>
        <StartBtn>시작하기</StartBtn>
        <TutorialLink to="/Tutorial">자습서 읽어보기 > </TutorialLink>
      </div>
    </Section>
  );
}

export default FirstSection;
