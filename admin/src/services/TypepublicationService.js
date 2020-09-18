import http from "../http-common";

class TypepublicationService {
  
  getAll() {
    return http.get("/typepublication/");
  }

  get(id) {
    return http.get(`/typepublication/${id}`);
  }

  create(data) {
    return http.post("/typepublication/save", data);
  }

  update(id, data) {
    return http.put(`/typepublication/update/${id}`, data);
  }

  delete(id) {
    return http.delete(`/typepublication/delete/${id}`);
  }

  deleteAll() {
    return http.delete(`/typepublication/delete`);
  }

  findByTitle(title) {
    return http.get(`/publication?title=${title}`);
  }

  
}

export default new TypepublicationService();