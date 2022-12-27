const express = require('express');
const router = express.Router();

const works = require('./data/works.json')

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/works', (req, res) => {
    const paths = ['works'];
    const name = 'Toutes mes réalisations';
    res.render('works', {
       paths,
       name,
       backgroundImg: '/integration/img-works.jpg',
       works
    });
});

router.get('/works/stareyes', (req, res) => {
    const paths = ['works','stareyes'];
    const name = 'Stareyes';
    res.render('work', {
       paths,
       name,
       backgroundImg: '/integration/img-real-stareyes.jpg'
    });
    
});

module.exports = router;