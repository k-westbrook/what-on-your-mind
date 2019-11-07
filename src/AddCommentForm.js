import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class AddCommentForm extends React.Component {

  constructor() {
    super();
    this.state =
      {
        characterCount: 0
      }
    this.handleCommentChange = this.handleCommentChange.bind(this);
  }
  handleCommentChange(evt) {
    let characterCount = evt.target.value.length;

    this.setState({ characterCount })
  }

  render() {
    console.log(this.state.characterCount)
    return (
      <div  >
        <form onSubmit={this.props.postComment}>
          <div className='form-container'>
            <div className='category-group-container'>
              <div className='category-label'>
                <label htmlFor='category'> Category</label>
              </div>
              <div className='category-selector-container'>
                <select name='category' className='category-selector'>
                  <option value='animals'>Animals</option>
                  <option vale='people'>People</option>
                  <option value='places'>Places</option>
                  <option value='life_events'>Life Events</option>
                  <option value='other'>Other</option>
                </select>
              </div>
            </div>
            <div className='comment-group-container'>
              <div className='category-label'>
                <label htmlFor='comment'>Comment</label>
              </div>
              <div >
                <div>
                  <textarea name='comment' className='comment-box' required maxLength='250' onChange={this.handleCommentChange} />
                </div>
                <div>
                  <p>Characters Left: {250 - this.state.characterCount}</p>
                </div>
              </div>
              <div >
                <button className='submit-button'>Add Comment</button>
              </div>
            </div>
          </div>
        </form>


      </div >
    );
  }
}

export default AddCommentForm;
