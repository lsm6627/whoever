import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import axios from 'axios';

const Writer = ({ editorRef }) => {
  const uploadImage = async (blob) => {
    const formData = new FormData();
    formData.append('image', blob);
    const url = await axios.post(`${process.env.REACT_APP_API_URL}/profile`, {
      image: formData
    });
    return url;
  };
  return (
    <Editor
      previewStyle="vertical"
      plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
      height="500px"
      hooks={{
        addImageBlobHook: (blob, callback) => {
          const img_url = uploadImage(blob);
          console.log(img_url);
          callback(img_url, 'alt_text');
        }
      }}
      ref={editorRef}
    />
  );
};

export default Writer;
