import { HttpError } from '../helpers/index.js';

const isEmptyBody = (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        if (
            req.headers['content-type'] &&
            req.headers['content-type'].includes('multipart/form-data')
        ) {
            return next();
        }
    } else {
        const { length } = Object.keys(req.body);

        if (!length) {
            return next(HttpError(400, 'fields must be provided'));
        }

        return next();
    }
};

export default isEmptyBody;
