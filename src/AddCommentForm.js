import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class AddCommentForm extends React.Component {

  render() {

    return (
      <div  >
        <form onSubmit={this.props.postComment}>
          <label htmlFor='category'> Category</label>
          <select name='category'>
            <option value='animals'>Animals</option>
            <option vale='people'>People</option>
            <option value='places'>Places</option>
            <option value='life_events'>Life Events</option>
            <option value='other'>Other</option>
          </select>
          <label htmlFor='comment'></label>
          <input type='text' name='comment' />
          <button>Add Comment</button>
        </form>


      </div >
    );
  }
}

export default AddCommentForm;
