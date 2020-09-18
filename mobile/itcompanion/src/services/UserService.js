

class UserService {
    constructor() {
        const http = "";
    }
    getAll() {
        return http.get("/evenement/events");
    }
    get(id) {
        return http.get(`/evenement/event/${id}`);
    }

    create(data) {
        return http.post("/tutorials", data);
    }

    update(id, data) {
        return http.put(`/tutorials/${id}`, data);
    }

    delete(id) {
        return http.delete(`/tutorials/${id}`);
    }

    deleteAll() {
        return http.delete(`/tutorials`);
    }

    findByTitle(title) {
        return http.get(`/tutorials?title=${title}`);
    }


}

export default new EvenementService();