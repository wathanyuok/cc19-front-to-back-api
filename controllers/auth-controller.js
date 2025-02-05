exports.register = (req, res, next) => {
    try {
        // code
        // Step 1 req.body
        console.log(req.body)
        // Step 2 validate 
        // Step 3 check email already exists
        // Step 4 Encrypt bcrypt
        // Step 5 Insery to DB
        // Step 6 Response


        res.json({ message: "hello register " });
    } catch (error) {
        next(error)
    }
};

exports.login = (req, res, next) => {
    try {
        console.log(aaa)
        res.json({ message: "hello login " });
    } catch (error) {
        next(error)
    }
}