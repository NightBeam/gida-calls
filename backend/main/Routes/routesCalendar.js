const router = require('express').Router();
const passport = require('passport');
const auth = passport.authenticate('jwt', { session: false })
const { GetDynamic, GetStatic, PutDynamic, GetDynamicNow } = require('./routesMethods');

router.get('/dynamic/now', GetDynamicNow);
router.get('/static', auth, GetStatic);
router.get('/dynamic', auth, GetDynamic);
router.put('/dynamic', auth, PutDynamic);

module.exports = router;