import {
  BackToHome,
  Close,
  Container,
  Content,
  Header,
  Overlay,
  Photo,
  PhotosWrapper,
  Root,
} from "./styles";
import photo from "../../lib/photos.json";
import { useCallback, useEffect, useState } from "react";

import { IoCloseOutline } from "react-icons/io5";
import { FaAngleLeft } from "react-icons/fa6";

export function Gallery() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(
    null
  );
  const photoSrc = photo.map((item) => item.src);

  function openPhoto(index: number) {
    if (window.innerWidth > 712) {
      setSelectedPhotoIndex(index);
    }
  }

  const nextPhoto = useCallback(() => {
    setSelectedPhotoIndex((prev) =>
      prev !== null && prev < photoSrc.length - 1 ? prev + 1 : 0
    );
  }, [setSelectedPhotoIndex, photoSrc.length]);

  const prevPhoto = useCallback(() => {
    setSelectedPhotoIndex((prev) =>
      prev !== null && prev > 0 ? prev - 1 : photoSrc.length - 1
    );
  }, [setSelectedPhotoIndex, photoSrc.length]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedPhotoIndex !== null) {
        if (event.key === "ArrowRight") {
          nextPhoto();
        } else if (event.key === "ArrowLeft") {
          prevPhoto();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhotoIndex, nextPhoto, prevPhoto]);

  return (
    <Container>
      <Header>
        <BackToHome href="/">
          <FaAngleLeft />
          voltar para Home
        </BackToHome>
        <h1>Galeria de fotos</h1>
      </Header>
      <PhotosWrapper>
        {photo.map((item, index) => (
          <Photo
            key={item.id}
            src={item.src}
            alt={item.alt}
            loading="lazy"
            onClick={() => openPhoto(index)}
          />
        ))}
      </PhotosWrapper>
      <Root
        open={selectedPhotoIndex !== null}
        onOpenChange={(open) => (open ? null : setSelectedPhotoIndex(null))}
      >
        <Overlay>
          <Close asChild>
            <button>
              <IoCloseOutline />
            </button>
          </Close>
        </Overlay>
        <Content>
          {selectedPhotoIndex && <img src={photoSrc[selectedPhotoIndex]} />}
        </Content>
      </Root>
    </Container>
  );
}
