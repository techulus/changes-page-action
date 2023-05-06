const core = require("@actions/core");
const { createPost } = require("./client");

async function run() {
  try {
    const pageSecret = core.getInput("page_secret", { required: true });
    const postTitle = core.getInput("post_title", { required: true });
    const postContent = core.getInput("post_content", { required: true });
    const postType = core.getInput("post_type");
    const postStatus = core.getInput("post_status");

    const { result } = await createPost({
      pageSecret,
      postTitle,
      postContent,
      postType,
      postStatus,
    });

    core.info(`Created Post with ID: ${result.id}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
