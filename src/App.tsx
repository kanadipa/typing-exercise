import { useState, useEffect } from 'react';

const SENTENCES = [
  'The quick brown fox jumps over the lazy dog.',
  'Typing fast requires both speed and accuracy.',
  'Consistency beats intensity every time.',
];

export default function App() {
  const [target, setTarget] = useState('');
  const [input, setInput] = useState('');
  const [errorIndex, setErrorIndex] = useState<number | null>(null);

  useEffect(() => {
    resetGame();
  }, []);

  const resetGame = () => {
    const sentence = SENTENCES[Math.floor(Math.random() * SENTENCES.length)];
    setTarget(sentence);
    setInput('');
    setErrorIndex(null);
  };

  const handleChange = (value: string) => {
    if (errorIndex !== null) return;

    let mistakeAt: number | null = null;

    for (let i = 0; i < value.length; i++) {
      if (value[i] !== target[i]) {
        mistakeAt = i;
        break;
      }
    }

    if (mistakeAt !== null) {
      setErrorIndex(mistakeAt);
    }

    setInput(value);
  };

  const correctCount = errorIndex ?? input.length;

  const mistakeString =
    errorIndex !== null ? input.slice(errorIndex, input.length) : '';

  return (
    <div>
      <div>
        <h1>Typing Exercise</h1>

        <p>{target}</p>

        <textarea
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          rows={3}
          placeholder="Start typing..."
        />

        <div>
          <p>
            <b>✅ Correct chars: </b>
            <span>{correctCount}</span>
          </p>
          <p>
            <b>❌ Mistake string: </b>
            <span>{mistakeString || 'None'}</span>
          </p>
        </div>

        <button onClick={resetGame}>Reset</button>
      </div>
    </div>
  );
}
