import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import user from '../models/user.js'

export const createNewUser = async (req, res) => {
    try {
        const name = req.body.name;
        const address = req.body.address;
        const dateOfBirth = req.body.dateOfBirth;
        const username = req.body.username;
        const password = req.body.password;
        const auth = req.body.auth;
        const phonenumber = req.body.phonenumber

        const checkUser = await user.findOne({
            username: username
        })
        if (checkUser) {
            return res.status(400).json({
                message: 'User already exist'
            })
        }
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt)
        const data = await user.create({
            name: name,
            address: address,
            dateOfBirth: dateOfBirth,
            username: username,
            password: hashPassword,
            auth: auth,
            phonenumber: phonenumber
        })
        return res.status(200).json({
            message: 'Create new user success',
            data
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message,
            name: error.name,
        })
    }
}

export const Login = async (req, res) => {

    try {
        const allUser = await user.findOne({ username: req.body.username });
        if (!allUser) {
            return res.status(404).json({
                message: "Tên đăng nhập không đúng",
                data: allUser
            });
        }
        const passwordMatch = await bcrypt.compare(String(req.body.password), String(allUser.password));

        if (passwordMatch) {
            const token = jwt.sign({ userId: allUser._id }, process.env.KEY, { expiresIn: '1m' });

            return res.status(200).json({
                data: token,
                username: req.body.username
            })
        } if (!passwordMatch) {
            return res.status(401).json({
                message: "Mật khẩu không đúng"
            });
        }

    } catch (error) {
        return res.status(400).json({
            message: error.message,
            name: error.name,
        });
    }
};

export const authentication = async (req, res, next) => {
    const bearerToken = req.headers.authorization
    if (!bearerToken) {
        return res.status(401).json({
            message: "Bạn chưa đăng nhập"
        })
    }
    const token = bearerToken.split(" ")[1]
    console.log(bearerToken);
    try {
        const checkToken = jwt.verify(token, process.env.KEY)
        const userId = checkToken.id
        const userLogged = await user.findById(userId)
        if (!userLogged) {
            return res.status(401).json({
                message: "Bạn chưa đăng nhập"
            })
        }
        console.log(checkToken);
        req.user = user
        req.userId = userId
        next()
    } catch (error) {
        return res.status(401).json({ message: "Ban chua dang nhap" })
    }
}

