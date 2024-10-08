import Image from "next/image";
import style from "./Header.module.scss";
import Link from "next/link";

export const Header = () => {
  return (
    <header className={style.header}>
      <Link href="/">
      <div className={style.image__container}>
        <Image
          src="/people-register-logo.svg"
          alt="People Register logo"
          title="People Register"
          width={852}
          height={336}
        />
      </div>
      </Link>
    </header>
  );
};
