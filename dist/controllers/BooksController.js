var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

const {
  route,
  GET
} = require('awilix-koa');

let BooksController = (_dec = route('/books'), _dec2 = route('/'), _dec3 = GET(), _dec4 = route('/list'), _dec5 = GET(), _dec6 = route('/add'), _dec7 = GET(), _dec(_class = (_class2 = class BooksController {
  constructor({
    booksService
  }) {
    this.booksService = booksService;
  }

  async actionIndex(ctx, next) {
    ctx.type = 'html';
    ctx.body = await ctx.render('books/pages/index');
  }

  async actionList(ctx, next) {
    const result = this.booksService.getData();
    ctx.body = await ctx.render('books/pages/list', {
      data: result
    });
  }

  async actionAdd(ctx, next) {
    ctx.body = await ctx.render('books/pages/add');
  }

}, (_applyDecoratedDescriptor(_class2.prototype, "actionIndex", [_dec2, _dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "actionIndex"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "actionList", [_dec4, _dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "actionList"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "actionAdd", [_dec6, _dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "actionAdd"), _class2.prototype)), _class2)) || _class);
module.exports = BooksController;