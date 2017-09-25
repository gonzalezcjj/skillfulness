Accounts.ui.config({
    passwordSignupFields: "USERNAME_AND_EMAIL"
});

Session.set("searchValue", undefined)

// Using phone numbers and city
const newContact = {
  localphoneNumber: localphoneNumber,
  mobilephoneNumber: mobilephoneNumber,
  city: city
};
Meteor.users.update(userId, {
  $set: {
    newContact: newMContact
  }
});