import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Amplify } from 'aws-amplify'
import outputs from '../amplify_outputs.json'
import '@aws-amplify/ui-react/styles.css'
import { Authenticator, View } from '@aws-amplify/ui-react'
Amplify.configure(outputs)
const components = {
  Header() {
    return <View textAlign="center" padding={'100px'}></View>
  },
}
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Authenticator components={components}>
      {/* <Authenticator formFields={formFields} components={components}> */}
      <App />
    </Authenticator>
  </React.StrictMode>
)
