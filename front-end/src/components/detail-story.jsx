import Markdown from 'react-markdown';
import MDEditor from '@uiw/react-md-editor';
// import { useState } from 'react';

export default function DetailStory({ story }) {
  const markdownContent = `
# The Lost Compass
## Chapter 1: The Storm

The waves crashed against the hull of the *Silver Gull* as Captain Elias gripped the wheel with white-knuckled determination. The storm had come out of nowhere—a tempest of howling winds and torrential rain that turned the once-calm sea into a churning nightmare.

*"We need to find shelter!"* First Mate Cora shouted over the roaring wind.

Elias squinted through the downpour. "There’s an island to the east! Hard to starboard!"

But as the crew scrambled to adjust the sails, a deafening **crack** split the air—the mast had snapped.

The waves crashed against the hull of the *Silver Gull* as Captain Elias gripped the wheel with white-knuckled determination. The storm had come out of nowhere—a tempest of howling winds and torrential rain that turned the once-calm sea into a churning nightmare.

*"We need to find shelter!"* First Mate Cora shouted over the roaring wind.

Elias squinted through the downpour. "There’s an island to the east! Hard to starboard!"

But as the crew scrambled to adjust the sails, a deafening **crack** split the air—the mast had snapped. But as the crew scrambled to adjust the sails, a deafening **crack** split the air—the mast had snapped.

## Chapter 2: The Mysterious Island

  When Elias awoke, the storm had passed. He found himself on a white sandy beach, the *Silver Gull* wrecked in the shallows. The rest of the crew were scattered along the shore, bruised but alive.

Cora knelt beside him. *"We lost the compass in the storm. Without it, we’ll never navigate these waters."*

Just then, a faint glint caught Elias’s eye. Buried in the sand was a rusted metal box. Inside lay an **ancient compass**, its needle spinning wildly before settling on a direction—not north, but toward the island’s dense jungle.

## Chapter 3: The Hidden Treasure

Following the compass, the crew ventured into the jungle, where vines choked crumbling stone ruins. At the heart of the ruins stood a pedestal, and atop it—a **golden map** of the stars.

*"This isn’t just any compass,"* whispered Elias. *"It points to lost things."*

Suddenly, the ground trembled. A hidden door slid open beneath the pedestal, revealing a trove of treasures—gems, artifacts, and a ship’s log from a legendary lost explorer.

## Epilogue

With the treasure secured and the compass guiding them, the crew repaired the *Silver Gull* and set sail. But Elias kept glancing at the compass, now pointing steadily toward the horizon—where new adventures awaited.

---

**The End.**

    `;
  // const [value, setValue] = useState('**Hello world!!!**');
  return (
    <>
      <div className="m-30">
        <div className="flex justify-between">
          <div className="">
            <div>Published: {story.createdAt}</div>
            <div className="mt-10">Updated: {story.updatedAt}</div>
          </div>
          <div>
            <div>Author: {story.author}</div>
            <div className="mt-10 flex justify-end">{story.topic}</div>
          </div>
        </div>
        <div className="font-bold mt-20 m-b-10 text-primary">{story.title}</div>
      </div>
      {/* <div className="mx-26">
        <Markdown>{markdownContent}</Markdown>
      </div> */}
      <div className="container px-26 mx-auto">
        {/* <MDEditor value={value} onChange={setValue} /> */}
        <MDEditor.Markdown
          source={markdownContent}
          style={{ whiteSpace: 'pre-wrap', margin: '0 auto' }}
        />
      </div>
    </>
  );
}
