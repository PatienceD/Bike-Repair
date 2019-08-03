import axios from "axios";

export default {
  // Gets all saved books
  getAllClients: function() {
    return axios.get("/api/clients");
  },
  // Deletes the saved book with the given id
  getOne: function(id) {
    return axios.get("/api/clients/" + id);
  },
  // Saves an book to the database
  createUser: function() {
    return axios.post("/api/clients", );
  }
};
