import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BookCoverContainer = styled.div`
  width: 250px;
  height: 400px;

  @media screen and (max-width: 767px) {
    margin-bottom: 1rem;
  }
`;

const BookCoverContainerFlippable = styled(BookCoverContainer)`
  perspective: 1000px;
`;

const BookCover = styled.div`
  position: relative;
`;

const BookCoverFlippable = styled(BookCover)`
  transform-style: preserve-3d;
  transition: 0.6s;

  ${BookCoverContainerFlippable}:hover & {
    transform: rotateY(180deg);
  }
`;

const BookCoverFrontSide = styled.div`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
`;

const BookCoverBackSide = styled(BookCoverFrontSide)`
  transform: rotateY(180deg);
`;

export default class Book extends React.Component {

  render() {
    const Book = styled.div`
      height: 400px;
      display: flex;
      align-items: center;
      margin-bottom: 1rem;

      @media screen and (max-width: 767px) {
        width: 100%;
        height: auto;
        flex-direction: column;
        margin-bottom: 3rem;
      }
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

    const Container = isFlippable ? BookCoverContainerFlippable : BookCoverContainer;
    const Cover = isFlippable ? BookCoverFlippable : BookCover;

    const FrontSide = BookCoverFrontSide;
    const BackSide = BookCoverBackSide;

    const frontImagePath = require(`../static/images/book-covers/${imageFront}`);
    const backImagePath = isFlippable && require(`../static/images/book-covers/${imageBack}`);

    return (
      <Container>
        <Cover>
          <FrontSide>
            <img src={frontImagePath} />
          </FrontSide>
          {
            isFlippable &&
            <BackSide>
              <img src={backImagePath} />
            </BackSide>
          }
        </Cover>
      </Container>
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

      @media screen and (max-width: 767px) {
        padding-left: 0;
        max-width: 300px;
        align-self: flex-start;
      }
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
