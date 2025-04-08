export default function Story({ story }) {
  return (
    <div className="flex flex-col px-24 py-14 m-24 rounded-xl border-l-2 border-r-2 border-menu">
      <div className="flex flex-row justify-between">
        <div className="text-primary">{story.createdAt}</div>
        <div className="text-primary">{story.author}</div>
      </div>
      <div className="text-primary font-bold my-10">{story.title}</div>
      <div className="text-primary">{story.shortText}</div>
      <div className="text-primary pt-10 font-semibold ml-auto">
        {story.topic}
      </div>
    </div>
  );
}
