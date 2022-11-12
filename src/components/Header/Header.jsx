import React from "react";
import Button from "../Button/Button";
import { useEffect } from "react";
const Header = () => {
  const tg = window.Telegram.WebApp;
  useEffect(() => {
    tg.ready();
  }, []);
  const onClose = () => {
    tg.close();
  };
  return (
    <div className={"header"}>
      <Button onClick={onClose}>Закрыть</Button>
      <span className={"username"}>{tg.initDataUnsafe?.user?.username}</span>
    </div>
  );
};

export default Header;
