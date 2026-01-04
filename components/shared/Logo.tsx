import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Logo({
  className,
}: Readonly<{
  className?: string;
}>) {
  return (
    <Link
      href={"/"}
      className={cn(className, "relative aspect-1363/588 h-10 lg:h-14")}
    >
      <Image
        src={"/icons/logo-white.png"}
        alt="Logo"
        fill
        priority
        className="object-cover"
      />
    </Link>
  );
}
