const express = require('express');
const router = express.Router();
const User = require('./../../../mysqlModels/User');
const Customer = require('./../../../mysqlModels/Customer');
const Seller = require('./../../../mysqlModels/Seller');
const Admin = require('./../../../mysqlModels/Admin');


const sequelize = require('./../../../db/SQLdatabase')


router.post('/', async (req, res) => {
    const transaction = await sequelize.transaction();
    try {
        const user = await User.create({
            email: req.body.email,
            password: req.body.password,
            userType: req.body.userType
        }, { transaction: transaction })
        if (user.userType === "customer") {
            var customer = await Customer.create({ name: req.body.name }, { transaction: transaction })
            customer = await customer.setUser(user);
        }
        else if (user.userType === "seller") {
            var seller = await Seller.create({ name: req.body.name }, { transaction: transaction })
            seller = await seller.setUser(user);
        }
        else {
            var admin = await Admin.create({ name: req.body.name }, { transaction: transaction })
            admin = await admin.setUser(user);
        }
        transaction.commit()
        return res.status(200).send(user);
    }
    catch (err) {
        console.log(err)
        transaction.rollback();
    }
    return res.status(500).send("Internal Server Error!");

})



module.exports = router;