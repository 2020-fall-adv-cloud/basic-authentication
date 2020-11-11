import React, { useEffect } from 'react';
import { Auth } from 'aws-amplify';
import Container from './Container';

const Protected = ({ history }) => {
    useEffect(
        async () => {
            try {
                await Auth.currentAuthenticatedUser();
                console.log('User is authenticated in try block ! ! !');
            }

            catch(e) {
                console.error(e);
                history.push('/profile');
            }
        }
        , []
    );

    return (
        <Container>
            <h1>
                Protected route...
            </h1>
        </Container>
    );
}

export default Protected;