export class CanOnlyDeletePostsYouOwnError extends Error {
  constructor() {
    const message = "You can only delete your posts";
    super(message);
    this.message = message;
  }
}
