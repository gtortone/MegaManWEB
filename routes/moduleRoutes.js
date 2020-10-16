const express = require('express');
const fs = require('fs');
const moduleController = require('./../controllers/moduleController');

// ROUTES

const router = express.Router();

router
  .route('/')
  .post(moduleController.createModule)
  .get(moduleController.getAllModules);

router
  .route('/:id')
  .get(moduleController.getModule)
  .patch(moduleController.updateModule)
  .delete(moduleController.deleteModule);

module.exports = router;
