import React, { FC, ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { ComicCategory } from '../../models/category.models'
import { Product } from '../../models/product.model'
import ProductCard from '../product-card/product-card.component'
import * as Styled from './category-preview.styles'

type CategoryPreviewProps = {
  category: ComicCategory
}

const CategoryPreview: FC<CategoryPreviewProps> = ({
  category
}: CategoryPreviewProps): ReactElement => {
  const { title, items } = category
  return (
    <Styled.CategoryPreviewContainer>
      <Styled.TitleContainer>
        <Link to={title.toLowerCase()}>
          <Styled.Title>{title}</Styled.Title>
        </Link>
      </Styled.TitleContainer>
      <Styled.LineBreak />
      <Styled.Preview>
        {items
          .filter((_, idx) => idx < 4)
          .map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Styled.Preview>
    </Styled.CategoryPreviewContainer>
  )
}

export default CategoryPreview
