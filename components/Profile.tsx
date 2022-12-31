import Image from "next/image";

export default function Profile() {
  return (
    <div>
      <Image
        src={"/images/profile-image.png"}
        width={120}
        height={120}
        style={{ borderRadius: 60 }}
        alt="profile-image"
      />
      <h1>Nice to Meet You,</h1>
      <p>I&apos;m Junior Frontend Developer Hyeonwoo.</p>
      <style jsx>{`
        div {
          margin: 0 auto;
        }
        div > h1 {
          margin-top: 25px;
          font-size: 35px;
          font-weight: 700;
        }

        div > p {
          font-size: 20px;
          font-weight: 400;
        }

        @media (max-width: 768px) {
          div > h1 {
            font-size: 25px;
          }

          div > p {
            font-size: 15px;
          }
        }
      `}</style>
    </div>
  );
}
