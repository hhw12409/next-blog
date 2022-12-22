import Image from "next/image";

export default function Gnb() {
  return (
    <nav>
      <div>
        <Image
          src={"/images/profile-image.png"}
          width={120}
          height={120}
          style={{ borderRadius: 60 }}
          alt="profile-image"
        />
        <h1>Frontend Developer Blog</h1>
        <p>Nice to Meet You,</p>
        <p>I&apos;m Junior Frontend Developer Hyeonwoo.</p>
      </div>
      <style jsx>{`
        nav {
          display: flex;
          flex-direction: column;
          background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
          color: #ffffff;
          align-items: flex-start;
          justify-content: center;
          width: 100%;
          position: fixed;
          height: 25rem;
        }
        div {
          width: 768px;
          margin: 0 auto;
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
