import React from 'react';
import { CustomButtonContainer } from './custom-buton.styles';

const CustomButton = ({ children, ...props }) => (
    <CustomButtonContainer {...props}>
      {children}
    </CustomButtonContainer>
);
 
export default CustomButton;

