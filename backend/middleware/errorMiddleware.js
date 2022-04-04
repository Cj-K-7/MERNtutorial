const errorHandler = (err, req, res, next) => {
    //res.statusCode 가 없으면 반응이 없으니까 서버 error 취급하기 위해 삼항 연산자 에 500 .
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode);
    res.json({
        message : err.message ,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
};


module.exports = { errorHandler };