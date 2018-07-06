module.exports.throwError = (code, errorType, errorMessage) => {
    const error = {
        code,
        errorType,
        errorMessage
    }
    throw error;
}