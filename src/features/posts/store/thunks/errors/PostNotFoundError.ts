export class PostNotFoundError extends Error {
  constructor() {
    const message = "Post not found";
    super(message);
    this.message = message;
  }
}
