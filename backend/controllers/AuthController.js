import getUserRepository from '../models/UserModel';

const { body,validationResult } = require('express-validator');
const { sanitizeBody } = require('express-validator');
//helper file to prepare responses.
const apiResponse = require('../helpers/apiResponse');

/**
 * User registration.
 *
 * @param {string}      firstName
 * @param {string}      lastName
 * @param {string}      email
 * @param {string}      password
 *
 * @returns {Object}
 */
export const register = [
	// Validate fields.
	body('firstName').isLength({ min: 1 }).trim().withMessage('First name must be specified.')
		.isAlphanumeric().withMessage('First name has non-alphanumeric characters.'),
	body('lastName').isLength({ min: 1 }).trim().withMessage('Last name must be specified.')
		.isAlphanumeric().withMessage('Last name has non-alphanumeric characters.'),
	body('email').isLength({ min: 1 }).trim().withMessage('Email must be specified.')
		.isEmail().withMessage('Email must be a valid email address.').custom((value) => {
			return getUserRepository().search().where('email').equals(value).returnCount().then((user) => {
				if (user) {
					return Promise.reject('E-mail already in use');
				}
			});
		}),
	// Sanitize fields.
	sanitizeBody('firstName').escape(),
	sanitizeBody('lastName').escape(),
	sanitizeBody('email').escape(),
	// Process request after validation and sanitization.
	async (req, res) => {
		try {
			// Extract the validation errors from a request.
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				// Display sanitized values/errors messages.
				return apiResponse.validationErrorWithData(res, 'Validation Error.', errors.array());
			}else {
				const userRep = getUserRepository();
				const user = userRep.createEntity({
					firstName: req.body.firstName,
					lastName: req.body.lastName,
					email: req.body.email,
					id: req.userId,
				});

				await userRep.save(user);
				res.status(200).json({
					success: true,
					message: 'User created successfully',
					data: user,
				});
			}
		} catch (err) {
			//throw error in json response with status 500.
			return apiResponse.ErrorResponse(res, err);
		}
	}];
