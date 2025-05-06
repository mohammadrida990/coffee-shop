import Image from "next/image";
import React from "react";

const Badge = ({ containerStyles }: { containerStyles: string }) => {
  return (
    <div className={`relative ${containerStyles}`}>
      <Image
        src="/assets/logo.png"
        fill
        alt=""
        className="object-contain"
        priority
        quality={100}
      />
    </div>
  );
};

export default Badge;
