const express = require("express");
const router = express.Router();


// GET http://localhost:3000/exercise
router.get('/', (req,res, next) => {
    res.status(200).json({
        message: 'Successful - GET',
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
});

// GET BY ID http://localhost:3000/exercise/34
router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        message: 'Successful - GET by ID',
        id: id,
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },

    });
});

// POST http://localhost:3000/exercise/POST
router.post('/',  (req, res, next) => {
    console.log('Request body >>>', req.body);
    const { data } = req.body;
    res.status(200).json({
        message: 'Successful - POST',
        data: data,
    });
});


//PUT BY ID http://localhost:3000/exercise/34
router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        message: 'Successful - PUT by ID',
        id: id,
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },

    });
});

//DELETE BY ID  http://localhost:3000/exercise/12
router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        message: 'Successful - DELETE by ID',
        id: id,
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },

    });
});

module.exports = router;