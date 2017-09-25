/// routing

Router.configure({
    layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function () {
    this.render('navbar', {
        to: "navbar"
    });
    this.render('provider_list', {
        to: "main"
    });
}, {
    name: "home",
});

Router.route('/addbooking', function () {
    this.render('navbar', {
        to: "navbar"
    });
    this.render('booking_form', {
        to: "main",
    });
});

Router.route('/booking/:_id', function () {
    this.render('navbar', {
        to: "navbar"
    });
    this.render('booking_details', {
        to: "main",
        data: function () {
            Meteor.subscribe("getProviderDetails", this.params._id);
            return Bookings.findOne({_id: this.params._id});
        }
    });
});
