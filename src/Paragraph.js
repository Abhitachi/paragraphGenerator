import React from "react";
import Reset from "./Reset";

const Paragraph = ({ count }) => {
  const paragraphs = [
    "“Jane, I will not trouble you with abominable details: some strong words shall express what I have to say.  I lived with that woman upstairs four years, and before that time she had tried me indeed: her character ripened and developed with frightful rapidity; her vices sprang up fast and rank: they were so strong, only cruelty could check them, and I would not use cruelty.  What a pigmy intellect she had, and what giant propensities!  How fearful were the curses those propensities entailed on me!  Bertha Mason, the true daughter of an infamous mother, dragged me through all the hideous and degrading agonies which must attend a man bound to a wife at once intemperate and unchaste.”",
    "It could not have been ten seconds, and yet it seemed a long time that their hands were clasped together.  He had time to learn every detail of her hand.  He explored the long fingers, the shapely nails, the work-hardened palm with its row of callouses, the smooth flesh under the wrist.  Merely from feeling it he would have known it by sight.  In the same instant it occurred to him that he did not know what colour the girl's eyes were.  They were probably brown, but people with dark hair sometimes had blue eyes.  To turn his head and look at her would have been inconceivable folly.  With hands locked together, invisible among the press of bodies, they stared steadily in front of them, and instead of the eyes of the girl, the eyes of the aged prisoner gazed mournfully at Winston out of nests of hair.",
    "But I did not know how to make my apology. The words that had strung themselves so easily to make a blunder in the drawing room would not come now that I wished the blunder remedied.  I stood there below her window, tongue-tied and ashamed.  Suddenly I saw her turn and stretch behind her, and then she leant forward once again and threw something at me from the window.  It struck me on the cheek and fell to the ground.  I stooped to pick it up.  It was one of the flowers from her bowl, an autumn crocus.",
    "Books bombarded his shoulder, his arms, his upturned face.  A book lit, almost obediently, like a white pigeon, in his hands, wings fluttering.  In the dim, wavering light, a page hung open and it was like a snowy feather, the words delicately painted thereon.  In all the rush and fervor, Montage had only an instant to read a line, but it blazed in his mind for the next minute as if stamped there with fiery steel.  “Time has fallen asleep in the afternoon sunshine.”  He dropped the book.  Immediately, another fell into his arms.”",
    "What they do not comprehend is man’s helplessness. I am weak, small, and of no consequence to the universe.  It does not notice me; I live on unseen.  But why is that bad?  Isn’t it better that way?  Whom the gods notice they destroy.  But small...and you will escape the jealousy of the great.",
    "Soon we were hemmed in with trees, which in places arched right over the roadway till we passed as through a tunnel; and again great frowning rocks guarded us boldly on either side.  Though we were in shelter, we could hear the rising wind, for it moaned and whistled through the rocks, and the branches of the trees crashed together as we swept along.  It grew colder and colder still, and fine, powdery snow began to fall, so that soon we and all around us were covered with a white blanket.  The keen wind still carried the howling of the dogs, though this grew fainter as we went on our way.  The baying of the wolves sounded nearer and nearer, as though they were closing round on us from every side.  I grew dreadfully afraid, and the horses shared my fear.  The driver, however, was not in the least disturbed; he kept turning his head to left and right, but I could not see anything through the darkness.",
    "They picked a way among the trees, and their ponies plodded along, carefully avoiding the many writhing and interlacing roots.  There was no undergrowth.  The ground was rising steadily, and as they went forward it seemed that the trees became taller, darker, and thicker. There was no sound, except an occasional drip of moisture falling through the still leaves.  For the moment there was no whispering or movement among the branches; but they all got an uncomfortable feeling that they were being watched with disapproval, deepening to dislike and even enmity.  The feeling steadily grew, until they found themselves looking up quickly, or glancing back over their shoulders, as if they expected a sudden blow.",
    "What they do not comprehend is man’s helplessness. I am weak, small, and of no consequence to the universe.  It does not notice me; I live on unseen.  But why is that bad?  Isn’t it better that way?  Whom the gods notice they destroy.  But small...and you will escape the jealousy of the great.",
  ];

  if (count > paragraphs.length || count < 0)
    return (
      //   <div className="mx-auto w-6/12 border-3 p-4 relative z-40 border-black  h-[250px] bg-slate-100 mt-6 shadow-xl shadow-slate-300">
      //     <h2 className="text-lg font-bold text-center">You have Reached the Limit Please Reset your Paragraph Count 😊</h2>

      //   </div>
      <Reset count={count} />
    );
  return (
    <div className="mx-auto w-9/12 p-2 text-base font-medium">
      {count <= paragraphs.length &&
        paragraphs.slice(0, count).map((para, index) => (
          <p
            key={index}
            className="py-2 text-yellow-950 border-b-2 border-gray-500"
          >
            {para}
          </p>
        ))}
    </div>
  );
};

export default Paragraph;
