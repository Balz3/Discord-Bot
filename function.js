const axios = require('axios');

module.exports = {
    uploadNasa : async function(url){

        var config = {
            method: 'get',
            url: url,
            headers: { }
        };
        let response;

        try{
            response = await axios(config);
            console.log(response);
        } catch (e) {
            console.log(e);
        }

        return response;
    }
}