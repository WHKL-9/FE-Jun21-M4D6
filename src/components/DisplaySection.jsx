import {Row, Col, Container } from "react-bootstrap";
import { Component } from "react";
import RowOfBooks from "./RowOfBooks";
import historybooks from "./Data/history.json";
import BookComment from "./BookComment";

class DisplaySetion extends Component {
  state = {
    books: historybooks,
  };

  render() {
    return (
      <Container>
        <h3>Best of History</h3>
        <Row>
            <Col md={10} lg={10}>
            <RowOfBooks books={this.state.books} />
            </Col>
            <Col>
            <BookComment/>
            </Col>
        </Row>
      </Container>
    );
  }
}

export default DisplaySetion;
