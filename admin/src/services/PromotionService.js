import http from "../http-common";

class PromotionService {
  
  getAll() {
    return http.get("/promotion/");
  }

  get(id) {
    return http.get(`/promotion/${id}`);
  }

  create(data) {
    return http.post("/promotion/", data);
  }

  update(id, data) {
    return http.put(`/promotion/update/${id}`, data);
  }

  delete(id) {
    return http.delete(`/promotion/delete/${id}`);
  }

  deleteAll() {
    return http.delete(`/promotion/delete`);
  }

  findByTitle(title) {
    return http.get(`/promotion?title=${title}`);
  }

  
}

export default new PromotionService();