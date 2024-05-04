const { app } = require('./app');

app.get('/', function (req, res) {
    let services = [
        {
            img: 'services_1',
            span: 'Strategic Planning',
            p: 'Develop a robust business strategy and roadmap that aligns with your long-term.',
            a: 'Look More'
        },
        {
            img: 'services_2',
            span: 'Strategic Planning',
            p: 'Develop a robust business strategy and roadmap that aligns with your long-term.',
            a: 'Look More'
        },
        {
            img: 'services_3',
            span: 'Strategic Planning',
            p: 'Develop a robust business strategy and roadmap that aligns with your long-term.',
            a: 'Look More'
        },

    ];

    let team = [
        {
            img: 'team-1',
            h3: 'Alexander',
            p: 'CEO and Founder',
            fb: "Alexander/facebook.com",
            insta: 'Alexander/instagram.com',
            linkedin: 'Alexander/linkedin.com',
            x: 'Alexander/x.com'
        },
        {
            img: 'team-2',
            h3: 'Mishel',
            p: 'Busines Expert',
            fb: "mishel/facebook.com",
            insta: 'mishel/instagram.com',
            linkedin: 'mishel/linkedin.com',
            x: 'mishel/x.com'
        },
        {
            img: 'team-3',
            h3: 'Emiley',
            p: 'Advisor',
            fb: "emiley/facebook.com",
            insta: 'emiley/instagram.com',
            linkedin: 'emiley/linkedin.com',
            x: 'emiley/x.com'
        },
    ];
    res.render('index', { services, team });
});

app.get('/about', function (req, res) {
    let solutions = [
        {
            icon: 'fa-solid fa-folder',
            h2: 'Change Management',
            p: 'Our strategic planning services provide you with a roadmap to success.',
        },
        {
            icon: 'fa-solid fa-chart-line',
            h2: 'Digital Transformation',
            p: 'This step involves gathering data, reviewing processes, and identifying areas.',
        },
        {
            icon: 'fa-solid fa-pie-chart',
            h2: 'Process Optimization',
            p: 'This enables us to make necessary adjustments to ensure optimal results.',
        },
        {
            icon: 'fa-solid fa-address-book',
            h2: 'Competitive Analysis',
            p: 'Knowledge is power. We provide you with valuable insights through market.',
        },
        {
            icon: 'fa-solid fa-globe',
            h2: 'Technology Integration',
            p: 'The digital era demands adaptation. We assist in embracing digital.',
        },
        {
            icon: 'fa-solid fa-briefcase',
            h2: 'International Market',
            p: 'We provide training, workshops, and resources to equip your organization.',
        },

    ];
    res.render('about', { solutions });
});

app.get('/services', function(req, res){
    res.render('services');
});

// app.get('/industries', function (req, res) {
//     let industries = [
//         {
//             img: 'industry-1',
//             button: 'Marketing',
//             h2: 'Digital Transformation Journey'
//         },

//     ];


//     let industries2 = [
//         {
//             img: 'industry-4',
//             button: 'IT',
//             h2: 'Digital Transformation Journey'
//         },
//     ];
//     res.render('industries', { industries, industries2 });
// });

app.listen(6700, function () {
    console.log('Server running on: http://localhost:6700/');
});
