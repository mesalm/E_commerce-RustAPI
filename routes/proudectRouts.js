const express = require('express');
const router = express.Router();
const {
    createProudect,
    getProudect,
    getAllProudect,
    updateProudect,
    deleteProudect,
} =require('../controllrs/proudectControllrs');
const  valedaitToken  = require( '../middleware/valedatToken' );
const admin= require('../middleware/admin')


router.route('/').get( getAllProudect)
router.route('/:id').get(getProudect)
router.use(valedaitToken)
router.route('/').post( admin, createProudect)
router.route('/:id').put(  admin ,updateProudect)
router.route('/:id').delete( admin, deleteProudect)


module.exports = router;

