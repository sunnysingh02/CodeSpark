const {createClient} = require('redis');

const redisClient = createClient({
    username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
        host: 'copperish-macroprecise-snowlit-17088.db.redis.io',
        port: 13199
    }
});

module.exports = redisClient;
