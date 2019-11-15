import '@storybook/addon-options/register'
import '@storybook/addon-knobs/register'
import '@storybook/addon-actions/register'
import '@storybook/addon-viewport/register'
import 'storybook-addon-i18next/register'
// import 'storybook-addon-styled-component-theme/dist/src/register'
import addons from '@storybook/addons'
import registerRedux from 'addon-redux/register'
registerRedux(addons)
