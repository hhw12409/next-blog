export default function Footer() {
  const nowYear = new Date().getFullYear();
  return (
    <div>
      <p>
        Thank You for Visiting My Blog, Have a Good Day 😆
        <br />© {nowYear} Developer Hyeonwoo, Powered By Next.js
      </p>
      <style jsx>{`
        div {
          position: absolute;
          bottom: 0;
          padding: 50px 0;
          margin: 0 auto;
          left: 0;
          right: 0;
          font-size: 15px;
          text-align: center;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          div {
            font-size: 13px;
          }
        }
      `}</style>
    </div>
  );
}
