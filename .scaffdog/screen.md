---
name: "screen"
description: "screen component template"
message: "Please enter the name of component to be created"
root: "src/screens"
output: "**/*"
ignore: []
---

# `{{ input | pascal }}Screen/index.tsx`

```tsx
import React from 'react'
import { Title } from 'react-native-paper'
import { AppPage } from 'components'
import { useTranslation } from 'react-i18next'

interface IProps {}

export const {{ input | pascal }}Screen: React.FC<IProps> = () => {
  const { t } = useTranslation()
  return (
    <AppPage title={t('hello_world')} padding>
      <Title>{t('hello_world')}</Title>
    </AppPage>
  )
}
export default {{ input | pascal }}Screen

```

# `{{ input | pascal }}Screen/{{ input | pascal }}Screen.story.tsx`

```jsx
import * as React from 'react'
import { storiesOf } from '@storybook/react'
import {{ input | pascal }}Screen from './index'
import { withKnobs } from '@storybook/addon-knobs'
import { withRedux } from 'helpers'

storiesOf('Screens', module)
  .addDecorator(withKnobs)
  .addDecorator(withRedux())
  .add('{{ input | pascal }}Screen', () => (
    <{{ input | pascal }}Screen />
  ))

```

# `{{ input | pascal }}Screen/__tests__/{{ input | pascal }}Screen.test.tsx`

```jsx
import React from "react";
import renderer from "react-test-renderer";
import "react-native";
import { {{ input | pascal }}Screen } from "../";

it("renders correctly", () => {
  const tree = renderer.create(<{{ input | pascal }}Screen />).toJSON();

  expect(tree).toMatchSnapshot();
});
```
