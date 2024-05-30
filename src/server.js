const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const { exec } = require('child_process');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/jasmin', (req, res) => {
    const codigoJasmin = req.body.codigoJasmin;
    fs.writeFileSync('CodeVerse.j', codigoJasmin, 'utf8');

    exec('java -jar jasmin.jar CodeVerse.j', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error al compilar jasmin: ${stderr}`); // Log para depuración
            return res.status(500).send(`Error al compilar jasmin: ${stderr}`);
        }

        exec('java CodeVerse', (error, stdout, stderr) => {
            if (error) {
                console.error(`Error al ejecutar .class: ${stderr}`); // Log para depuración
                return res.status(500).send(`Error al ejecutar .class: ${stderr}`);
            }

            console.log(`Resultado de la ejecución: ${stdout}`); // Log para depuración
            res.send(stdout);
        });
    });
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
