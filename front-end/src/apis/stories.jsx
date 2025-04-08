export default {
  async getAll() {
    const res = await fetch('/api/stories');
    const data = await res.json();
    console.log(data);
    return data;
  },

  async getStory(id) {
    const res = await fetch('/api/stories/' + id);
    const data = await res.json();
    return data;
  },
};
