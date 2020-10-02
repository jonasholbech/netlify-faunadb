const sendQuery = require("./helpers/send-query");

const GET_ALL_COMMENTS = `
query {
    allLists {
      data {
        _id
        _ts
        title
        slug
        comments {
          data {
            _id
            author
            comment
            _ts
            list {
              _id
            }
            comments {
              data {
                _id
                comment
                author
                parentId
              }
            }
          }
        }
      }
    }
  }
`;

exports.handler = async () => {
  const { data, errors } = await sendQuery(GET_ALL_COMMENTS);

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ lists: data.allLists.data }),
  };
};
