import { ListGroup } from "react-bootstrap";
import { Component } from "react";
import "./RowOfBooks.css";
import BookComment from "./BookComment";
import { Row, Col } from "react-bootstrap";

class RowOfBooks extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Col md={8} lg={8} className="d-flex flex-column">
        {this.props.books.map((book) => (
          <>
            <ListGroup>
              <ListGroup.Item
                key={book.asin}
                onClick={() =>
                  this.setState({ selected: !this.state.selected })
                }
                className="bookList"
              >
                <img src={book.img} />
                {book.title}
              </ListGroup.Item>
            </ListGroup>
            {/* <Col md={4} lg={4}>
              {this.state.selected && <h3>Title: {book.title}</h3>}
              {this.state.selected && <BookComment/>}

            </Col> */}
          </>
        ))}
      </Col>
    );
  }
}

export default RowOfBooks;

// {/* <ListGroup.Item>Books</ListGroup.Item> */}
