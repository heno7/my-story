export default function Story({ story }) {
  console.log('story', story);
  return (
    <div className="bg-blue flex flex-col px-24 py-14 m-24 rounded-xl shadow-story">
      <div className="flex flex-row justify-between">
        <div className="text-primary">{story.createdAt}</div>
        <div className="text-primary">{story.author}</div>
      </div>
      <div className="text-primary font-bold my-10">{story.title}</div>
      <div className="text-primary">{story.shortText}</div>
      <div className="text-primary pt-10 font-semibold">{story.topic}</div>
    </div>
  );
}
