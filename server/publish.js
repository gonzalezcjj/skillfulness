Meteor.publish('getSkillDetails', function (skillId) {
    check(skillId, String);
    return Skills.find({_id: skillId});
});

Meteor.publish('rating', function (skillId) {
    check(skillId, String);
    return Ratings.find({skillId: skillId}, {sort: {createdOn: -1}});
});

// If `searchValue` is not provided, we publish all known messages. If it is
// provided, we publish only messages that match the given search value.
Meteor.publish("search", function (searchValue) {
    if (!searchValue) {
        return Skills.find({});
    }
    return Skills.find(
        {$text: {$search: searchValue}},
        {
            // `fields` is where we can add MongoDB projections. Here we're causing
            // each document published to include a property named `score`, which
            // contains the document's search rank, a numerical value, with more
            // relevant documents having a higher score.
            fields: {
                score: {$meta: "textScore"}
            },
            // This indicates that we wish the publication to be sorted by the
            // `score` property specified in the projection fields above.
            sort: {
                score: {$meta: "textScore"}
            }
        }
    );
});

Meteor.publish("latestSkillInfo", function (userId) {
    return SkillsInfo.find({}, {sort: {createdOn: -1}, limit: 1});
});