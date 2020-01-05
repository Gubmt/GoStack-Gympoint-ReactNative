import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background: #f5f5f5;
`;

export const InputQuestion = styled.TextInput.attrs({
  multiline: true,
  textAlignVertical: 'top',
  placeholder: 'Inclua seu pedido de auxílio',
})`
  height: 300px;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #fff;
`;

export const SendButton = styled(RectButton)`
  height: 45px;
  width: 100%;
  background: #ee4e62;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;
