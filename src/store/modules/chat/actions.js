import { fetchChatsFromBackend } from "../../../services/ChatService.js";

export default {
  async fetchChats(context, payload) {
    const chats = await fetchChatsFromBackend(payload);

    console.log(chats);
  },
};
