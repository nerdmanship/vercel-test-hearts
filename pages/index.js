import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
  const [hearts, setHearts] = useState([]);
  const [buttonText, setButtonText] = useState('Secret Button');
  const heartEmojis = ['❤️', '💛', '💚', '💙', '💜', '🖤', '🤍', '🧡'];

  const handleClick = () => {
    const newHearts = [];
    const numHearts = Math.floor(Math.random() * 6) + 5;  // random number between 5 and 10

    for (let i = 0; i < numHearts; i++) {
      const randomHeart = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
      const randomAnimation = `fly-heart-${Math.floor(Math.random() * 15) + 1}`;  // Randomly select one of 15 predefined animations
      const randomVelocity = Math.random() * 3 + 0.5;  // random number between 1 and 3
      newHearts.push({ id: uuidv4(), emoji: randomHeart, animation: randomAnimation, velocity: randomVelocity, top: '-20px', left: '-20px' });
    }

    setHearts([...hearts, ...newHearts]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <button
        onClick={handleClick}
        onPointerDown={() => setButtonText('I love Malaika')}
        onPointerUp={() => setButtonText('Secret Button')}
        className="text-white font-bold py-2 px-4 rounded bg-blue-500 hover:bg-blue-700 z-10 active:scale-95 active:bg-red-500 transform transition"
      >
         {buttonText}
      </button>
      <div className="relative">
        {hearts.map(heart => (
          <div
            key={heart.id}
            className="absolute text-4xl"
            style={{
              top: heart.top,
              left: heart.left,
              transformOrigin: "top center",
              animation: `${heart.animation} ${heart.velocity}s linear forwards`,
            }}
          >
            {heart.emoji}
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes fly-heart-1 {
          0% { transform: translate(0, 0) scale(0); opacity: 1; }
          100% { transform: translate(-100px, -100px) scale(1.1) rotate(540deg); opacity: 0; }
        }
        @keyframes fly-heart-2 {
          0% { transform: translate(0, 0) scale(0); opacity: 1; }
          100% { transform: translate(100px, -100px) scale(1) rotate(100deg); opacity: 0; }
        }
        @keyframes fly-heart-3 {
          0% { transform: translate(0, 0) scale(0); opacity: 1; }
          100% { transform: translate(-100px, 100px) scale(1.2) rotate(200deg); opacity: 0; }
        }
        @keyframes fly-heart-4 {
          0% { transform: translate(0, 0) scale(0); opacity: 1; }
          100% { transform: translate(100px, 100px) scale(1.5) rotate(300deg); opacity: 0; }
        }
        @keyframes fly-heart-5 {
          0% { transform: translate(0, 0) scale(0); opacity: 1; }
          100% { transform: translate(0, -100px) scale(1) rotate(60deg); opacity: 0; }
        }
        @keyframes fly-heart-6 {
          0% { transform: translate(0, 0) scale(0) rotate(0); opacity: 1; }
          100% { transform: translate(-200px, -50px) scale(1.3) rotate(360deg); opacity: 0; }
        }
        @keyframes fly-heart-7 {
          0% { transform: translate(0, 0) scale(0) rotate(0); opacity: 1; }
          100% { transform: translate(200px, -50px) scale(1) rotate(-360deg); opacity: 0; }
        }
        @keyframes fly-heart-8 {
          0% { transform: translate(0, 0) scale(0) rotate(0); opacity: 1; }
          100% { transform: translate(-200px, 50px) scale(1.4) rotate(180deg); opacity: 0; }
        }
        @keyframes fly-heart-9 {
          0% { transform: translate(0, 0) scale(0) rotate(0); opacity: 1; }
          100% { transform: translate(200px, 50px) scale(1.1) rotate(-180deg); opacity: 0; }
        }
        @keyframes fly-heart-10 {
          0% { transform: translate(0, 0) scale(0) rotate(0); opacity: 1; }
          100% { transform: translate(0, -150px) scale(1.2) rotate(360deg); opacity: 0; }
        }
        @keyframes fly-heart-11 {
          0% { transform: translate(0, 0) scale(0) rotate(0); opacity: 1; }
          100% { transform: translate(0, 150px) scale(2) rotate(-360deg); opacity: 0; }
        }
        @keyframes fly-heart-12 {
          0% { transform: translate(0, 0) scale(0) rotate(0); opacity: 1; }
          100% { transform: translate(-50px, -150px) scale(1.1) rotate(270deg); opacity: 0; }
        }
        @keyframes fly-heart-13 {
          0% { transform: translate(0, 0) scale(0) rotate(0); opacity: 1; }
          100% { transform: translate(50px, -150px) scale(1.3) rotate(-270deg); opacity: 0; }
        }
        @keyframes fly-heart-14 {
          0% { transform: translate(0, 0) scale(0) rotate(0); opacity: 1; }
          100% { transform: translate(-50px, 150px) scale(1.7) rotate(90deg); opacity: 0; }
        }
        @keyframes fly-heart-15 {
          0% { transform: translate(0, 0) scale(0) rotate(0); opacity: 1; }
          100% { transform: translate(50px, 150px) scale(1.2) rotate(-90deg); opacity: 0; }
        }
        
      `}</style>
    </div>
  );
}
