import Markdown from 'react-markdown';

export default function DetailStory({ story }) {
  return (
    <div className="m-24 h84 w-full bg-amber-400">
      <div>Published: {story.createdAt}</div>
      <div>Updated: {story.updatedAt}</div>
      <div>Author: {story.author}</div>
      <div>{story.topic}</div>
      <div>{story.title}</div>
      <div>
        <Markdown>{story.markdownContent}</Markdown>
      </div>
    </div>
  );
}
