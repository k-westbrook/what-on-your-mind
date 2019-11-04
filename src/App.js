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
  }

  async getComments() {
    let comments = await axios.get("https://hyn85bep64.execute-api.us-west-1.amazonaws.com/Prod");

    this.setState({ comments: comments.data.body.comments })
  };



  render() {
    this.getComments();
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
          <AddCommentForm />
        </div>

      </div >
    );
  }
}

export default App;
