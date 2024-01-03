const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db');

const createUser = (req, res) => {
  const { name, email, password } = req.body;
  const q = 'SELECT * FROM users WHERE email = ?';
  db.query(q, [email], (err, data) => {
    if (err) return res.status(400).json(err);
    if (data.length) {
      return res
        .status(409)
        .json('Пользователь с такими данными уже существует!');
    }
    bcrypt
      .hash(password, 10)
      .then((hash) => {
        const qq = `INSERT INTO users (name, email, password) VALUES ( '${name}' , '${email}' , '${hash}' )`;
        db.query(qq, (err, data) => {
          if (err) return res.status(400).json(err);
          return res.status(201).json('Вы успешно зарегистрировались');
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

const login = (req, res) => {
  const { email, password } = req.body;
  const q = 'SELECT * FROM users WHERE email = ?';
  db.query(q, [email], (err, data) => {
    if (err) return res.status(400).json(err);
    if (data.length === 0) {
      return res.status(404).json('Пользователь не найден!');
    }
    const isPasswordCorrect = bcrypt.compareSync(password, data[0].password);
    if (!isPasswordCorrect) {
      return res.status(401).json('Неверный email или пароль');
    }
    const token = jwt.sign({ id: data[0].id }, 'somesecretkey', {
      expiresIn: '7d',
    });
    res.send({
      name: data[0].name,
      email: data[0].email,
      id: data[0].id,
      token,
    });
    // res.cookie('access_token', token).status(200).json({
    //   name: data[0].name,
    //   email: data[0].email,
    //   token,
    // });
  });
};

const logout = (req, res) => {};
module.exports = {
  createUser,
  login,
  logout,
};
