const mongo = require('mongodb');
const redisClient = require('redis').createClient;
const redis = redisClient(6379, 'localhost');

// connect to MongoDB
var dbo = null;
mongo.connect('mongodb://localhost:27017/Stocks', {
    useNewUrlParser: true
}, (err, db) => {
    if (err) {
        console.log(chalk.red(err));
        process.exit(0);
    }
    dbo = db.db('Stocks');
    console.log('connected to the database');
});

redis.on("connect", () => {
    console.log('connected to Redis');
});

function getStocks(id) {
    return new Promise((resolve, reject) => {
        redis.get(id,(err, reply) => {
            if(err) {
                console.log(err);
            } else if(reply) {
                resolve(reply);
            } else {
                dbo.collection('lists').find({
                    id: id
                }).toArray((err, sdata) => {
                    if(err) {
                        return reject(err);
                    }
                    if(sdata.length > 0) {
                        // set in redis
                        redis.set(id, JSON.stringify(sdata));
                    }
                    resolve(sdata);
                });
            }
        });
    });
}

module.exports = {
    getStocks: getStocks
};