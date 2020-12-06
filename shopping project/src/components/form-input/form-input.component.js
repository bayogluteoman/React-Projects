import React from 'react';
import './form-input.styles.scss';

const FormInput = ({handeChange,label, ...otherProps}) =>(
<div className="group">
    <input className='form-input' onChange={handeChange} {...otherProps}/>
    {
        label ?
        (<label className={`${otherProps.value.length ? 'shrink': ''} form-input-label`}>
            {label}
        </label>)
        :null
    }

</div>
)
export default FormInput;