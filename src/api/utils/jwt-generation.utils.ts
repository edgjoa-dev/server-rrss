import jwt from 'jsonwebtoken';

export const jwtGeneration = (uid = '') => {

    return new Promise(( resolve, reject ) => {
        const payload = { uid };

        jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '4h'
        }, (error: string, token: string)=>{
            if(error){
                console.log(error);
                reject('Error al crear token');
            }else{
                resolve(token);
            }
        })
    })

}