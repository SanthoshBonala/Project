
const config = {
    development:{
        url: 'mongodb+srv://admin:admin@cluster0-tyjvv.mongodb.net/development?retryWrites=true'
    },
    production:{
        url: 'mongodb+srv://admin:admin@cluster0-tyjvv.mongodb.net/Production?retryWrites=true'
    }
}

module.exports = config[process.env.ENV].url