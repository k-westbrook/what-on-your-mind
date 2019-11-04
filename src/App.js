import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import AddCommentForm from './AddCommentForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: []
    }
    this.postComment = this.postComment.bind(this);
    this.getComments = this.getComments.bind(this);
  }

  async getComments() {
    let comments = await axios.get("https://hyn85bep64.execute-api.us-west-1.amazonaws.com/Prod");

    this.setState({ comments: comments.data.body.comments })
  };

  async postComment(evt) {
    evt.preventDefault();

    let category = evt.target.category.value;
    let comment = evt.target.comment.value;
    let dateObject = new Date();
    let date = `${dateObject.getMonth() + 1}/${dateObject.getDate()}/${dateObject.getFullYear()}`;


    let commentResult = await axios.post('https://qjc3b7wwnd.execute-api.us-west-1.amazonaws.com/Prod', { category, comment, date: Date.now() });

    console.log(commentResult.data.body.comment)

  }
  componentDidMount() {
    this.getComments();
  }



  render() {

    return (
      <div className="App" >
        <h5>What's on your mind?</h5>
        {this.state.comments.map(comment => {
          return (
            <div>
              {comment.category}: {comment.comment}
            </div>
          )
        })

        }
        <div>
          <AddCommentForm postComment={this.postComment} />
        </div>

      </div >
    );
  }
}

export default App;
