const answers = [];
const questions = document.querySelectorAll('.question');
const result = document.getElementById('result');
const personalitySpan = document.getElementById('personality');

// Personality results mapping
const personalityResults = {
  '0000': 'a personality that balances thoughtfulness, emotional depth, and ambition. You are likely a conscientious, detail-oriented individual who values stability and careful, deliberate work. At the same time, your emotionally expressive and relational nature hints at creativity and artistry, reflecting a strong connection to others. While moments of low energy or hidden insecurities may emerge, your optimistic and forward-looking attitude drives you toward positivity and ambition. Outgoing and people-oriented, you have a natural desire to connect and be seen, blending confidence with introspection.',
  '0001': 'a conscientious, detail-oriented individual who values a thoughtful and methodical approach, finding fulfillment in deliberate and steady work. Emotionally expressive and agreeable, you engage deeply with feelings and interactions, often leaning toward creativity and artistry. A downward slant may suggest low energy or hidden discouragement, while an upward slant conveys optimism, ambition, and a forward-looking mindset. If your writing tends to be smaller, it highlights an introspective nature, a preference for staying out of the spotlight, and a sense of humility. This suggests strong focus, meticulousness, and the ability to concentrate deeply.',
  '0010': 'a personality that values thoughtfulness, consistency, and emotional connection. You are likely conscientious and detail-oriented, preferring a steady, methodical approach to life. This reflects a disciplined and reliable nature, paired with a strong work ethic and resilience. Emotionally expressive and relational, you engage deeply with your feelings and interactions, often leaning toward creativity and artistry. Outgoing and people-oriented, you enjoy being seen and heard, yet this confidence may sometimes mask underlying insecurities. Overall, your writing reveals a balanced blend of stability, emotional depth, and a desire to connect with others.',
  '0011': 'a conscientious, detail-oriented individual who values a thoughtful and methodical approach, finding fulfillment in deliberate and steady work. It often suggests emotional expressiveness and agreeableness, with a natural inclination toward creativity and artistry. A steady and reliable nature, combined with disciplined energy management, indicates resilience and a strong work ethic. Smaller handwriting reveals an introspective personality, marked by humility, focus, and meticulous attention to detail, with an exceptional ability to concentrate while choosing to stay out of the spotlight.',
  '0100': 'a conscientious and detail-oriented individual who values a thoughtful, steady approach and finds fulfillment in deliberate work. This reflects a methodical mindset, preferring stability and attention to detail. If your handwriting is angular, it suggests a more analytical and direct approach, with critical thinking abilities and a possible tendency toward intensity or irritability. Such individuals often thrive in debates and enjoy dissecting complex issues. Large handwriting indicates a personality that enjoys being in the spotlight, outgoing and people-oriented, though it may also mask insecurities. A downward slant could indicate underlying feelings of discouragement or low energy, while an upward slant suggests optimism, ambition, and a forward-looking attitude.',
  '0101': 'a person with a more analytical and direct mindset, particularly if its sharply angular. This reflects critical thinking abilities and a "black-or-white" perspective, often paired with intensity or irritability, and a love for debating or dissecting complex issues. It also indicates a conscientious, detail-oriented individual who values a steady, thoughtful approach, preferring stability and slow, deliberate work over multitasking. If your letters are small, it reflects an introspective nature, with a preference for humility and a strong focus on concentration, often choosing to stay out of the spotlight. Additionally, a downward slant may suggest feelings of discouragement or low energy, while an upward slant reveals optimism, ambition, and enthusiasm.',
  '0110': 'a person who is steady, reliable, and able to manage their energy effectively, demonstrating a disciplined and consistent approach to tasks, which reflects a strong work ethic and resilience. If you tend to write with large letters, it may indicate a personality that enjoys being in the spotlight, is outgoing and people-oriented, and may project confidence as a way of masking insecurities. On the other hand, sharply angular handwriting points to a more analytical, direct mindset, with strong critical thinking abilities and a tendency toward intensity, often thriving in debates or complex problem-solving. If your writing is methodical and deliberate, you are likely someone who values stability and careful, thoughtful work, preferring a slow, steady pace over rushing, and taking time to pay attention to the details.',
  '0111': 'a steady, reliable personality who effectively manages their energy, demonstrating discipline and resilience in a consistent approach to tasks. Those with smaller letters often prefer to stay out of the spotlight, displaying humility and a strong ability to focus and concentrate. If your writing is sharp and angular, it indicates an analytical mindset with a “black-and-white” perspective, reflecting critical thinking abilities and a tendency toward intensity, often thriving in debates or complex problem-solving. Additionally, your methodical, deliberate handwriting shows that you value careful, thoughtful work, preferring a slow, steady pace over rushing, with a strong attention to detail.',
  '1000': 'a dynamic and emotionally expressive personality, often relational and agreeable, with a tendency toward creativity and artistry. Those who favor rounded letters are typically engaged with their feelings and interactions, and quick mental processing is evident if the handwriting is fast-paced. This can indicate intelligence and quick thinking, but if it becomes disorganized, it may point to impulsiveness or a lack of structure. If the writing remains legible and well-spaced, it reflects a high-functioning individual who efficiently meets demands. The direction of your handwriting reveals a lot about your emotional state: a downward tilt may indicate low energy or discouragement, while an uphill slope suggests optimism and ambition. Additionally, large letters show a personality that enjoys being seen and heard, often outgoing and confident, though this may sometimes mask underlying insecurities.',
  '1001': 'a multifaceted personality. Those who write with smaller letters often display an introspective nature, preferring humility and a focus on concentration over drawing attention. These individuals are highly meticulous and focused. Meanwhile, a preference for rounded letters suggests emotional expressiveness and a strong connection with others, often indicating creativity and artistry. If your handwriting reflects a quick tempo, it suggests intelligence and quick thinking, though it may also indicate impulsiveness or disorganization if not legible. When the handwriting is legible and well-spaced, it reflects efficiency in meeting demands. Additionally, a downward tilt may suggest low energy or discouragement, while an upward slope conveys optimism, ambition, and a forward-looking attitude.',
  '1010': 'a complex and dynamic personality. Rounded letters suggest an emotionally expressive, relational, and creative individual who values interpersonal connections and artistry. The presence of hurried or quick writing indicates rapid mental processing, intelligence, and dynamism, though it can also hint at impulsiveness or a tendency to overlook details. When this quickness is balanced with clarity and structure, it reflects a highly efficient, adaptable, and high-functioning person. Larger letters signal confidence and an outgoing nature, often enjoying attention and visibility. However, this can sometimes mask underlying insecurities. Overall, this profile combines emotional depth, creativity, intelligence, and a disciplined approach, suggesting a multifaceted and resilient personality.',
  '1011': 'an introspective and focused personality. Those who write with smaller letters often prefer to stay out of the spotlight, demonstrating humility, meticulousness, and a strong capacity for concentration. Rounded letters further indicate emotional expressiveness, creativity, and a relational nature, suggesting someone deeply engaged with their feelings and interactions with others. A hurried writing style reflects a quick-thinking, dynamic individual with a sharp mental tempo, though it may reveal impulsiveness or disorganization if clarity is compromised. When hurried handwriting remains legible and structured, it highlights an efficient, high-functioning person capable of meeting demands effectively. Finally, steady and consistent handwriting points to reliability, discipline, and resilience, reflecting a strong work ethic and the ability to manage energy well. This combination portrays someone introspective yet creative, dynamic yet reliable, and emotionally aware yet highly focused.',
  '1100': 'a person with a quick, dynamic mind and strong critical thinking abilities. A fast-paced writing style often indicates intelligence, but if the handwriting becomes disorganized, it can point to impulsiveness or a lack of structure. Angular handwriting reflects an analytical, sometimes intense mindset, with a preference for clear, direct thinking and an ability to thrive in debate or complex problem-solving. A downward tilt may suggest underlying discouragement or low energy, while an upward slope conveys positivity, optimism, and ambition. Large letters indicate a desire to be noticed, revealing an outgoing, people-oriented personality, although they may also hide insecurities behind a confident exterior.',
  '1101': 'a thoughtful and multidimensional personality. The quick tempo and rapid thoughts suggest a dynamic, intelligent individual who thrives under pressure, although this might lead to occasional impulsiveness or overlooked details. Angular handwriting reveals a sharp and analytical mindset, often favoring directness and critical thinking, which may be paired with intensity or a no-nonsense approach. The use of smaller letters points to introspection, humility, and a preference for remaining out of the spotlight, with a strong ability to focus and pay attention to details. This blend of traits showcases a person who is both mentally agile and deeply reflective, capable of balancing sharp reasoning with careful, deliberate action.',
  '1110': 'a dynamic and quick-thinking individual with a sharp analytical mindset. They often thrive in debate and enjoy tackling complex problems, showing strong critical thinking abilities. While their fast-paced writing suggests intelligence and efficiency, it can also hint at impulsiveness or a lack of structure when it becomes disorganized. Their steady, reliable nature reveals a disciplined approach to life and work, with a strong work ethic and resilience. Outgoing and people-oriented, they enjoy being in the spotlight, though they may sometimes use confidence as a front to conceal insecurities.',
  '1111': 'a quick-thinking, dynamic individual who processes thoughts rapidly and efficiently. They tend to be highly intelligent and adaptable but may struggle with structure, occasionally appearing impulsive or disorganized in their actions. If their handwriting is clear despite the speed, it reflects an ability to manage demands effectively. Additionally, those with sharp, angular handwriting are often analytical, direct, and critical thinkers, thriving in debates or complex problem-solving. However, they may also experience intensity or irritability when faced with strong opinions or pressure. People with smaller handwriting typically have an introspective, humble nature and prefer to stay out of the spotlight, focusing intently on their work with great attention to detail and concentration. This balance of traits indicates a resilient, disciplined individual who is capable of both intellectual depth and self-reflection, with a steady work ethic.'
};

// Handle answer clicks
questions.forEach((question, index) => {
  question.addEventListener('click', (e) => {
    if (e.target.classList.contains('answer')) {
      // Save the answer
      answers.push(e.target.getAttribute('data-value'));

      // Hide current question and show the next
      question.style.display = 'none';
      if (index + 1 < questions.length) {
        questions[index + 1].style.display = 'block';
      } else {
        showResult();
      }
    }
  });
});

// Show result based on answers
function showResult() {
  const binaryString = answers.join(''); // Create binary string
  const personality = personalityResults[binaryString] || 'Unknown Personality';
  personalitySpan.textContent = personality;
  result.style.display = 'block';
}