import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class AddCommentForm extends React.Component {

  render() {

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
              <div className='comment-group-container'>
                <input type='text' name='comment' className='comment-box' />
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
