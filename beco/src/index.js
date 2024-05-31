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
        {
            img: 'team-4',
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

app.get('/services', function (req, res) {
    res.render('services');
});

app.get('/our-team', function (req, res) {

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
        {
            img: 'team-4',
            h3: 'Emiley',
            p: 'Advisor',
            fb: "emiley/facebook.com",
            insta: 'emiley/instagram.com',
            linkedin: 'emiley/linkedin.com',
            x: 'emiley/x.com'
        },
        {
            img: 'team-5',
            h3: 'Emiley',
            p: 'Advisor',
            fb: "emiley/facebook.com",
            insta: 'emiley/instagram.com',
            linkedin: 'emiley/linkedin.com',
            x: 'emiley/x.com'
        },
        {
            img: 'team-6',
            h3: 'Emiley',
            p: 'Advisor',
            fb: "emiley/facebook.com",
            insta: 'emiley/instagram.com',
            linkedin: 'emiley/linkedin.com',
            x: 'emiley/x.com'
        },
    ];
    res.render('our-team', { team });
});

app.get('/our-process', function (req, res) {
    res.render('our-process');
});

app.get('/pricing-plans', function (req, res) {

    let pricing = [
        {
            head: "Starter",
            p: "Our team is carefully curated to ensure a diverse range of skills and experiences.",
            price: "50",
            duration: "month",
            list1: "Personal Manager",
            list2: "Customer Management",
            list3: "Online Payments",
            list4: "Basic Consultation"
        },
        {
            head: "Team",
            p: "We provide training, workshops, and resources to equip your organization.",
            price: "60",
            duration: "month",
            list1: "Personal Manager",
            list2: "Customer Management",
            list3: "Online Payments",
            list4: "Premium Consultation"
        },
        {
            head: "Enterprise",
            p: "We provide training, workshops, and resources to equip your organization.",
            price: "120",
            duration: "month",
            list1: "Personal Manager",
            list2: "Customer Management",
            list3: "Client Portal",
            list4: "Premium Consultation"
        },
    ];
    res.render('pricing-plans', { pricing });
});

app.get('/contact-us', function (req, res) {
    res.render('contact-us');
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
