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
              <div>
                <label htmlFor='category'> Category</label>
              </div>
              <div>
                <select name='category'>
                  <option value='animals'>Animals</option>
                  <option vale='people'>People</option>
                  <option value='places'>Places</option>
                  <option value='life_events'>Life Events</option>
                  <option value='other'>Other</option>
                </select>
              </div>
            </div>
            <div className='comment-group-container'>
              <div>
                <label htmlFor='comment'>Comment</label>
              </div>
              <div>
                <input type='text' name='comment' />
              </div>
              <div>
                <button>Add Comment</button>
              </div>
            </div>
          </div>
        </form>


      </div >
    );
  }
}

export default AddCommentForm;
