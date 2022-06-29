const { response } = require('express')
const express = require('express')
const router = express.Router()

const signInForm = require('../models/signinModels')

router.post('/signup',(request, respond) => {
    const signedUpUser = new signInForm({
        username:request.body.username,
        password:request.body.password
        //no need to put date in here since it is default
    })
    signedUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})

module.exports = router