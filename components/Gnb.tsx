import Profile from "./Profile";

export default function Gnb() {
  return (
    <nav>
      <Profile />
      <style jsx>{`
        nav {
          display: flex;
          flex-direction: column;
          background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
          color: #ffffff;
          align-items: flex-start;
          justify-content: center;
          width: 100%;
          height: 25rem;
        }
        @media (max-width: 768px) {
          nav {
            height: 300px;
            padding: 0 20px;
          }
        }
      `}</style>
    </nav>
  );
}
