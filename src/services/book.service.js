import http from "../http-common";

class BookDataService {
  getAll() {
    return http.get("book/all");
  }
}

export default new BookDataService();