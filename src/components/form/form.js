import {Form} from 'react-final-form'
import {formData} from "./form-data/form-data";
import {DataField} from "./data-field";

import './styles.scss';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const FormContainer = () => {
  const onSubmit = async values => {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
  }

  return (
    <div className={'form-wrapper'}>
      <Form
        onSubmit={onSubmit}
        //initialValues={{ stooge: 'larry', employed: false }}
        render={({handleSubmit, form, submitting, pristine, values}) => (
          <form onSubmit={handleSubmit}>
            {formData.map((formItem) => (
              <div className={'subform'} key={formItem.id}>
                <div className={'subform-header'}>
                  <span>{formItem.headerName}</span>
                </div>
                {formItem.subFormData.map((subFormItem) => (
                  <div key={subFormItem.id} className={subFormItem.className}>
                    {
                      subFormItem.data.map((item) => (
                        <DataField
                          key={item.id}
                          name={item.name}
                          component={item.component}
                          type={item.type}
                          title={item.title}
                          placeholder={item.placeholder}
                          required={item.required}
                          withSwitcher={item.withSwitcher}
                          selectOptions={item.selectOptions}
                          context={item.context}
                          contextDisabled={item.contextDisabled}
                          validationFunctions={item.validationFunctions}
                        />
                      ))
                    }
                  </div>
                ))}
              </div>
            ))}
          </form>
        )}
      />
    </div>
  )
}

export default FormContainer;