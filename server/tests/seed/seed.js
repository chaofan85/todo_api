const {ObjectID} = require('mongodb');
const {Todo} = require('./../../models/todo');

const preTodos = [{
  _id: new ObjectID(),
  text: "First test todo"
}, {
  _id: new ObjectID(),
  text: "Second test todo",
  completed: true,
  completedAt: 333
}];

const populateTodos = (done) => {
  Todo.remove({}).then(() => {
    Todo.insertMany(preTodos);
  }).then(() => done());
};

module.exports = {preTodos, populateTodos};
