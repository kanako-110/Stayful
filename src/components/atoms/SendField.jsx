import React, {Component} from 'react';

import TextField from '@material-ui/core/TextField';
import '../styles/TextInput.css';
import SendButtons from './SendButton';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

export default function SendField() {
  render() {
    return (
      <React.Fragment>
        <form className="wrap" noValidate autoComplete="off">
          <TextField
            id="standard-text"
            label="メッセージを入力"
            className="text"
            margin="normal"
          />
          <SendButtons />
        </form>
      </React.Fragment>
    );
  }
}

