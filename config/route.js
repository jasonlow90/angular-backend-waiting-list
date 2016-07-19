var express = require('express');
var router = express.Router();
var expressJWT = require('express-jwt');
var jwt = require('jsonwebtoken');
var secret = "waiting_list";
var cors = require('cors');

router.use(cors());

var restaurantController = require('../controllers/RestaurantController');
var customerController = require('../controllers/CustomerController');


// ----------testing routes----------
// router.get('/customer/:id', restaurantController.showCustomer);
router.use('/:restaurantSuburb/admin', expressJWT({secret: secret})); // view list of customers waiting; selecting restaurant by Id
router.use('/:restaurantSuburb/admin/:phone', expressJWT({secret: secret}));
// router.use('/:restaurantSuburb/removecustomer', expressJWT({secret: secret}));
// router.use('/:restaurantSuburb/:phone/update', expressJWT({secret: secret}));
// router.use('/:restaurantSuburb/admin', expressJWT({secret: secret}));



// router.use('/remove', expressJWT({secret: secret}));

// ----------index----------
router.get('/', restaurantController.showRestaurants); // show all restaurants
// ----------restaurants---------- admin pages only, not viewable to public
router.post('/restaurant/add', restaurantController.addRestaurant); // submit restaurant to the database
router.post('/:restaurantNameSuburb/updaterestaurant', restaurantController.updateRestaurant); // submit restaurant to the database
router.post('/signin', restaurantController.signin);


// ----------customers----------
router.get('/:restaurantNameSuburb/admin/', customerController.getAllCustomers); // view list of customers waiting, but with the customer whose phone number is in url shown highlighted.
router.get('/:restaurantNameSuburb/public', customerController.getAllCustomers); // view list of customers waiting; selecting restaurant by Id
router.get('/:restaurantNameSuburb/admin/:phone', customerController.showCustomer); // view list of customers waiting, but with the customer whose phone number is in url shown highlighted.
router.post('/:restaurantNameSuburb/admin/', customerController.addCustomer); // submit customer to the database
router.delete('/:restaurantNameSuburb/admin/:phone', customerController.removeCustomer); // customer has been seated or canceled their 'order'
router.put('/:restaurantNameSuburb/admin/:phone', customerController.updateCustomer); // submit customer updates to database



module.exports = router;
