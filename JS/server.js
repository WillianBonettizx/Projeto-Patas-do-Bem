const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Permite chamadas do front-end (CORS)
app.use(cors());
app.use(bodyParser.json());

// Usuário de teste
const usuarioTeste = {
    usuario: "admin",
    senha: "1234"
};

// Rota de login
app.post('/api/login', (req, res) => {
    const { usuario, senha } = req.body;

    if (!usuario || !senha) {
        return res.json({ sucesso: false, mensagem: "Preencha todos os campos!" });
    }

    if (usuario === usuarioTeste.usuario && senha === usuarioTeste.senha) {
        return res.json({ sucesso: true });
    } else {
        return res.json({ sucesso: false, mensagem: "Usuário ou senha incorretos!" });
    }
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
