import http from "../http-common";

class PublicationService {
  
  getAll() {
    return http.get("/publication/");
  }

  get(id) {
    return http.get(`/publication/${id}`);
  }

  create(data) {
    return http.post("/publication/save", data);
  }

  update(id, data) {
    return http.put(`/publication/update/${id}`, data);
  }

  delete(id) {
    return http.delete(`/publication/delete/${id}`);
  }

  deleteAll() {
    return http.delete(`/publication/delete`);
  }

  findByTitle(title) {
    return http.get(`/publication?title=${title}`);
  }

  
}

export default new PublicationService();