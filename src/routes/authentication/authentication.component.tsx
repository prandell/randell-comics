import React, { ReactElement } from 'react'
import SignInForm from '../../components/sign-in-form/sign-in-form.component'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component'
import * as Styled from './authentication.styles'

function Authentication(): ReactElement {
  return (
    <Styled.AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </Styled.AuthenticationContainer>
  )
}

export default Authentication
