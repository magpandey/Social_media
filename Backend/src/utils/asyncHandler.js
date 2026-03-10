
const asyncHandler = (requestHandler) => {
    return (req,res,next) => {
        Promise.resolve(requestHandler(res,req,next)).catch((error) => next(error))
    }
}

module.exports = asyncHandler