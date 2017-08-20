import React from "react"; // a dependency of Gatsby
import styled from 'styled-components';

import bookData from './data';

import PageContainer from '../../containers/page-container';
import Book from '../../components/book';

export default class Publications extends React.Component {
  get title() {
    const Title = styled.h1`
      text-align: center;
      color: #606060;
      font: 7em 'PT Serif', serif;
    `;

    return <Title>Andrey Azov</Title>;
  }

  render() {
    return (
      <PageContainer>
        <div>
          { this.renderIntroduction() }
          { this.renderMedicalBooks() }
          { this.renderFictionBooks() }
          { this.renderHumanitiesBooks() }
        </div>
      </PageContainer>
    );
  }

  renderIntroduction() {
    return (
      <div>
        <h1>
          Publications
        </h1>
        <p>
          Here, I collected a list of my translations, editorships, and original publications
          (except for the least important or, well, the most embarrassing ones).
        </p>
      </div>
    );
  }

  renderMedicalBooks() {
    const translatedBooks = bookData.healthSciencesTranslations;
    const editedBooks = bookData.healthSciencesEditing;
    const papers = bookData.healthSciencesPapers;

    return (
      <div>
        <h2>Health Sciences</h2>
        <h3>English to Russian translations</h3>
        <div>
          {
            translatedBooks.map((bookData, index) => {
              return <Book key={index} book={bookData} />;
            })
          }
        </div>
        <h3>Editing of Original Russian Medical Books</h3>
        <div>
          {
            editedBooks.map((bookData, index) => {
              return <Book key={index} book={bookData} />;
            })
          }
        </div>
        <h3>Selected research papers</h3>
        <ol>
          { papers.map((paper, index) => <li key={index}>{paper}</li>) }
        </ol>
      </div>
    );
  }

  renderFictionBooks() {
    const translatedBooks = bookData.fictionTranslations;

    return (
      <div>
        <h2>Fiction</h2>
        <h3>English to Russian translations</h3>
        {
          translatedBooks.map((bookData, index) => {
            return <Book key={index} book={bookData} />;
          })
        }
      </div>
    );
  }

  renderHumanitiesBooks() {
    const books = bookData.humanities;
    const { english: englishPapers, russian: russianPapers } = bookData.humanitiesPapers;

    return (
      <div>
        <h2>Humanities</h2>
        {
          books.map((bookData, index) => {
            return <Book key={index} book={bookData} />;
          })
        }
        <h3>Selected papers</h3>
        <h4>In English</h4>
        <ol>
          {
            englishPapers.map((paper, index) => <li key={index}>{paper}</li>)
          }
        </ol>
        <h4>In Russian</h4>
        <ol>
          {
            russianPapers.map((paper, index) => <li key={index}>{paper}</li>)
          }
        </ol>
      </div>
    );
  }

}
