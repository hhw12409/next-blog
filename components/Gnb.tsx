import { useState, useEffect, useCallback } from "react";

export default function Gnb() {
  const [scroll, setScroll] = useState(false);

  const handleScroll = useCallback(() => {
    // 스크롤이 Top에서 50px 이상 내려오면 true값을 useState에 넣어줌
    if (window.scrollY >= 50) {
      setScroll(true);
    } else {
      // 스크롤이 50px 미만일경우 false를 넣어줌
      setScroll(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, [handleScroll]);

  return (
    <nav>
      <h1>Frontend Developer Blog</h1>
      <ul>
        <li>Home</li>
        <li>Home</li>
      </ul>
      <style jsx>{`
        nav {
          display: flex;
          background-color: red;
          justify-content: space-between;
          align-items: center;
          height: 3rem;
          width: 100%;
          position: fixed;
          box-shadow: ${scroll ? "0 0 16px rgb(0 0 0 / 28%)" : null};
        }
        nav > ul {
          display: flex;
        }
      `}</style>
    </nav>
  );
}
