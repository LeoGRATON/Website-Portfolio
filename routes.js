const express = require('express');
const router = express.Router();

const works = require('./data/works.json')

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/works', (req, res) => {
    res.render('works', {
       path: 'works',
       name:'Toutes mes réalisations',
       backgroundImg: '/integration/works/img-works.jpg',
       works,
    });
});

router.get('/works/:work', (req, res) => {
    const urlWork = req.params.work;
    const workName = works.find(work => work.url == urlWork)
    const paths = ['works','stareyes'];
        if (!workName) {
            res.status(404).render('404');
            return;
    }else {
        res.render('work', {
            paths,
            workName,
            works
        });
    }
    
});

module.exports = router;