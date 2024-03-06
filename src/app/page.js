'use client';
import React, { useState } from 'react';
import { Editor } from '@monaco-editor/react';
import { analizar } from './module/generator.js';
import './EditorDeCodigoPage.css';


const EditorDeCodigoPage = () => {
  const [codigo, setCodigo] = useState("");
  const [resultado, setResultado] = useState("");


  const handleChange = (value) => {
    setCodigo(value);
  };
 
  const handleAnalizar = () => {
    const result = analizar(codigo);

    setResultado(result);
  };
  
  const handleLimpiar = () => {
    setResultado("");
  };


  return (
    <div className="editor-container">
      <h1 className="editor-title">CodeVerse</h1>
      <div className="editor-wrapper">
        <Editor
          theme='vs-dark'
          height="500px"
          color='blue'
          onChange={handleChange}
          className="codigo-editor"
          options={{
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            fontSize: 14,
            padding: { top: 20 },
            scrollbar: {
              vertical: 'visible',
              horizontal: 'visible',
              useShadows: false,
              verticalScrollbarSize: 8,
              horizontalScrollbarSize: 8
            },
          }}
        />
      </div>
      <button onClick={handleAnalizar} className="analizar-button">Analizar</button>
      <button onClick={handleLimpiar} className="limpiar-button">Limpiar</button>
      {resultado && (
        <div className="resultado-container">
          <h2>Resultado:</h2>
          <textarea
            value={resultado}
            readOnly
            className="resultado-textarea"
          />
        </div>
      )}
    </div>
  );
};

export default EditorDeCodigoPage;
