const Customer = require("../../models/Customer");

exports.fetchCustomerDetails = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (error) {
    console.error("Error fetching customer details:", error);
    res.status(500).json({ error: "Failed to fetch customer details" });
  }
};

exports.addCustomer = async (req, res) => {
  const { name, mobileNumber, address } = req.body;

  if (!name || !mobileNumber) {
    return res
      .status(400)
      .json({ error: "Name and mobile number are required" });
  }

  try {
    const existingCustomer = await Customer.findOne({ mobileNumber });
    if (existingCustomer) {
      return res
        .status(409)
        .json({ error: "Customer with this mobile number already exists" });
    }

    const newCustomer = new Customer({
      name,
      mobileNumber,
      address,
      role: "customer",
    });

    await newCustomer.save();
    res.status(201).json({
      message: "Customer created successfully",
      customer: newCustomer,
    });
  } catch (error) {
    console.error("Error adding customer:", error);
    res.status(500).json({ error: "Failed to add customer" });
  }
};
