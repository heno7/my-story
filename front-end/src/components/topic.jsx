export default function Topic({ topic }) {
  return (
    <div className="flex flex-col px-24 py-14 m-24 rounded-xl border-l-2 border-r-2 border-menu">
      <div className="flex flex-row justify-between">
        <div className="text-primary font-bold">{topic.name}</div>
        <div className="text-primary">{topic.author}</div>
      </div>
      <div className="text-primary  my-10">{topic.title}</div>
      <div className="text-primary pt-10 font-semibold ml-auto">
        {topic.storyCount} stories
      </div>
    </div>
  );
}
