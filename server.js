const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
const port = process.env.PORT || 8000;

app.listen(port);
console.log('listening at port: %j', port);
app.use('/', express.static('./client/dist/ascent-coaching'));

mongoose.connect('mongodb://admin:password1@ds139956.mlab.com:39956/ascent-coaching', {useNewUrlParser:true})

const Article = mongoose.model('Article', {
	date: Date,
	title: String,
	body: String
});

const Customer = mongoose.model('Customer', {
	name: String,
	email: String,
	service: String,
	experience: [String],
	message: String,
	contact: String,
});

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'ascentCoaching19@gmail.com',
		pass: 'Achieve19!'
	}
});

app.post('/api/email', (req,res) => {
	if(req.body.experience) {
		var experience = [];
		req.body.experience.forEach(e => {
			console.log('e: %o', e);
			switch(e) {
				case '0':
					experience.push('Less than 1 year');
					return;
				case '1':
					experience.push(' 1-2 years');
					return;
				case '2':
					experience.push(' 3-5 years');
					return;
				case '3':
					experience.push(' 6-10 years');
					return;
				case '4':
					experience.push(' 10+ years');
					return;
			}
		});
	}
	console.log('experience: %j', experience);
	var text = [
		'Type: Contact Form Submission',
		'Name:     ' 				+ req.body.name.toUpperCase(),
		'Email:    ' 				+ req.body.email.toUpperCase(),
		'Phone:    ' 				+ req.body.phone,
		'Service Requested:      ' 	+ req.body.service.toUpperCase(),
		'Experience Level: ' 		+ experience,
		'Message:   ' 				+ req.body.message.toUpperCase(),
		'Best Contact: ' 			+ req.body.contact
	].join('\n');
	console.log('text: %j', text);
	var mailOptions = {
		from: 'ascent-coaching@gmail.com',
		to: 'kelly@ascentcoaching.io',
		subject: 'Email contact form',
		text: text
	}
	var customer = {
		name: req.body.name,
		email: req.body.email,
		service: req.body.service,
		experience: experience,
		message: req.body.message,
		contact: req.body.contact,
	}
	saveCustomer(customer);
	return transporter.sendMail(mailOptions, function(error, info){
		if (error) {
			console.log(error);
			res.json(error);
		} else {
			console.log('Email sent: ' + info.response);
			res.json(info);
		}
	});
});

function saveCustomer(customer) {
	if(!customer._id) customer = new Customer(customer);
	return Customer.findByIdAndUpdate(customer._id, customer, {upsert:true, new:true}).exec();
}

app.get('/api/blogs', (req, res) => {
	return Article.find().exec().then(articles => {
		res.json(articles);
	})
});
