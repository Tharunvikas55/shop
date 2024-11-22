const Customer = require("../../models/Customer");

exports.fetchCustomerDetails = async (req, res, next) => {
  const data = Customer.find();
  res.json(data);
};
