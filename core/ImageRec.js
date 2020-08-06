//api key - acc_f2a4e8985d9c03e
//api secret - ddc98b814367d45a9edff08a7c56babe

//^ store in env

api_url = "https://api.imagga.com/v2/tags"
apiKey = 'acc_f2a4e8985d9c03e'
apiSecret = 'ddc98b814367d45a9edff08a7c56babe'
tagger_id = apiKey + ":" + apiSecret
const axios = require('axios')

async function get_labels(image) {

        
        formData = {
            image_base64: image.image_base64
        };
        // const resp = await axios.post(api_url + "?tagger_id=" + tagger_id, formData)
        // .then(response => console.log(response));
        // console.log(resp.data)

    request = require('request'),
    util = require('util'),
    apiKey = 'acc_f2a4e8985d9c03e',
    apiSecret = 'ddc98b814367d45a9edff08a7c56babe',
    
    result = []
    post = util.promisify(request.post)
    output = await post({url:api_url, formData: formData},
     function (error, response, body) {
        result = body
    }).auth(apiKey, apiSecret, true);

    console.log(result)
    
    return output
}

var fs = require('fs')
function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}

async function test() {
    
    img = 'Something.jpg'
    image = {image_base64: base64_encode(img)}
    labels = get_labels(image)
    console.log(labels)
}

test()