import React from 'react'
import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import ThemeToggle from '../../components/theme-toggle/theme-toggle.component'
import { selectCartOpen } from '../../store/cart/cart.slice'
import { useAppSelector } from '../../store/hooks'
import { useGetPokemonByNameQuery } from '../../store/pokemon/pokemon.api.slice'
import { selectCurrentUser } from '../../store/user/user.slice'
import { signOutAuthUser } from '../../utils/firebase/firebase.utils'
import {
  NavigationBarContainer,
  NavLinks,
  LogoContainer,
  Logo,
  NavLink
} from './navigation-bar.styles'

const NavigationBar = () => {
  const currentUser = useAppSelector(selectCurrentUser)
  const cartOpen = useAppSelector(selectCartOpen)

  const { data, error, isLoading } = useGetPokemonByNameQuery('gengar')
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('gengar')

  const signOutHandler = async (): Promise<void> => {
    await signOutAuthUser()
  }
  return (
    <Fragment>
      <NavigationBarContainer>
        <LogoContainer to="/">
          <Logo alt={'Randell Comics Logo'} src={'randell-comics-filled.png'} />
        </LogoContainer>
        {isLoading ? (
          <span>Gengar is loading...</span>
        ) : (
          <img src={data.sprites.front_default} alt="gengar" />
        )}
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser.email ? (
            <NavLink as="span" onClick={signOutHandler}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <ThemeToggle />
          <CartIcon />
        </NavLinks>
        {cartOpen && <CartDropdown />}
      </NavigationBarContainer>
      <Outlet />
    </Fragment>
  )
}

export default NavigationBar
