// configure the special accounts user interface
// by setting up some extra fields and specifying constraints

Accounts.ui.config({
    passwordSignupFields: "USERNAME_AND_EMAIL",
	requestPermissions: {},
    extraSignupFields: [{
        fieldName: 'first-name',
        fieldLabel: 'First name',
        inputType: 'text',
        visible: true,
        validate: function(value, errorFunction) {
          if (!value) {
            errorFunction("Please write your first name");
            return false;
          } else {
            return true;
          }
        }
    }, {
        fieldName: 'last-name',
        fieldLabel: 'Last name',
        inputType: 'text',
        visible: true,
    }, {
        fieldName: 'gender',
        showFieldLabel: false,      // If true, fieldLabel will be shown before radio group
        fieldLabel: 'Gender',
        inputType: 'radio',
        radioLayout: 'vertical',    // It can be 'inline' or 'vertical'
        data: [{                    // Array of radio options, all properties are required
            id: 1,                  // id suffix of the radio element
            label: 'Male',          // label for the radio element
            value: 'm'              // value of the radio element, this will be saved.
          }, {
            id: 2,
            label: 'Female',
            value: 'f',
            checked: 'checked'
        }],
        visible: true
    }, {
        fieldName: 'skill',
        fieldLabel: 'Skill',
        inputType: 'select',
        showFieldLabel: true,
        empty: 'Please select your specific skill',
        data: [{
            id: 1,
            label: 'architect',
            value: 'ar',
          }, {
            id: 2,
            label: 'blacksmith',
            value: 'bl',
          }, {
            id: 3,
            label: 'builder',
            value: 'bu',
          }, {
            id: 4,
            label: 'carpentry',
            value: 'ca',
          }, {
            id: 5,
            label: 'decorator',
            value: 'de',
          }, {
            id: 6,
            label: 'electrician',
            value: 'el',
          },{
            id: 7,
            label: 'gardener',
            value: 'ga',
          }, {
            id: 8,
            label: 'inventor',
            value: 'in',
          }, {
            id: 9,
            label: 'maintenance',
            value: 'ma',
          }, {
            id: 10,
            label: 'masonry',
            value: 'ms',
          }, {
            id: 11,
            label: 'painter',
            value: 'pa',
          }, {
            id: 12,
            label: 'plumber',
            value: 'pl',
        }],
        visible: true
    }, {
        fieldName: 'mobilephoneNumber',
        fieldLabel: 'Mobile phone number',
        inputType: 'text',
        visible: true,
        validate: function(value, errorFunction) {
          if (!value) {
            errorFunction("Please write your Mobile phone number");
            return false;
          } else {
            return true;
          }
        }
    }, {
        fieldName: 'terms',
        fieldLabel: 'I accept the terms and conditions <a href="">See t and x...</a>',
        inputType: 'checkbox',
        visible: true,
        saveToProfile: false,
        validate: function(value, errorFunction) {
            if (value) {
                return true;
            } else {
                errorFunction('You must accept the terms and conditions.');
                return false;
            }
        }
    }]
});

Session.set("searchValue", undefined)

