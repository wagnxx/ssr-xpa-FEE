const { route, GET } = require('awilix-koa');
@route('/books')
class BooksController {
  constructor({ booksService }) {
    this.booksService = booksService;
  }
  @route('/')
  @GET()
  async actionIndex(ctx, next) {
    ctx.type = 'html';
    ctx.body = await ctx.render('books/pages/index');
  }
  @route('/list')
  @GET()
  async actionList(ctx, next) {
    const result = this.booksService.getData();
    ctx.body = await ctx.render('books/pages/list', {
      data: result
    });
  }
  @route('/add')
  @GET()
  async actionAdd(ctx, next) {
    ctx.body = await ctx.render('books/pages/add');
  }
}

module.exports = BooksController;
