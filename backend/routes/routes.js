const { response } = require('express');
const express = require('express');
const router = express.Router();
const signUpTemplateCopy = require('../models/SignUpModels');

router.get('', (request, response) => {
    response.send("All is well......")
})

router.post('/signup', (request, response) => {

    const signedupUser = new signUpTemplateCopy(request.body)
    console.log(request.body)
    signedupUser.save()
        .then(data => {
            response.json(data)
        })
        .catch(error => {
            response.json(error)
        })
})

module.exports = router;