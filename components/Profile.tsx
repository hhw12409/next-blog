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
        <h1>Frontend Developer Blog</h1>
        <p>Nice to Meet You,</p>
        <p>I&apos;m Junior Frontend Developer Hyeonwoo.</p>
        <style jsx>{`
        
        div {
          width: 768px;
          margin: 0 auto;
        }
        
      `}</style>
      </div>
  )
}