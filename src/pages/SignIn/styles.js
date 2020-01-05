import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  height: 100%;
  background: #fff;
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LogoEsq = styled.Image`
  left: 10px;
`;

export const LogoDir = styled.Image`
  left: -10px;
`;

export const LogoText = styled.Text`
  font-size: 23px;
  font-weight: bold;
  color: #ee4d64;
  margin-top: 9px;
`;

export const FormInput = styled.TextInput`
  height: 45px;
  width: 325px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-top: 20px;
  padding-left: 20px;
`;

export const FormButton = styled(RectButton)`
  height: 45px;
  width: 325px;
  background: #EE4E62;
  border: 0;
  border-radius: 4px;
  margin-top: 15px;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;
