
module.exports = function () {
    if (!process.env.JWT_SECRET) {
        console.log(process.env.JWT_SECRET);
        // throw new Error('Fatal Error : JWT_PRIVATE_KEY is not defined')
        process.exit(1)
    }

}