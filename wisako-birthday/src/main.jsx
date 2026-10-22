import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const BIRTHDAY_MONTH = 1; // February (JavaScript months start at 0)
const BIRTHDAY_DAY = 22;
const BIRTHDAY_YEAR = 2027; // Next February 22; updates automatically after the date passes.

function getNextBirthday() {
  const now = new Date();
  let year = now.getFullYear();
  const target = new Date(year, BIRTHDAY_MONTH, BIRTHDAY_DAY, 0, 0, 0);
  if (now >= target) year += 1;
  return new Date(year, BIRTHDAY_MONTH, BIRTHDAY_DAY, 0, 0, 0);
}

function App() {
  const [now, setNow] = useState(new Date());
  const [openLetter, setOpenLetter] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const target = getNextBirthday();
  const difference = Math.max(0, target - now);
  const days = Math.floor(difference / 86400000);
  const hours = Math.floor((difference % 86400000) / 3600000);
  const minutes = Math.floor((difference % 3600000) / 60000);
  const seconds = Math.floor((difference % 60000) / 1000);

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main>
      <nav className="nav">
        <a className="wordmark" href="#top">w<span>♡</span></a>
        <span className="nav-note">a tiny corner of the internet, just for you</span>
        <a className="nav-link" href="#letter">open your letter ↗</a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="tiny-heart">♥</span> ୨୧ A LITTLE SOMETHING FOR WISAKO ୨୧</p>
          <h1>Counting down<br />to <em>your</em> day<span className="headline-heart"> ♡</span></h1>
          <p className="intro">For the girl who makes beautiful things out of nothing — and somehow makes the world a little softer, too. <span className="inline-doodle">꒰ა ♡ ໒꒱</span></p>
          <div className="birthday-line">
            <span className="date-mark">22</span>
            <div><strong>FEBRUARY ✿</strong><small>your twentieth chapter begins ♡</small></div>
          </div>
          <a className="scroll-link" href="#countdown">SCROLL A LITTLE <span>↓</span></a>
        </div>
        <div className="hero-art">
          <div className="tape"></div>
          <div className="paper">
            <div className="paper-top"><span>♡ WISAKO'S LITTLE WORLD ♡</span><span>№ 020</span></div>
            <div className="portrait-wrap">
              <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1000&q=85" alt="Paint brushes and a colorful artist's workspace" />
              <div className="portrait-stamp">made<br/>with<br/><i>love</i></div>
            </div>
            <div className="paper-caption"><span>for my favourite artist ✎</span><span>♡ 22.02 ♡</span></div>
          </div>
          <span className="scribble scribble-one">for you, always</span>
          <span className="scribble scribble-two">✳</span>
          <div className="mini-note">a little reminder<br/>that you are loved. ♡</div>
        </div>
      </section>

      <section className="countdown-section" id="countdown">
        <div className="section-label"><span>୨୧ 01 / THE WAIT</span><span>UNTIL YOUR BIRTHDAY ♡</span></div>
        <div className="countdown-heading">
          <h2>Almost time, <em>birthday girl.</em> ♡</h2>
          <p>Every second is one second closer to celebrating you.</p>
        </div>
        <div className="timer" aria-label={`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds remaining`}>
          {[["days", days], ["hours", hours], ["minutes", minutes], ["seconds", seconds]].map(([label, value]) => (
            <div className="time-unit" key={label}>
              <span className="time-number">{String(value).padStart(2, "0")}</span>
              <span className="time-label">{label}</span>
            </div>
          ))}
        </div>
        <div className="timer-foot"><span>UNTIL FEBRUARY 22, {target.getFullYear()}</span><span>AGE 20 UNLOCKING…</span></div>
      </section>

      <section className="letter-section" id="letter">
        <div className="letter-side">
          <p className="eyebrow">02 / SOMETHING FROM ME</p>
          <h2>A letter for<br/><em>my Wisako.</em></h2>
          <p className="letter-hint">Not everything fits into a text message. So here's a little space for the things I hope you always know.</p>
          <button className="letter-button" onClick={() => setOpenLetter(v => !v)}>
            {openLetter ? "Fold the letter ↑" : "Unfold your letter ↗"}
          </button>
        </div>
        <div className={`letter-paper ${openLetter ? "letter-open" : ""}`}>
          <div className="letter-decoration">♡</div>
          <p className="letter-date">TO MY FAVOURITE HUMAN,</p>
          {openLetter ? (
            <div className="letter-body">
              <p>Happy almost birthday, Wisako.</p>
              <p>I hope twenty is gentle with you. I hope it brings you the kind of happiness that stays, the kind of people who understand your quiet moments, and so many reasons to feel proud of the person you're becoming.</p>
              <p>Keep making art. Keep seeing little details that other people miss. Keep being your own kind of wonderful. And on the days when creating feels hard, or life feels a little too loud, I hope you remember that you don't have to make something beautiful to be beautiful yourself.</p>
              <p>You're allowed to rest, to grow slowly, to change your mind, and to take up space. I'm cheering for you in every version of your story.</p>
              <p>Here's to twenty — and to all the little memories we haven't made yet.</p>
              <p className="signoff">always in your corner, <span>♡</span></p>
            </div>
          ) : (
            <div className="letter-teaser">
              <p>There's something I want you to read…</p>
              <span>open when you're ready ♡</span>
            </div>
          )}
          <div className="letter-bottom">SEALED WITH THE BIGGEST HUG <span>♡</span></div>
        </div>
      </section>

      <section className="little-things">
        <div className="section-label"><span>୨୧ 03 / THINGS THAT FEEL LIKE YOU</span><span>A SMALL COLLECTION ♡</span></div>
        <div className="things-grid">
          <div className="thing thing-hinata">
            <div className="thing-art"><span className="japanese">日向</span><span className="jersey">10</span><span className="ball">◯</span></div>
            <p className="thing-tag">☼ THE LITTLE SUNSHINE</p><h3>Hinata energy. 🧡</h3><p>Big heart. Unstoppable spirit. That keep-going-even-when-it's-hard kind of magic.</p>
          </div>
          <div className="thing thing-artistry">
            <div className="thing-art"><span className="brush">✎</span><span className="canvas-word">create<br/>your<br/>world.</span><span className="swatch"></span></div>
            <p className="thing-tag">✎ MADE BY YOUR HANDS</p><h3>Your art, your world. 🎨</h3><p>I hope you never run out of ideas, colours to try, or reasons to make something just because it makes you happy.</p>
          </div>
          <div className="thing thing-age">
            <div className="thing-art"><span className="twenty">20</span><span className="twenty-note">chapter twenty</span></div>
            <p className="thing-tag">♡ A BRAND NEW CHAPTER</p><h3>Look at you, growing. 🎂</h3><p>Twenty years of becoming you. There's still so much good ahead, and I hope you get to see it all.</p>
          </div>
        </div>
      </section>

      <section className="birthday-strip" aria-label="birthday wishes">
        <span>♡</span><span>🎂</span><span>୨୧</span><span>🎨</span><span>☼</span><span>🧡</span><span>✿</span><span>♡</span>
      </section>

      <section className="final-note">
        <span className="final-small">୨୧ ONE LAST THING, WISAKO ୨୧</span>
        <h2>The world is luckier<br/>with <em>you in it.</em> ♡</h2>
        <p>See you on February 22, birthday girl. 🎂🧡</p>
        <button className="little-button" onClick={() => { setShowAll(v => !v); if (!showAll) setOpenLetter(true); }}>
          {showAll ? "okay, one more hug ♡" : "one more little surprise ♡"}
        </button>
        {showAll && <p className="surprise">In case nobody tells you today: I'm proud of you. I'm rooting for you. And I'm really, really glad you exist. ♡</p>}
      </section>

      <footer><a className="wordmark" href="#top">w<span>♡</span></a><p>made with love, just for Wisako. ♡ ✿</p><span>22 · 02 · ALWAYS</span></footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
