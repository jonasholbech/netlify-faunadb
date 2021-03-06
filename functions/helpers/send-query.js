require("dotenv").config();
const axios = require("axios");

module.exports = async (query, variables) => {
  const result = await axios({
    url: "https://graphql.datocms.com/",
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.DATO_CMS_CONTENT_KEY}`,
    },
    data: {
      query,
      variables,
    },
  });

  return result.data;
};
