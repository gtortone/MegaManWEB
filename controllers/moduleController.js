const fs = require('fs');
const Module = require('./../models/moduleModel');

// ROUTE HANDLERS

exports.createModule = async (req, res) => {
  try {
    const newModule = await Module.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        module: newModule,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'invalid data sent',
    });
  }
};

exports.getAllModules = async (req, res) => {
  try {
    const modules = await Module.find();

    res.status(200).json({
      status: 'success',
      results: modules.length,
      data: {
        modules,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getModule = async (req, res) => {
  try {
    const module = await Module.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        module,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.updateModule = async (req, res) => {
  try {
    const module = await Module.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'success',
      data: {
        module,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteModule = async (req, res) => {
  try {
    await Module.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
