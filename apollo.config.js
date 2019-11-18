module.exports = {
  client: {
    service: {
      name: "hasura",
      url: "https://hasura-react-whatsapp.herokuapp.com/v1/graphql",
      headers: {
        "x-hasura-admin-secret": "admin123"
      }
    }
  }
};