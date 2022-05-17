import React, { Component } from "react";
import 'react-edit-text/dist/index.css'
import { EditTextarea } from 'react-edit-text'

class NoteEditor extends Component {
  constructor(props) {
    super(props);
    this.noteRef = React.createRef();
  }
  onEditNote = () => {
    this.noteRef.current.click();
  }
  render() {
    return (
      <div>
        <EditTextarea ref={this.noteRef} value="Here is a sample note"/>
        <a className="text-primary" onClick={this.onEditNote}>Add/Edit</a>
      </div>
    );
  }
}
export default NoteEditor;