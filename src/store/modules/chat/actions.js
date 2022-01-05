import { fetchChatsFromBackend } from "../../../services/ChatService.js";

export default {
  async fetchChats(context, payload) {
    let chats = await fetchChatsFromBackend(payload);
    chats = chats.data.chats;

    context.commit("setChats", chats);
  },
  setCurrentChat(context, payload) {
    context.commit("setCurrentChat", payload);
  },
};
