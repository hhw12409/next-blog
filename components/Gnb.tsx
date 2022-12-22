export default function Gnb() {
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
          background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
          color: #ffffff;
          justify-content: space-between;
          align-items: center;
          height: 12rem;
          width: 100%;
          position: fixed;
        }
        nav > ul {
          display: flex;
        }
      `}</style>
    </nav>
  );
}
