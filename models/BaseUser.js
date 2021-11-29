const util = require("util");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

function BaseUserSchema() {
  Schema.apply(this, arguments);

  this.add({
    handle: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    phone: {
      type: String,
      required: true,
    },
    isClinician: {
      type: Boolean,
      default: false,
    },
    calendar: {
      type: Array,
      default: [
        {
          Id: 1,
          Subject: "Clinicians are not available",
          StartTime: new Date(2021, 0, 24, 10, 0),
          EndTime: new Date(2021, 0, 24, 12, 30),
          IsAllDay: true,
          RecurrenceRule: "FREQ=WEEKLY;BYDAY=SA,SU;",
          IsBlock: true,
        },
      ],
    },
  });
}

util.inherits(BaseUserSchema, Schema);

// BaseUser = mongoose.model('BaseUser', BaseUserSchema);

const UserSchema = new BaseUserSchema();
UserSchema.virtual("type").get(function () {
  return this.__t;
});

User = mongoose.model("User", UserSchema);

module.exports = {
  BaseUserSchema,
  User,
};
