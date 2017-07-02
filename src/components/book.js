import React from 'react'; // a dependency of Gatsby
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default class Book extends React.Component {

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

    const BookCoverContainer = styled.div`
      width: 250px;
      height: 400px;
      perspective: 1000px;
    `;

    const BookCover = styled.div`
      position: relative;
      transform-style: preserve-3d;
      transition: 0.6s;

      &:hover {
        transform: rotateY(180deg);
      }
    `;

    const FrontSide = styled.div`
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      position: absolute;
      top: 0;
      left: 0;
    `;

    // same as FrontSide, but already rotated
    const BackSide = styled.div`
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      position: absolute;
      top: 0;
      left: 0;
      transform: rotateY(180deg);
    `;

    const frontImagePath = require(`../static/images/book-covers/${imageFront}`);
    const backImagePath = require(`../static/images/book-covers/${imageBack}`);

    return (
      <BookCoverContainer>
        <BookCover>
          <FrontSide>
            <img src={frontImagePath} />
          </FrontSide>
          <BackSide>
            <img src={backImagePath} />
          </BackSide>
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
