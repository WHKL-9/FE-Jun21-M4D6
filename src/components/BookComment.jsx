import { Component } from "react";
import { Form, Button } from "react-bootstrap";

export default class BookComment extends Component {
  state = {
    comment: "",
    rate: 1,
  };

  submitComment = async (e) => {
    e.preventDefault();
    try {
    await fetch('https://striveschool-api.herokuapp.com/api/comments',{
        method: "Post", 
        body: JSON.stringify({
            ...this.state

        })
    })
    } catch (error) {
      console.log(error);
    }
  };

//   componentDidMount(){
//       this.submitComment();
//   }

  render() {
    return (
      <Form onSubmit={this.submitComment} className="mb-5">
    
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Comment</Form.Label>
          <Form.Control
            type="textarea"
            placeholder="Comment"
            onChange={(e) => {
              this.setState({ comment: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Rate</Form.Label>
          <select
            onChange={(e) => {
              this.setState({ rate: e.target.value });
            }}
            className="form-control"
            placeholder="rate"
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
