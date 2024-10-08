import React from 'react';
import Typed from 'typed.js';

function TypingAnimation() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'full stack developer.',
        'web developer.',
        'excellent communicator.',
        'human.',
        'professional dork.'
      ],
      typeSpeed: 100,
      loop: true,
      loopCount: Infinity,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="header-typed">
      <span ref={el} style={{ fontSize: '4vw' }}/>
    </div>
  );
}

export default TypingAnimation;