module.exports = {
    "schema": [
        {
            'https://hasura-react-whatsapp.herokuapp.com/v1/graphql': {
                "headers": {
                    "x-hasura-admin-secret": "admin123"
                }
            }
        }
    ],
    "documents": [
        "./src/**/*.tsx",
        "./src/**/*.ts"
    ],
    "overwrite": true,
    "generates": {
        "./src/server/types.ts": {
            "plugins": [
                "typescript-common",
                "typescript-client"
            ]
        }
    }
};
