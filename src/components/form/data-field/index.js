import {Field} from 'react-final-form'

import './styles.scss';
import Switcher from "./switcher/switcher";
import {useState} from "react";

const getOptions = (selectOptions) => {
  return (
    <>
      <option value={'default'}>--Вибрати--</option>
      {selectOptions.map((optionItem) => (
        <option key={optionItem.id} value={optionItem.id}>{optionItem.title}</option>
      ))}
    </>
  )
}

export const DataField = ({
  title,
  type,
  name,
  component,
  placeholder,
  required,
  withSwitcher,
  selectOptions,
  validationFunctions,
  context,
  contextDisabled,
}) => {
  const currTitle = title && required ? title + '*' : title;
  const currPlaceholder = placeholder && required ? placeholder + '*' : placeholder;

  const [isSwitch, setIsSwitch] = useState(false);

  const validate = (validators) => value => {
    return validators.reduce((error, validator) => error || validator(value), undefined)
  }

  return (
    <div className={'field-wrapper'}>
      {component === 'select' ? (
        <Field
          className={'input-container'}
          name={name}
          component={component}
          placeholder={currPlaceholder}
          validate={validate(validationFunctions)}
        >
          {({input, meta}) => (
            <>
              <div className={`field-container ${meta.touched && meta.error ? 'error' : ''}`}>
                <label>{currTitle}</label>
                <div className={'field'}>
                  <select {...input} placeholder={currPlaceholder}>
                    {getOptions(selectOptions)}
                  </select>
                  {meta.touched && meta.error && <i className="fa-regular fa-circle-exclamation"/>}
                  {withSwitcher && <Switcher onChange={setIsSwitch} />}
                </div>
              </div>
              <div className={'error-container'}>
                {meta.touched && meta.error && (
                  <span className={'error-text'}>{meta.error}</span>
                )}
              </div>
            </>
          )}
        </Field>
      ) : (
        <Field
          className={'input-container'}
          name={name}
          component={component}
          type={type}
          validate={validate(validationFunctions)}
        >
          {({input, meta}) => (
            <>
              <div className={`field-container ${!isSwitch && meta.touched && meta.error ? 'error' : ''}`}>
                <label>{currTitle}</label>
                <div className={'field'}>
                  {
                    component === 'textarea' ?
                      (<textarea {...input} disabled={isSwitch} placeholder={currPlaceholder}/>)
                        :
                      (<input {...input} disabled={isSwitch} placeholder={currPlaceholder}/>)
                  }
                  {!isSwitch && meta.touched && meta.error && <i className="fa-regular fa-circle-exclamation"/>}
                  {withSwitcher && <Switcher onChange={setIsSwitch} />}
                </div>
              </div>
              <div className={'error-container'}>
                {!isSwitch && meta.touched && meta.error && (
                  <span className={'error-text'}>{meta.error}</span>
                )}
              </div>
            </>
          )}
        </Field>
      )
      }
      {(context || (contextDisabled && isSwitch)) && (
        <div className={'context-container'}>
          <span className={'context-text'}>{contextDisabled || context}</span>
        </div>
      )}
    </div>
  )
}