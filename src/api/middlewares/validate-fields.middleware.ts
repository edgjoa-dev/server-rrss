import { validationResult } from 'express-validator'
import { NextFunction, request, response } from 'express'


export const fieldValidator = (req=request, res=response, next: NextFunction ) => {

    const errors = validationResult( req );

    if( !errors.isEmpty() ){
        return res.status(400).json(errors);
    }

    next();
};