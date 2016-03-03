/**
 * Created by im on 2/28/16.
 */
function onReady() {
    angular.bootstrap(document, ['app']);
}

if (Meteor.isCordova)
    angular.element(document).on('deviceready', onReady);
else
    angular.element(document).ready(onReady);

Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
});
