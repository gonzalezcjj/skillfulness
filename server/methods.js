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
/*    'httpGetSiteInfo': function ({url, userId}) {
        check(url, String);
        check(userId, String);
        this.unblock();
        try {
            var result = HTTP.call("GET", url);
            var status = result.statusCode;
            console.log("status: " + status);
            if (status === 200) {
                $ = cheerio.load(result.content);
                var result = {
                    "userId": userId,
                    "url": url,
                    "status": status,
                    "title": $("title").text(),
                    "createdOn": new Date(),
                    "description": $("meta[name='description']").attr("content")
                };
                SiteInfos.insert(result);
            }
        } catch (e) {
            // Got a network error, time-out or HTTP error in the 400 or 500 range.
            console.log("Error: " + e);
        }
    },*/
});