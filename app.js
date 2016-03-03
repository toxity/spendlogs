
Expenses = new Mongo.Collection('expenses');

Meteor.methods({
  addSpending: function (date, description, category) {

    Expenses.insert({
      date: date,
      description: description,
      category: category,
      username: Meteor.user().username
    });
  },

  removeSpending: function (id) {
    Expenses.remove(id);
  }

});
