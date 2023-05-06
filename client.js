const HttpClient = require("@actions/http-client");

function createPost({
  pageSecret,
  postTitle,
  postContent,
  postType,
  postStatus,
}) {
  const httpClient = new HttpClient.HttpClient();

  return httpClient.postJson(
    `https://changes.page/api/integrations/github/action-new-post`,
    {
      title: postTitle,
      content: postContent,
      type: postType,
      status: postStatus,
    },
    {
      "page-secret-key": pageSecret,
      "Content-Type": "application/json",
    }
  );
}

module.exports = {
  createPost,
};
