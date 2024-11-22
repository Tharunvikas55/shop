const mongoose = require("mongoose");
const schema = mongoose.Schema;

const customerSchema = new schema(
  {
    name: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Customer = mongoose.model("customer", customerSchema);

module.exports = Customer;
