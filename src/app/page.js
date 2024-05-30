'use client';
import React, { useState } from 'react';
import { Editor } from '@monaco-editor/react';
import './EditorDeCodigoPage.css';
import { analizar } from './module/generator.js';
import { traductorCtoCV } from './module/generadorCtoCV.js';
import { traductorCVtoC } from './module/generatorCVtoC.js';
import { readAndDisplayFile } from './helper/FuncionFile.js';
import {traductorCVtoJasmin} from './module/generatorCVtoJasmin.js'

const EditorDeCodigoPage = () => {
  const [codigoPrimero, setCodigoPrimero] = useState("");   // Estado para almacenar el código del primer editor
  const [codigoSegundo, setCodigoSegundo] = useState("");   // Estado para almacenar el código del segundo editor
  const [resultado, setResultado] = useState("");  // Estado para almacenar el resultado del análisis del código
  const [resultadoJasmin, setResultadoJasmin] = useState(""); //Estado para almacenar el resultado del analisis del codigo de jasmin
  const [result, setResult] = useState(""); // Estado para almacenar el resultado de la traducción del código C
  const [file, setFile] = useState();

  // Función para manejar cambios en el código del primer editor.
  const handleChangePrimero = (value) => {
    setCodigoPrimero(value);
  };

  // Función para manejar cambios en el código del segundo editor.
  const handleChangeSegundo = (value) => {
    setCodigoSegundo(value);
  };

  /**
   * Función para realizar el análisis del código ingresado por el usuario.
   * Invoca la función 'analizar' del módulo 'generator.js'.
   */
  const handleAnalizar = () => {
    const resultado = analizar(codigoPrimero);
    setResultado(resultado);
  };

  /**
   * Función para realizar la traducción del código del segundo editor.
   * Invoca la función 'traductorCtoCV' del módulo 'CodeCGenerator.js'.
   */
  const handleTraducirCtoCV = () => {
    const result = traductorCtoCV(codigoSegundo);
    setCodigoPrimero(result)
  };

  const handleTraducirCVtoC = () =>{
    const resTraductor = traductorCVtoC(codigoPrimero);
    setCodigoSegundo(resTraductor);
  }

  const handleEjecutarJasmin = () => {
    const ejectJasmin = traductorCVtoJasmin(codigoPrimero);
    console.log('ejecutando jasmin...', ejectJasmin);
    fetch('http://localhost:8080/jasmin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ codigoJasmin: ejectJasmin }),
    })
    .then(res => res.text())
    .then(data => {
      console.log('Resultado de la ejecución:', data); // Log para depuración
      setResultadoJasmin(data);
    })
    .catch(err => {
      console.error('Error al ejecutar Jasmin:', err); // Log para depuración
      setResultadoJasmin(`Error: ${err.message}`);
    });
  };


    // Función para manejar el cambio en el input de archivo
    const handleFileChangeC = (e) => {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
  
      readAndDisplayFile(selectedFile, (data) => {
        setCodigoSegundo(data);
      });
    };

    const handleFileChangeCV = (e) => {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
  
      readAndDisplayFile(selectedFile, (data) => {
        setCodigoPrimero(data);
      });
    };


  // Función para limpiar la página, restableciendo el código y el resultado
  const handleLimpiar = () => {
    setCodigoPrimero("");
    setCodigoSegundo("");
    setResultado("");
    setResult("");
  };

  return (
    <div className="editor-container">
      <h1 className="editor-title">CodeVerse</h1>
      <div className="editores-container">
        <div className="editor-wrapper">
        <div className = 'mt-5 flex'>
          <input onChange = {handleFileChangeCV} className = 'cursor-pointer mr-4' type="file" />
        </div>

        <h2>Analizador:</h2>
          {/* Editor de código proporcionado por Monaco Editor */}
          <Editor
            theme='vs-dark'
            height="300px"
            width="500px"
            color='blue'
            value={codigoPrimero}
            onChange={handleChangePrimero}
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

          {/* Botones para el primer editor */}
          <div className='mt-4'>
            <button onClick={handleAnalizar} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">Analizar</button>
            <button onClick={handleLimpiar} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">Limpiar</button>
            {/* Botón para traducir código CV a C */}
            <button onClick={handleTraducirCVtoC} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mr-4">CodeVerse a C</button>  
            <button onClick={handleEjecutarJasmin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mr-4">ejecutar jasmin</button>          
          </div>
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

          {resultadoJasmin && (
            <div className="resultado-container">
              <h2>Resultado de Jasmin:</h2>
              {/* Área de texto para mostrar el resultado del análisis */}
              <textarea
                value={resultadoJasmin}
                readOnly
                className="resultado-textarea"
              />
            </div>
          )}
        </div>
        <div className="editor-traduccion-container">
          <div className="editor-wrapper">
          <div className = 'mt-5 flex'>
                <input onChange = {handleFileChangeC} className = 'cursor-pointer mr-4' type="file" />
          </div>
          <h2>Traductor:</h2>
            {/* Segundo Editor de código proporcionado por Monaco Editor */}
            <Editor
              theme='vs-dark'
              height="300px"
              width="500px"
              color='blue'
              value={codigoSegundo}
              onChange={handleChangeSegundo}
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
          <div className='mt-4'>
            {/* Botón para traducir código C a CV */}
            <button onClick={handleTraducirCtoCV} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mr-4">C a CodeVerse</button>
          </div>
          </div>
        </div>
    </div>
  );
};

export default EditorDeCodigoPage;

