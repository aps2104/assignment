import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { addPost, updateModalPost} from '../actions/post';
import './PostForm.css'

import _ from 'lodash';
class PostForm extends Component {
  constructor() {
    super();
    this.state = {
      errors: {},
    };
    this.validate = this.validate.bind(this);
  }

  validate() {
    const name = ReactDOM.findDOMNode(this._author).value;
    const email = ReactDOM.findDOMNode(this._emailInput).value;
    const phone = ReactDOM.findDOMNode(this._phone).value;
    const comment = ReactDOM.findDOMNode(this._comment).value;

    const errors = validate(name, email, phone, comment);
    if (!_.isEmpty(errors)) {
      this.setState({ errors });
      return true;
    }
    else {
      this.setState({ errors : {} });
      return false;
    }
  }

  render() {
    // from post reducer
    const { postModalState, updateModalPost } = this.props
    const { addPost } = this.props
    const { option, post } = postModalState
    
    return (
      <div>
        <form className="form">
        <div className='form-inline'>
          <div className='author'>
              <input className="form-control" ref={author => this._author = author}  type="text" name="author" value={post && post.author || ''}
                onChange={(e) => updateModalPost({
                  'name': e.target.name,
                  'value': e.target.value})}
                  placeholder='Enter your name'
                  />
                  <p key='field1'>{this.state.errors['author'] || ''}</p>
            </div>

            <div className='email'>
              <input className="form-control"  ref={emailInput => this._emailInput = emailInput} type="text" name="email" value={post && post.email || ''}
                onChange={(e) => updateModalPost({
                  'name': e.target.name,
                  'value': e.target.value})}
                  placeholder='Enter your email'
                  />
                  <p key='field2'>{this.state.errors['email'] || ''}</p>
            </div>

            <div className='phone'>
                <input className="form-control" ref={phone => this._phone = phone} type="number" name="phonenumber" value={post && post.phonenumber || ''}
                onChange={(e) => updateModalPost({
                  'name': e.target.name,
                  'value': e.target.value})}
                  placeholder='Enter your number'
                  />
                  <p key='field3'>{this.state.errors['phone'] || ''}</p>
            </div>
            </div>
          <div className ='comment'>
            <textarea ref={comment => this._comment = comment} className="form-control" rows="5" name="body"
              value={post && post.body || ''}
              onChange={(e) => updateModalPost({
                'name': e.target.name,
                'value': e.target.value})}
              placeholder='Enter your comment'/>
              <p key='field4'>{this.state.errors['comment'] || ''}</p>
            </div>
          <Button
            bsStyle='success'
            onClick={()=> {
              if (!this.validate()) {
                addPost(post)
              }
            }}>
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

function validate(author, email, phone, comment) {
  // we are going to store errors for all fields
  const errors = {};

  if (author.length === 0) {
    errors['author'] =  "Name can't be empty";
  }

  if (email.length < 5 || (email.split('').filter(x => x === '@').length !== 1) || (email.indexOf('.') === -1) ) {
    errors['email'] = "Email should be at least 5 charcters long";
  }
  
  if (phone.length !== 10) {
    errors['phone'] = "Enter 10 digit phone number";
  }

  if (comment === '') {
    errors['comment'] = "Enter Comment";
  }

  return errors;
}



function mapStateToProps ({post}) {
  return {
    postModalState: post.postModalState
  }
}

function mapDispatchToProps (dispatch) {
  return {
    updateModalPost: (...data) => dispatch(updateModalPost(...data)),
    addPost: (...data) => dispatch(addPost(...data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
