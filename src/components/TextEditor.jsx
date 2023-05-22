import React, { useState } from "react";

import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


const TextEditor = () => {
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );

  return (
    <div className="editor">
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="wrapper-class p-[1rem] border-[1px] border-solid "
        editorClassName="editor-class bg-slate-100 p-[1rem] border-solid border-[1px] "
        toolbarClassName="toolbar-class border-solid border-[1px]"
      />
    </div>
  );
};

export default TextEditor;
