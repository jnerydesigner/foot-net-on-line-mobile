import styled from 'styled-components/native';


interface ColorProps {
  themeColorBG: string;
}

interface FontProps {
  font: string;
  color?: string;
  isLight?: boolean;
}

interface ButtonProps {
  color?: string;
  isLight?: boolean;
}

interface ThemeProps {
  colorBorder?: string;
}


export const Container = styled.View<ColorProps>`
  flex: 1;
  background: ${p => p.themeColorBG};
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text<FontProps>`
  font-family: ${p => p.font};
  font-size: 22px;
  text-align: center;
  color: ${p => (!p.isLight) ? '#000' : p.color};
`;

export const SubTitle = styled.Text<FontProps>`
  font-family: ${p => p.font};
  font-size: 14px;
  text-align: center;
  color: ${p => (!p.isLight) ? '#000' : p.color};
`;

export const InputViewApp = styled.View<ThemeProps>`
  border-color: ${p => (p.colorBorder) !== '' ? '#000' : p.colorBorder};
  border-width: 1px;
  border-style: solid;
  border-radius: 8px;
  height: 48px;
  width: 80%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 10px;
  margin-top: 5px;
`;

export const InputViewAppDigit = styled.TextInput`
  height: 48px;
  width: 80%;
  align-items: center;
  justify-content: center;
  border: transparent;
`;

export const ImgApp = styled.Image`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
`;

export const BtnLogin = styled.TouchableOpacity<ButtonProps>`
  height: 48px;
  width: 80%;
  align-items: center;
  justify-content: center;
  background-color: ${p => (!p.isLight) ? '#000' : p.color};
  border-radius: 8px;
`;
export const BtnLoginText = styled.Text<ButtonProps>`
  color: ${p => (!p.isLight) ? '#000' : p.color};
  font-size: 18px;
`;
