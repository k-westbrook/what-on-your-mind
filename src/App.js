import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import AddCommentForm from './AddCommentForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: [],
      loadedContent: false
    }
    this.postComment = this.postComment.bind(this);
    this.getComments = this.getComments.bind(this);
  }

  async getComments() {
    let comments = await axios.get("https://hyn85bep64.execute-api.us-west-1.amazonaws.com/Prod");

    let inOrder = comments.data.body.comments;
    inOrder.sort(function (a, b) { return b.date - a.date });
    this.setState({ comments: inOrder })
  };

  async postComment(evt) {
    evt.preventDefault();

    let category = evt.target.category.value;
    let comment = evt.target.comment.value;
    let dateObject = new Date();
    let printDate = `${dateObject.getMonth() + 1}/${dateObject.getDate()}/${dateObject.getFullYear()}`;


    let commentResult = await axios.post('https://qjc3b7wwnd.execute-api.us-west-1.amazonaws.com/Prod', { category, comment, date: Date.now(), printDate });

    let newComments = [...this.state.comments];
    newComments.unshift(commentResult.data.body.comment);
    this.setState({ comments: newComments })

  }
  componentDidMount() {
    this.getComments();
    this.setState({ loadedContent: true })
  }



  render() {

    return (
      <div className="App" >
        <div className='app-title-header'>
          <h2>What's on your mind?</h2>
        </div>
        {(!this.state.loadedContent) ?
          <div>
            <p>Loading...</p>
          </div>
          :
          <div>
            <div>
              <AddCommentForm postComment={this.postComment} />
            </div>
            <div className='table'>
              <div className='table-header'>
                <h3>Comments</h3>
              </div>

              {this.state.comments.map(comment => {
                return (
                  <div key={comment.comment_id} className='table-values' >
                    <div className='column-box'>
                      <div >
                        <p>{comment.printDate}</p>
                      </div>
                      <div>
                        <p>{comment.category}</p>
                      </div>
                    </div>
                    <div className='column-box'>
                      <p>{comment.comment}</p>
                    </div>
                  </div>
                )
              })

              }
            </div>

          </div>
        }
      </div>

    );


  }
}

export default App;
