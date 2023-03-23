const applicationController = require('../controllers/application.controller')
const { upload } = require('../services/uploadImage.service')
module.exports = require('express').Router()
    .get('/list', applicationController.getAll)
    .get('/detail', applicationController.getOne)
    .get('/get-by-jobid', applicationController.getAllByJobId)
    .get('/get-by-userid', applicationController.getAllByUserrId)
    .post('/create', upload.CV.single('cv'), applicationController.create)