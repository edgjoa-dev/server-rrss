import jwt, { Secret } from 'jsonwebtoken';

interface Payload {
    uid: string;
}

export const jwtGeneration = (uid: string = ''): Promise<string> => {
    return new Promise((resolve, reject) => {
        const payload: Payload = { uid };

        jwt.sign(payload, process.env.JWT_SECRET as Secret, {
            expiresIn: '4h'
        }, (error: Error | null, token?: string) => {
            if (error) {
                console.log(error);
                reject('Error al crear token');
            } else {
                if (token) {
                    resolve(token);
                } else {
                    reject('No se generó un token');
                }
            }
        });
    });
};