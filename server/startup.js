// start up function that creates entries in the Skills databases.
Meteor.startup(function () {
    // ensure index for full text search
    Skills._ensureIndex({
        "title": "text",
        "description": "text"
    });

    // code to run on server at startup
    if (!Skills.findOne()) {
        console.log("No websites yet. Creating starter data.");
        Skills.insert({
            title: "architect",
            url: "https://en.wikipedia.org/wiki/Architect",
            description: "Someone who plans, designs, and reviews the construction of buildings.",
            createdOn: new Date()
        });
        Skills.insert({
            title: "blacksmith",
            url: "https://en.wikipedia.org/wiki/Blacksmith",
            description: "Is a metalsmith who creates objects from wrought iron or steel by forging the metal, using tools to hammer, bend, and cut.",
            createdOn: new Date()
        });
        Skills.insert({
            title: "builder",
            url: "https://en.wikipedia.org/wiki/Builder",
            description: "Someone who specializes in building work.",
            createdOn: new Date()
        });
        Skills.insert({
            title: "carpentry",
            url: "https://en.wikipedia.org/wiki/Carpentry",
            description: "Is a skilled trade in which the primary work performed is the cutting, shaping and installation of building materials during the construction.",
            createdOn: new Date()
        });
        Skills.insert({
            title: "decorator",
            url: "https://en.wikipedia.org/wiki/Interior_design",
            description: "Someone who plans, researches, coordinates, and manages such projects.",
            createdOn: new Date()
        });
        Skills.insert({
            title: "electrician",
            url: "https://en.wikipedia.org/wiki/Electrician",
            description: "Is a tradesperson specializing in electrical wiring of buildings, stationary machines, and related equipment.",
            createdOn: new Date()
        });
        Skills.insert({
            title: "gardener",
            url: "https://en.wikipedia.org/wiki/Gardener",
            description: "Is any person involved in gardening.",
            createdOn: new Date()
        });                  
        Skills.insert({
            title: "inventor",
            url: "https://en.wikipedia.org/wiki/Inventor",
            description: "Is a person who creates or discovers a new method, form, device or other useful means.",
            createdOn: new Date()
        });
        Skills.insert({
            title: "maintenance",
            url: "https://en.wikipedia.org/wiki/Maintenance#Technical_maintenance",
            description: "Is intended to maintain or improve the health of some asset.",
            createdOn: new Date()
        });
        Skills.insert({
            title: "masonry",
            url: "https://en.wikipedia.org/wiki/Maintenance#Technical_maintenance",
            description: "Is the building of structures from individual units, which are often laid in and bound together by mortar.",
            createdOn: new Date()
        });
        Skills.insert({
            title: "painter",
            url: "https://en.wikipedia.org/wiki/House_painter_and_decorator",
            description: "Someone who paint to improve the aesthetic of a building and to protect it from damage by water, rust, corrosion, insects and mold.",
            createdOn: new Date()
        });
        Skills.insert({
            title: "plumber",
            url: "https://en.wikipedia.org/wiki/Plumber",
            description: "Someone who specializes in installing and maintaining systems used for potable (drinking) water, sewage and drainage in plumbing systems.",
            createdOn: new Date()
        });
        console.log("Count skills: " + Skills.find().count());
        console.log("Count ratings: " + Ratings.find().count());
    }
});
