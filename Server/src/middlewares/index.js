import jwt from 'jsonwebtoken';
import user from '../models/user.js';

const authentication = async (req, res, next) => {
    const bearerToken = req.headers.authorization
    // if (!bearerToken) {
    //     return res.status(401).json({
    //         message: "Bạn chưa đăng nhập"
    //     })
    // }
    // const token = bearerToken.split(" ")[1]
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

export default authentication