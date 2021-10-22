import { useRef, useState } from 'react';

import Prism from 'prismjs';
// 여기 css를 수정해서 코드 하이라이팅 커스텀 가능
import 'prismjs/themes/prism.css';

import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

const Writer = ({ handlepostTest }) => {
  const editorRef = useRef();

  const handleClick = () => {
    const editorInstance = editorRef.current.getInstance();
    const getContent = editorInstance.getMarkdown();
    const gethtml = editorInstance.getHTML();
    console.log(gethtml);
    console.log('======================================================');
    handlepostTest(getContent);
  };
  return (
    <>
      <Editor
        previewStyle="vertical"
        plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
        ref={editorRef}
      />
      <button onClick={handleClick}>!!!콘솔에서 값확인!!!</button>
    </>
  );
};

export default Writer;
