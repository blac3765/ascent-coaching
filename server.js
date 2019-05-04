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
})

var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');

// This is your API key that you retrieve from www.mailgun.com/cp (free up to 10K monthly emails)
var auth = {
	auth: {
		api_key: '56c853f2553ff625118e184e993b2db8-3fb021d1-93c5ca34',
		domain: 'https://api.mailgun.net/v3/sandboxae3e3c392f284f34b3268ff06102c615.mailgun.org'
	}
}

var nodemailerMailgun = nodemailer.createTransport(mg(auth));

app.post('/api/email', (req,res) => {
	if(req.body.experience) {
		var experience = [];
		req.body.experience.forEach(e => {
			switch(e) {
				case '0':
					experience.push('0-12 months');
					return;
				case '1':
					experience.push(' 1-2 years');
					return;
				case '2':
					experience.push(' 2-3 years');
					return;
				case '3':
					experience.push(' 3-5 years');
					return;
				case '4':
					experience.push(' 5+ years');
					return;
			}
		})
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
		to: 'sethtaylorblack@gmail.com',
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
	nodemailerMailgun.sendMail({from: 'Excited User <me@samples.mailgun.org>',
	to: req.body.email,
	subject: 'Hello',
	text: 'Testing some Mailgun awesomness!'}, function (err, info) {
		if (err) {
			console.log('Error: ' + err);
		}
		else {
			console.log('Response: ' + info);
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
