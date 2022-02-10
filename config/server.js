module.exports = {
    port: parseInt(process.env.SERVER_PORT || '3000', 10),
    environment: process.env.SERVER_ENV || 'development',
};