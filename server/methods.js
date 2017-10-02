var cheerio = Meteor.npmRequire('cheerio');

Meteor.methods({
    'booking.insert'({date, hour, providerId, user}) {
        check(date, String);
        check(hour, String);
        check(providerId, String);
        check(user, String);

        Bookings.insert({
            date: date,
            hour: hour,
            providerId: providerId,
            createdOn: new Date(),
            user: user
        });
    },
    'booking.remove'(userId, date){
        Bookings.remove({
            userId: userId,
            date: date
        });
    },
    'working.insert'({start_date, start_hour, finish_date, finish_hour, price, scope, providerId, user}) {
        check(start_date, String);
        check(start_hour, String);
        check(finish_date, String);
        check(finish_hour, String);
        check(price, String);
        check(scope, String);
        check(providerId, String);
        check(user, String);

        Workings.insert({
            start_date: start_date,
            start_hour: start_hour, 
            finish_date: finish_date, 
            finish_hour: finish_hour, 
            price: price, 
            scope: scope, 
            providerId: providerId,
            createdOn: new Date(),
            user: user
        });
    },    
    'rating.insert'({title, content, user, providerId}){
        check(title, String);
        check(content, String);
        check(user, String);
        check(providerId, String);

        Ratings.insert({
            title: title,
            content: content,
            createdOn: new Date(),
            user: user,
            providerId: providerId
        });
    },

});