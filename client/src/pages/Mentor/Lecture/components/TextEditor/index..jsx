// import React, { useEffect, useRef, useState } from 'react';
// import Quill from 'quill';
// import 'quill/dist/quill.snow.css';

// const TOOLBAR_OPTIONS = [
//   [{ header: [1, 2, 3, false] }],
//   [{ list: "ordered" }, { list: "bullet" }],
//   ["bold", "italic"],
//   [{ color: [] }, { background: [] }],
//   [{ align: [] }],
//   ["link", "image", "blockquote", "code-block"],
// ];

// const TextEditor = ({ onTextChange }) => {
//   const wrapperRef = useRef(null);
//   const quillRef = useRef(null);
//   const [isQuillInitialized, setIsQuillInitialized] = useState(false);

//   useEffect(() => {
//     if (wrapperRef.current && !isQuillInitialized) {
//       const editor = document.createElement("div");
//       wrapperRef.current.innerHTML = "";
//       wrapperRef.current.append(editor);

//       const quill = new Quill(editor, {
//         theme: "snow",
//         modules: {
//           toolbar: TOOLBAR_OPTIONS,
//           imageUpload: {
//             url: '/upload-image', // Укажите конечную точку сервера для загрузки изображений
//             method: 'POST',
//             name: 'image',
//             withCredentials: true,
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem("token")}`, // Включите заголовки аутентификации, если необходимо
//             },
//             callbackOK: (serverResponse, next) => {
//               next(serverResponse.url); // Предполагаем, что сервер возвращает URL изображения
//             },
//             callbackKO: (serverError, next) => {
//               console.error(serverError);
//               next();
//             },
//           },
//         },
//       });

//       quill.on("text-change", () => {
//         const content = quill.root.innerHTML;
//         onTextChange(content);
//       });

//       quillRef.current = quill;
//       setIsQuillInitialized(true);
//     }
//   }, [onTextChange, isQuillInitialized]);

//   useEffect(() => {
//     if (quillRef.current && !quillRef.current.root.innerHTML) {
//       quillRef.current.clipboard.dangerouslyPasteHTML(onTextChange);
//     }
//   }, [onTextChange]);

//   return <div ref={wrapperRef} style={{ overflowY: "auto", maxHeight: "250px", maxWidth: "600px", color: "black" }} />;
// };

// export default TextEditor;
