class BooksService {
  getData() {
    const result = [
      { name: '西游记', author: '吴承恩', price: '23' },
      { name: '水浒传', author: '施耐庵', price: '20' },
      { name: '三国演义', author: '罗贯中', price: '26' },
      { name: '红楼梦', author: '曹雪芹', price: '29' }
    ];
    return result;
  }
}
module.exports = BooksService;
