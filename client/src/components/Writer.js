import { useRef, useState } from 'react';

import Prism from 'prismjs';
// 여기 css를 수정?
import 'prismjs/themes/prism.css';

import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor, Viewer } from '@toast-ui/react-editor';

import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

const Writer = ({ editorRef }) => {
  return (
    <Editor
      previewStyle="vertical"
      plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
      height="500px"
      // hooks={{
      //   addImageBlobHook: (blob, callback) => {
      //     console.log(blob);
      //     console.log(callback);
      //   }
      // }}
      ref={editorRef}
    />
  );
};

export default Writer;
