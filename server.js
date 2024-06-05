const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const app = express();
const port = 5000;

app.use(bodyParser.json());

const users = [
    { email: 'user@example.com', password: bcrypt.hashSync('password123', 10), name: 'Usuario Ejemplo' }
];

app.post('/api/authenticate', (req, res) => {
    const { email, password } = req.body;

    const user = users.find(u => u.email === email);

    if (user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({ email: user.email }, 'your_jwt_secret', { expiresIn: '1h' });
        res.json({ 
            token,
            email: user.email,
            name: user.name
        });
    } else {
        res.status(401).json({ 
            message: 'Credenciales inválidas',
            style: {
                textAlign: 'center' // Estilo CSS para centrar el texto
            }
        });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

