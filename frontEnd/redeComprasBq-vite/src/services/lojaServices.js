import { useParams } from "react-router-dom";

const API_URL = 'http://localhost:3000/armarios';

export const lojaService = {
  buscarTodos: async () => {
    try {

      const response = await fetch(API_URL);
      const dados = await response.json();
      return dados;

    } catch (error) {
      console.error("Falha ao buscar todos os armários:", error);
    }
  },

  buscarPorId: async (id) => {
    try {

      const response = await fetch(`${API_URL}/${id}`);
      const dados = await response.json();
      return dados;

    } catch (error) {
      console.error(`Falha ao buscar o armário com ID ${id}:`, error);
    }
  }
};