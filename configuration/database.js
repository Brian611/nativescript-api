module.exports = {
    database: `mongodb://${process.env.DBUSER}:${process.env.DBPASSWORD}@ds247077.mlab.com:47077/hybridholdings`,
    secret: `${process.env.SECRET}`
}