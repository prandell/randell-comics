import React, { FC } from 'react'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import { ICartItem } from '../../models/cart.models'
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.slice'
import { useAppSelector } from '../../store/hooks'
import * as Styled from './checkout.styles'

const Checkout: FC = () => {
  const cartTotal = useAppSelector(selectCartTotal)
  const cartItems = useAppSelector(selectCartItems)
  return (
    <Styled.CheckoutContainer>
      <Styled.CheckoutHeader>
        <Styled.HeaderColumn>
          <span>Product</span>
        </Styled.HeaderColumn>
        <Styled.HeaderColumn>
          <span>Description</span>
        </Styled.HeaderColumn>
        <Styled.HeaderColumn>
          <span>Quantity</span>
        </Styled.HeaderColumn>
        <Styled.HeaderColumn>
          <span>Price</span>
        </Styled.HeaderColumn>
        <Styled.HeaderColumn>
          <span>Remove</span>
        </Styled.HeaderColumn>
      </Styled.CheckoutHeader>
      {cartItems.map((i: ICartItem) => (
        <CheckoutItem key={i.product.id} cartItem={i} />
      ))}
      <Styled.Total>{`Total: $${cartTotal}`}</Styled.Total>
    </Styled.CheckoutContainer>
  )
}

export default Checkout
