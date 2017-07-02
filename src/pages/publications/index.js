import React from "react"; // a dependency of Gatsby
import styled from 'styled-components';

import bookData from './data';

import PageContainer from '../../containers/page-container';
import Book from '../../components/book';

export default class Publications extends React.Component {
  render() {

    return (
      <PageContainer>
        <div>
          { this.renderBooks(bookData.healthSciencesTranslations) }
        </div>
      </PageContainer>
    );
  }

  renderBooks(books) {
    return books.map((bookData, index) => {
      return <Book key={index} book={bookData} />;
    });
  }
}
