/**
 * Componente funcional que representa una página de editor de código.
 * Permite a los usuarios ingresar y editar código, analizarlo y mostrar el resultado.
 */
'use client';
import React, { useState } from 'react';
import { Editor } from '@monaco-editor/react';
import { analizar } from './module/generator.js';
import './EditorDeCodigoPage.css';

const EditorDeCodigoPage = () => {
  // Estado para almacenar el código ingresado por el usuario
  const [codigo, setCodigo] = useState("");
  // Estado para almacenar el resultado del análisis del código
  const [resultado, setResultado] = useState("");
  
  // Función para manejar cambios en el código.
  const handleChange = (value) => {
    setCodigo(value);
  };

  
  /**
   * Función para realizar el análisis del código ingresado por el usuario.
   * Invoca la función 'analizar' del módulo 'generator.js'.
   */
  const handleAnalizar = () => {
    const result = analizar(codigo);
    setResultado(result);
  };
  
  // Función para limpiar la página, restableciendo el código y el resultado
  const handleLimpiar = () => {
    setCodigo("");
    setResultado("");
  };

  return (
    <div className="editor-container">
      <h1 className="editor-title">CodeVerse</h1>
      <div className="editor-wrapper">
        {/* Editor de código proporcionado por Monaco Editor */}
        <Editor
          theme='vs-dark'
          height="300px"
          color='blue'
          value={codigo}
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
              horizontalScrollbarSize: 8,
            },
          }}
        />
      </div>
      {/* Botón para iniciar el análisis del código */}
      <button onClick={handleAnalizar} className="analizar-button">Analizar</button>
      {/* Botón para limpiar el código y el resultado */}
      <button onClick={handleLimpiar} className="limpiar-button">Limpiar</button>
      {/* Contenedor para mostrar el resultado del análisis */}
      {resultado && (
        <div className="resultado-container">
          <h2>Resultado:</h2>
          {/* Área de texto para mostrar el resultado del análisis */}
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