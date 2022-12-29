const express = require('express');
const router = express.Router();

const works = require('./data/works.json');
const articles = require('./data/articles.json');

router.get('/', (req, res) => {
    res.render('home', {
        works,
        articles
    });
});

router.get('/works', (req, res) => {
    res.render('works', {
       path: 'works',
       name:'Toutes mes réalisations',
       backgroundImg: '/integration/works/img-works.jpg',
       works,
       articles
    });
});

router.get('/a-propos', (req, res) => {
    res.render('a-propos', {
       path:'a propos',
       name:'A propos',
       backgroundImg:'/integration/works/img-works.jpg',
       works,
       articles
    });
});

router.get('/resume', (req, res) => {
    res.render('resume', {
        articles,
        works
    });
});

router.get('/blog', (req, res) => {
    res.render('blog', {
       path:'blog',
       name:'Mes articles de blog',
       backgroundImg:'/integration/works/img-works.jpg',
       articles,
       works
    });
});

router.get('/contact', (req, res) => {
    res.render('page-contact', {
       path:'contact',
       name:'Me contacter',
       backgroundImg:'/integration/works/img-works.jpg',
       works,
       articles
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
            works,
            articles
        });
    }
    
});

module.exports = router;