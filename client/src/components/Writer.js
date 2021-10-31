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
    const config = {
      header: { 'content-type': 'multipart/form-data' }
    };
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
        addImageBlobHook: async (blob, callback) => {
          let img_url = await uploadImage(blob);
          if (img_url) {
            callback(img_url.data.data, `${img_url.data.data}`.split('_')[1]);
          }
        }
      }}
      ref={editorRef}
    />
  );
};

export default Writer;
