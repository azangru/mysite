import React from 'react'; // a dependency of Gatsby
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default class Book extends React.Component {

  get bookCoverContainer() {
    return styled.div`
      width: 250px;
      height: 400px;
    `;
  }

  get bookCoverContainerFlippable() {
    let BookCoverContainer = this.bookCoverContainer;
    return BookCoverContainer.extend`
      perspective: 1000px;
    `;
  }

  get bookCover() {
    return styled.div`
      position: relative;
    `;
  }

  get bookCoverFlippable() {
    let BookCover = this.bookCover;
    return BookCover.extend`
      transform-style: preserve-3d;
      transition: 0.6s;

      &:hover {
        transform: rotateY(180deg);
      }
    `;
  }

  get bookCoverFrontSide() {
    return styled.div`
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      position: absolute;
      top: 0;
      left: 0;
    `;
  }

  get bookCoverBackSide() {
    // same as FrontSide, but already rotated
    return styled.div`
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      position: absolute;
      top: 0;
      left: 0;
      transform: rotateY(180deg);
    `;
  }

  render() {
    const Book = styled.div`
      height: 400px;
      display: flex;
      align-items: center;
    `;

    return (
      <Book>
        { this.renderBookCover() }
        { this.renderBookDescription() }
      </Book>
    );
  }

  renderBookCover() {
    const { book: { imageFront, imageBack } } = this.props;
    const isFlippable = Boolean(imageBack);

    const BookCoverContainer = isFlippable ? this.bookCoverContainerFlippable : this.bookCoverContainer;
    const BookCover = isFlippable ? this.bookCoverFlippable : this.bookCover;

    const FrontSide = this.bookCoverFrontSide;
    const BackSide = this.bookCoverBackSide;

    const frontImagePath = require(`../static/images/book-covers/${imageFront}`);
    const backImagePath = isFlippable && require(`../static/images/book-covers/${imageBack}`);

    return (
      <BookCoverContainer>
        <BookCover>
          <FrontSide>
            <img src={frontImagePath} />
          </FrontSide>
          {
            isFlippable &&
            <BackSide>
              <img src={backImagePath} />
            </BackSide>
          }
        </BookCover>
      </BookCoverContainer>
    );
  }

  renderBookDescription() {
    const {
      authors,
      title,
      publishingInfo,
      commentary
    } = this.props.book;

    const BookDescription = styled.div`
      max-width: calc(960px - 250px);
      padding-left: 50px;
    `;

    const Authors = styled.span`
      font-style: italic;
    `;

    const Title = styled.span`
      font-weight: bold;
    `;

    const PublishingInfo = styled.span``;

    const Commentary = styled.div`
      font-size: 1.5rem;
      margin-top: 1rem;
    `;

    return (
      <BookDescription>
        { authors && <Authors>{authors}. </Authors> }
        { title && <Title>{title}. </Title> }
        { publishingInfo && <PublishingInfo>{publishingInfo}. </PublishingInfo> }
        { commentary && <Commentary>{commentary}</Commentary> }
      </BookDescription>
    );
  }

}


Book.propTypes = {
  book: PropTypes.shape({
    authors: PropTypes.string,
    title: PropTypes.string.isRequired,
    publishingInfo: PropTypes.string,
    commentary: PropTypes.string,
    imageFront: PropTypes.string,
    imageBack: PropTypes.string
  })
};
