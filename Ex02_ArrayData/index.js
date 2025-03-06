const express = require('express');
const PORT = 3000;
const app = express();

let courses = require('./data');

//register middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./views'));

//config view
app.set('view engine', 'ejs'); //Khai bao rang app se dung EJS de render trang web
app.set('views', './views'); //Ndung render trang web se nam trong thu muc ten 'views'

//show data
app.get('/', (req, resp) => {
    return resp.render('index', { courses }) //send data to ejs
});

//method save
app.post('/save', (req, resp) => {
    const id = Number(req.body.id);
    const name = req.body.name;
    const course_type = req.body.course_type;
    const semester = req.body.semester;
    const department = req.body.department;

    const params = {
        "id": id,
        "name": name,
        "course_type": course_type,
        "semester": semester,
        "department": department
    }

    courses.push(params);
    console.log("body", req.body);
    return resp.redirect('/');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});