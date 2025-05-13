import { useEffect, useState } from "react";
import { Container } from "./styles";
import { Header } from "../Header";

export function FloatingHeader() {
  const [visible, setVisible] = useState(false);
  const [scrolledPastBackground, setScrolledPastBackground] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setVisible(e.clientY < 80);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const background = document.querySelector("#background-header");

    if (!background) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolledPastBackground(!entry.isIntersecting);
      },
      {
        threshold: 0,
      }
    );

    observer.observe(background);

    return () => {
      observer.disconnect();
    };
  }, []);

  if (!visible || !scrolledPastBackground) return null;

  return (
    <Container data-visible={visible}>
      <Header floating={true} visible={visible} />
    </Container>
  );
}
