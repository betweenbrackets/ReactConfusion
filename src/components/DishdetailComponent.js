import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

export class DishDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderDish(dish) {
    if (dish != null)
      return (
        <div className="col-sm-12 col-md-5 m-1">
          {" "}
          <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    else return <div />;
  }
  renderComments = dish => {
    const comments = dish.comments;
    if (comments !== null)
      return (
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          <ul className="list-unstyled">
            {comments.map(comment => {
              return (
                <li key={comment.id}>
                  <p>{comment.comment}</p>
                  <p>
                    {" "}
                    -- {comment.author},{" "}
                    {new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit"
                    }).format(new Date(Date.parse(comment.date)))}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      );
    else return <div />;
  };

  render() {
    if (this.props.dish != null) {
      return (
        <div className="row">
          {this.renderDish(this.props.dish)}
          {this.renderComments(this.props.dish)}
        </div>
      );
    } else {
      return <div>None</div>;
    }
  }
}
export default DishDetail;
