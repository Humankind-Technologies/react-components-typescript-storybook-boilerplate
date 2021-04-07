import styled from "styled-components";
import React from "react";

type ButtonPropsSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: ButtonPropsSize,
}
const paddingSizes: { [key in ButtonPropsSize] : number; } = {
    small:4,
    large:16,
    medium:8,
};

const paddingSize = (size?:ButtonPropsSize):string => `${paddingSizes[size || 'medium']}px`

export default  styled.button<ButtonProps>`
      padding: ${props => paddingSize(props.size)};
    `;
