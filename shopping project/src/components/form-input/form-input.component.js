import React from 'react';

import {
    GroupContainer,
    FormInputContainer,
    FormInputLabel
  } from './form-input.styles';

const FormInput = ({handeChange,label, ...props }) =>(
<GroupContainer>
    <FormInputContainer  onChange={handeChange} {...props }/>
    {label ? (
      <FormInputLabel className={props.value.length ? 'shrink' : ''}>
        {label}
      </FormInputLabel>
    ) : null}
 
</GroupContainer>
)

export default FormInput;