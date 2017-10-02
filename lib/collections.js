// Collections, called database on Meteor

// Skills with the table j001t_skill. 
// It's the skill inventory
Skills = new Mongo.Collection("j001t_skill");

// Bookings with the table c001t_booking. 
// It's the appointment between the customer
// with the skill provider
Bookings = new Mongo.Collection("c001t_booking");

Bookings.allow({
    // we need to able to insert a booking 
    insert: function (userId, doc) {
        console.log("testing security on booking insert");
        if (Meteor.user()) {// they are logged in
            return true;
        }
        else {// user not logged in
            return false;
        }
    },
    // we need to able to remove a booking 
    remove: function (userId, doc) {
        if (Meteor.user()) {
            return true;
        } else {
            return false;
        }
    }
});

// Working with the table c002t_working.
// It's about the skill provider do the work to the customer
Workings = new Mongo.Collection("c002t_working");

Workings.allow({
    // we need to be able to update works for ratings.
    update: function (userId, doc) {
        console.log("testing security on works update");
        if (Meteor.user()) {// they are logged in
            return true;
        } else {// user not logged in - do not let them update works.
            return false;
        }
    },
    insert: function (userId, doc) {
        console.log("testing security on works insert");
        if (Meteor.user()) {// they are logged in
            return true;
        }
        else {// user not logged in
            return false;
        }
    },
    remove: function (userId, doc) {
        if (Meteor.user()) {
            return true;
        } else {
            return false;
        }
    }
});

// Ratings with the table c003t_rating.
// It's the rating about the the customer
// to the work performance of the skill provider 
Ratings = new Mongo.Collection("c003t_rating");

Ratings.allow({
    // we need to be able to update ratings.
    update: function (userId, doc) {
        console.log("testing security on Ratings update");
        if (Meteor.user()) {// they are logged in
            return true;
        } else {// user not logged in - do not let them update rating.
            return false;
        }
    },
    insert: function (userId, doc) {
        console.log("testing security on Ratings insert");
        if (Meteor.user()) {// they are logged in
            return true;
        }
        else {// user not logged in
            return false;
        }
    },
    remove: function (userId, doc) {
        if (Meteor.user()) {
            return true;
        } else {
            return false;
        }
    }
});
