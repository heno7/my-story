export default {
  async getAll() {
    const res = await fetch('/api/topics');
    const data = await res.json();
    return data;
  },
  async getAllStories(id) {
    const res = await fetch(`/api/topics/${id}/stories`);
    const data = await res.json();
    return data;
  },
};
