//////
// helpers
//////

function isLogged() {
    if (Meteor.user()) {
        return true;
    } else {
        return false;
    }
}

function getUserName(userId) {
    var user = Meteor.users.findOne({_id: userId});
    if (user) {
        return user.username;
    }
    else {
        return "anon";
    }
}

function cleanUpProviderInfo() {
    if (isLogged()) {
        var userId = Meteor.userId();
        Meteor.call('providerInfo.remove', userId);
    }
}

function isValidPhone(phone) {
    var regexQuery = "^([0-9]{11,11})?$";
    var phoneregex = new RegExp(regexQuery, "i");
    return phoneregex.test(phone);
}

/////
// template helpers
/////

Template.search.events({
    'keyup .js-set-provider-filter': function (event) {
        Session.set("searchValue", event.currentTarget.value);
    }
});

Template.provider_list.rendered = function () {
    $("#items").toggle('slow');
    Session.set("searchValue", undefined);
}

// helper function that returns all available skill providers
Template.provider_list.helpers({
    skills: function () {
        Meteor.subscribe("search", Session.get("searchValue"));

        if (Session.get("searchValue")) {// they set a filter!
            return Provider.find({}, {sort: [["rating", "desc"]]});
        }
        else {
            return Provider.find({}, {sort: {rating: -1}});
        }
    }
});

Template.provider_form.rendered = function () {
    cleanUpProviderInfo();
    $("#getInfo").toggle('slow');
    $("#tryPhone").focus();
};

Template.provider_form.helpers({
    loggedUser: function () {
        return isLogged();
    },
    providerInfos: function () {
        var userId = Meteor.userId();
        Meteor.subscribe("latestproviderInfo", userId);
        return ProviderInfos.find({}, {sort: {createdOn: -1}, limit: 1});
    }
});

Template.navbar.helpers({
    loggedUser: function () {
        return isLogged();
    },
});

Template.provider_item.helpers({
    getUserName: function (userId) {
        return getUserName(userId);
    },
    getRating: function () {
        return this.rating ? this.rating : 0;
    }
});

Template.working_item.helpers({
    getUserName: function (userId) {
        return getUserName(userId);
    },
});

Template.provider_rating_form.helpers({
    loggedUser: function () {
        return isLogged();
    },
});

Template.provider_details.helpers({
    getUserName: function (userId) {
        return getUserName(userId);
    },
    workings: function () {
        Meteor.subscribe("workings", this._id);
        return Posts.find({providerId: this._id}, {sort: {createdOn: -1}});
    },
    rating: function () {
        Meteor.subscribe("rating", this._id);
        return Posts.find({providerId: this._id}, {sort: {createdOn: -1}}).count();
    },
    getRating: function () {
        return this.rating ? this.rating : 0;
    }
});

/////
// template events
/////

Template.provider_item.events({
    "click .js-uprating": function (event) {
        // example of how you can access the id for the provider in the database
        // (this is the data context for the template)
        var provider_id = this._id;
        // put the code in here to add a rating to a provider!
        Meteor.call("provider.rating", {providerId: provider_id, rating: 1})
        return false;// prevent the button from reloading the page
    },
    "click .js-downrating": function (event) {

        // example of how you can access the id for the provider in the database
        // (this is the data context for the template)
        var provider_id = this._id;
        Meteor.call("provider.rating", {providerId: provider_id, rating: -1});

        // put the code in here to remove a rating from a provider!

        return false;// prevent the button from reloading the page
    }
});

Template.booking_form.events({
    "submit .js-save-booking-form": function (event) {
        //  put your booking saving code in here!
        Meteor.call('booking.insert', {
            date: event.target.date.value,
            hour: event.target.hour.value,
            providerId: event.target.providerId.value,
            user: Meteor.user()._id
        });

        $("#booking_form").toggle('hide');
        Router.go("/");
        return false;// stop the form submit from reloading the page
    }
});
Template.booking_rating_form.events({
    "click .js-toggle-booking-rating-form": function (event) {
        $("#booking_rating_form").toggle('slow');
    },
    "submit .js-save-booking-rating-form": function (event) {
        Meteor.call('rating.insert', {
            title: event.target.rating_title.value,
            content: event.target.rating_content.value,
            user: Meteor.user()._id,
            providerId: this._id
        });
        $("#booking_rating_form").toggle('hide');
        return false;// stop the form submit from reloading the page
    }
});

Template.booking_rating_form.rendered = function () {
    $('#rating_title').focus();
};

// Date input
Template.myTemplate.rendered = function(){
     $('.datetimepicker').each(function(){
           $(this).datetimepicker(); 
     });
}