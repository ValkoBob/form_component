import {messages} from "./validation-messages";

export const formData = [
  {
    id: 1,
    headerName: 'Дані пацієнта',
    subFormData: [
      {
        id: 1,
        className: 'grid-with-three-fraction',
        data: [
          {
            id: 1,
            title: 'Прізвище',
            required: true,
            placeholder: '',
            type: 'text',
            name: 'lastName',
            component: 'input',
            withSwitcher: false,
            selectOptions: [],
            validationFunctions: [
              function (value) {
                return value ? undefined : messages.isEmptyValue;
              }
            ]
          },
          {
            id: 2,
            title: "Ім'я",
            required: true,
            placeholder: '',
            type: 'text',
            name: 'firstName',
            component: 'input',
            withSwitcher: false,
            selectOptions: [],
            validationFunctions: [
              function (value) {
                return value ? undefined : messages.isEmptyValue;
              }
            ]
          },
          {
            id: 3,
            title: "По батькові",
            required: true,
            placeholder: '',
            type: 'text',
            name: 'middleName',
            component: 'input',
            withSwitcher: true,
            selectOptions: [],
            validationFunctions: [
              function (value) {
                return value ? undefined : messages.isEmptyValue;
              }
            ],
            contextDisabled: 'Немає по батькові згідно документів',
          },
          {
            id: 4,
            title: "РНОКПП(ІПН)",
            required: true,
            placeholder: '',
            type: 'number',
            name: 'identificationCode',
            component: 'input',
            withSwitcher: true,
            selectOptions: [],
            validationFunctions: [
              function (value) {
                return value ? undefined : messages.isEmptyValue;
              },
              function (value) {
                return value.length === 9 ? undefined : messages.isUnCorrectSerialNumber;
              }
            ],
            contextDisabled: 'Немає ІПН за віком чи має відмітку у паспорті',
          },
          {
            id: 5,
            title: "Дата народження",
            required: true,
            placeholder: '',
            type: 'date',
            name: 'birthDay',
            component: 'input',
            withSwitcher: false,
            selectOptions: [],
            validationFunctions: [
              function (value) {
                return value ? undefined : messages.isEmptyValue;
              },
            ],
          },
          {
            id: 6,
            title: "Стать",
            required: true,
            placeholder: '',
            type: '',
            name: 'gender',
            component: 'select',
            withSwitcher: false,
            selectOptions: [
              {
                id: 1,
                title: 'жіноча',
              },
              {
                id: 2,
                title: 'чоловіча',
              }
            ],
            validationFunctions: [
              function (value) {
                return value ? undefined : messages.isEmptyValue;
              },
            ],
          },
        ]
      },
      {
        id: 2,
        className: 'grid-with-two-fraction',
        data: [
          {
            id: 7,
            title: "",
            required: true,
            placeholder: 'Країна народження',
            type: 'text',
            name: 'countryBirth',
            component: 'input',
            withSwitcher: false,
            selectOptions: [],
            validationFunctions: [
              function (value) {
                return value ? undefined : messages.isEmptyValue;
              },
            ],
          },
          {
            id: 8,
            title: "",
            required: true,
            placeholder: 'Місце народження',
            type: 'text',
            name: 'placeBirth',
            component: 'input',
            withSwitcher: false,
            selectOptions: [],
            validationFunctions: [
              function (value) {
                return value ? undefined : messages.isEmptyValue;
              },
            ],
          },
          {
            id: 9,
            title: "Бажаний спосіб зв'язку з пацієнтом",
            required: false,
            placeholder: '',
            type: '',
            name: 'methodsCommunication',
            component: 'select',
            withSwitcher: false,
            selectOptions: [
              {
                id: 1,
                title: 'Електронною поштою',
              },
              {
                id: 2,
                title: 'Телефоном',
              }
            ],
            validationFunctions: [
              function (value) {
                return value ? undefined : messages.isEmptyValue;
              },
            ],
          },
          {
            id: 10,
            title: "",
            required: true,
            placeholder: 'Секретне слово(не менше 6 символів)',
            type: 'text',
            name: 'secretWord',
            component: 'input',
            withSwitcher: false,
            selectOptions: [],
            validationFunctions: [
              function (value) {
                return value ? undefined : messages.isEmptyValue;
              },
              function (value) {
                return value < 6 ? undefined : messages.isUnCorrectSecretWord;
              },
            ],
          },
          {
            id: 11,
            title: "Контактний номер телефону",
            required: false,
            placeholder: '+38(__)__-_-_',
            type: 'tel',
            name: 'contanctNumber',
            component: 'input',
            withSwitcher: false,
            selectOptions: [],
            validationFunctions: [
              function (value) {
                return value ? undefined : messages.isEmptyValue;
              },
              function (value) {
              const regExp = /^\+380\d{3}\d{2}\d{2}\d{2}$/;
                return value?.match(regExp) ? undefined : messages.isUnCorrectNumber;
              },
            ],
          },
          {
            id: 12,
            title: "Адреса електронної пошти",
            required: false,
            placeholder: 'example@example.com',
            type: 'email',
            name: 'contanctEmail',
            component: 'input',
            withSwitcher: false,
            selectOptions: [],
            validationFunctions: [
              function (value) {
                return value ? undefined : messages.isEmptyValue;
              },
              function (value) {
                const regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
                return value?.match(regExp) ? undefined : messages.isUnCorrectEmail;
              },
            ],
          },
        ],
      },
    ]
  },
  {
    id: 2,
    headerName: 'Документ, що посвідчує особу',
    subFormData: [
      {
        id: 1,
        className: 'grid-with-two-fraction',
        data: [
          {
            id: 1,
            title: 'Тип документу',
            required: true,
            placeholder: '',
            type: '',
            name: 'documentType',
            component: 'select',
            withSwitcher: false,
            selectOptions: [
              {
                id: 1,
                title: 'Посвідчення особи, яка потребує захисту',
              },
              {
                id: 2,
                title: 'Паспорт(ID-картка)',
              },
              {
                id: 3,
                title: 'Паспорт(книжечка)',
              },
              {
                id: 4,
                title: 'Посвідка на постійне проживання в Україні',
              },
              {
                id: 5,
                title: 'Посвідка біженця',
              },
              {
                id: 6,
                title: 'Посвідка проживання',
              },
              {
                id: 7,
                title: 'Тимчасове посвідчення громадянина України',
              },
            ],
            validationFunctions: [
              function (value) {
                return value ? undefined : messages.isEmptyValue;
              },
            ],
          },
          {
            id: 2,
            title: '',
            required: true,
            placeholder: 'Серія (за наявності), номер',
            type: 'number',
            name: 'serialNumber',
            component: 'input',
            withSwitcher: false,
            selectOptions: [],
            validationFunctions: [
              function (value) {
                return value ? undefined : messages.isEmptyValue;
              },
              function (value) {
                return value === 9 ? undefined : messages.isUnCorrectSerialNumber;
              }
            ],
          },
          {
            id: 3,
            title: 'Коли видано',
            required: true,
            placeholder: '31.12.1971',
            type: 'date',
            name: 'dateExist',
            component: 'input',
            withSwitcher: false,
            selectOptions: [],
            validationFunctions: [
              function (value) {
                return value ? undefined : messages.isEmptyValue;
              },
            ],
          },
          {
            id: 4,
            title: 'Діє до',
            required: false,
            placeholder: '31.12.1971',
            type: 'date',
            name: 'dateTo',
            component: 'input',
            withSwitcher: false,
            selectOptions: [],
            validationFunctions: [
              function (value) {
                return value ? undefined : messages.isEmptyValue;
              }
            ],
          },
          {
            id: 5,
            title: 'Ким видано',
            required: true,
            placeholder: '',
            type: 'text',
            name: 'existByWhom',
            component: 'textarea',
            withSwitcher: false,
            selectOptions: [],
            validationFunctions: [
              function (value) {
                return value ? undefined : messages.isEmptyValue;
              }
            ],
          },
          {
            id: 6,
            title: 'Запис № (УНЗР)',
            required: false,
            placeholder: 'РРРРММДД-ХХХХХ',
            type: 'text',
            name: 'record',
            component: 'input',
            withSwitcher: false,
            selectOptions: [],
            validationFunctions: [
              function (value) {
                return value ? undefined : messages.isEmptyValue;
              },
            ],
            context: 'Вкажіть унікальний номер запису в Демографічному реєстрі (Запис №)'
          },
        ],
      },
    ]
  }
]
