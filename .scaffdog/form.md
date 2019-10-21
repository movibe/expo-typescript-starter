---
name: "form"
description: "form container template"
message: "Please enter the name of component to be created"
root: "src/containers"
output: "**/*"
ignore: []
---

# `{{ input | pascal }}Form/index.tsx`

```tsx
import React, { useState, Fragment } from 'react'
import { Button, TextInput, HelperText } from 'react-native-paper'
import useForm from 'react-hook-form'
import { useTranslation } from 'react-i18next'

type FormData = {
  email: string
  password: string
}
interface IProps {
  loading?: boolean
  onSubmit: (form: FormData) => void
  onFacebook?: () => void
}

export const {{ input | pascal }}Form: React.FC<IProps> = ({
  onSubmit,
  onFacebook,
  loading
}) => {
  const { t } = useTranslation()
  const [Form, setForm] = useState({
    email: '',
    password: ''
  })

  const { register, handleSubmit, errors, setValue } = useForm<FormData>()

  const submit: any = handleSubmit((form: FormData) => {
    onSubmit(form)
  })

  const inputChange = (field: any) => (value: string) => {
    setForm({
      ...Form,
      [field]: value
    })
    setValue(field, value, true)
  }

  return (
    <Fragment>
      <TextInput
        //@ts-ignore
        ref={register(
          { name: 'email' },
          {
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'invalid email address'
            },
            required: true
          }
        )}
        mode="outlined"
        label={t('form.email')}
        disabled={loading}
        value={Form.email}
        error={!!errors.email}
        onChangeText={inputChange('email')}
      />
      <HelperText type="error" visible={!!errors.email}>
        {t('form.emailRequired')}
      </HelperText>

      <TextInput
        //@ts-ignore
        ref={register(
          { name: 'password' },
          {
            minLength: 5,
            required: true
          }
        )}
        mode="outlined"
        label={t('form.password')}
        value={Form.password}
        disabled={loading}
        error={!!errors.password}
        onChangeText={inputChange('password')}
      />
      <HelperText type="error" visible={!!errors.password}>
        {t('form.required')}
      </HelperText>

      <Button
        mode="contained"
        disabled={loading}
        loading={loading}
        onPress={submit}
      >
        {t('form.submit')}
      </Button>

    </Fragment>
  )
}


```

# `{{ input | pascal }}Form/{{ input | pascal }}Form.story.tsx`

```jsx
import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { {{ input | pascal }}Form } from './index'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { StoryContainer } from 'containers'
import { withRedux } from 'helpers'

storiesOf('Containers', module)
  .addDecorator(withKnobs)
  .addDecorator(withRedux())
  .add('{{ input | pascal }}Form', () => (
    <StoryContainer>
      <{{ input | pascal }}Form
        loading={boolean('loading', false)}
        onFacebook={action('onFacebook')}
        onSubmit={action('onSubmit')}
      />
    </StoryContainer>
  ))


```

# `{{ input | pascal }}Form/__tests__/{{ input | pascal }}Form.test.tsx`

```jsx
import React from "react";
import renderer from "react-test-renderer";
import "react-native";
import { {{ input | pascal }}Form } from "../";

it("renders correctly", () => {
  const tree = renderer.create(<{{ input | pascal }} />).toJSON();

  expect(tree).toMatchSnapshot();
});
```
