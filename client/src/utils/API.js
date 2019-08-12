import axios from "axios";

export default {
  // Gets all saved books
  getAllClients: function() {
    console.log("Getting all clients");
    return axios.get("/api/clients");
  },
  // Deletes the saved book with the given id
  getOne: function(name) {
    return axios.get("/api/clients/" + name);
  },
  // Saves an book to the database
  createUser: function(obj) {
    return axios.post("/api/clients", obj);
  }
};
