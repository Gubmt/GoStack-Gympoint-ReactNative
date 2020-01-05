import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background: #f5f5f5;
`;

export const AnswerBox = styled.View`
  height: auto;
  width: 100%;
  padding: 15px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const QuestionHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #444;
`;

export const Time = styled.Text`
  font-size: 14px;
  color: #666;
`;

export const Content = styled.Text`
  margin: 15px 0;
  font-size: 14px;
  color: #666;
`;

export const AnswerHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
