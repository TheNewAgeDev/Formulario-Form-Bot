module.exports ={
    getLogin: function(){
        let login = "../private/login.js";
        return [login, require(login)];
    },
    getConfig: function(){
        let config = "./config.js";
        return [config, require(config)];
    },
}