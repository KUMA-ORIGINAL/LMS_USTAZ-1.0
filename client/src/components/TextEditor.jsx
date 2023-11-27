import React, { useEffect, useRef, useState } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { ImageUpload } from "quill-image-upload";
Quill.register("modules/imageUpload", ImageUpload);

const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, false] }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["bold", "italic"],
  [{ color: [] }, { background: [] }],
  [{ align: [] }],
  ["link", "image", "blockquote", "code-block"],
];

const TextEditor = ({ onTextChange }) => {
  const wrapperRef = useRef(null);
  const quillRef = useRef(null);
  const [isQuillInitialized, setIsQuillInitialized] = useState(false);

  useEffect(() => {
    if (wrapperRef.current && !isQuillInitialized) {
      const editor = document.createElement("div");
      wrapperRef.current.innerHTML = "";
      wrapperRef.current.append(editor);

      const quill = new Quill(editor, {
        theme: "snow",
        modules: {
          toolbar: TOOLBAR_OPTIONS,
        imageUpload: {
            url: "http://media.test3.cheggnet.com:6002/media-api/rest/item", // server url. If the url is empty then the base64 returns
            method: "POST", 
            name: "image",
            withCredentials: true, 
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            },
            // customUploader: () => {}, // add custom uploader
            callbackOK: (serverResponse, next) => {
              console.log("serverResponse", serverResponse, serverResponse.location);
              next(serverResponse.location);
            },
            callbackKO: serverError => {
              alert(serverError);
            },
            checkBeforeSend: (file, next) => {
              console.log("file", file);
              next(file); // go back to component and send to the server
            }
          }
        },
      });

      quill.on("text-change", () => {
        const content = quill.root.innerHTML;
        onTextChange(content);
      });

      quillRef.current = quill;
      setIsQuillInitialized(true);
    }
  }, [onTextChange, isQuillInitialized]);

  useEffect(() => {
    if (quillRef.current && !quillRef.current.root.innerHTML) {
      quillRef.current.clipboard.dangerouslyPasteHTML(onTextChange);
    }
  }, [onTextChange]);

  return <div ref={wrapperRef} style={{ overflowY: "auto" }} />;
};

export default TextEditor;