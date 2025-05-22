import {
  BackToHome,
  Close,
  Container,
  Content,
  Header,
  Overlay,
  Photo,
  PhotosWrapper,
} from "./styles";
import photo from "../../lib/photos.json";
import { useState } from "react";

import * as Dialog from "@radix-ui/react-dialog";
import { IoCloseOutline } from "react-icons/io5";
import { FaAngleLeft } from "react-icons/fa6";

export function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

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
        {photo.map((item) => (
          <Photo
            key={item.id}
            src={item.src}
            alt={item.alt}
            loading="lazy"
            onClick={() => setSelectedPhoto(item.src)}
          />
        ))}
      </PhotosWrapper>
      <Dialog.Root
        open={Boolean(selectedPhoto)}
        onOpenChange={(open) => (open ? null : setSelectedPhoto(null))}
      >
        <Overlay>
          <Close asChild>
            <button>
              <IoCloseOutline />
            </button>
          </Close>
        </Overlay>
        <Content>{selectedPhoto && <img src={selectedPhoto} />}</Content>
      </Dialog.Root>
    </Container>
  );
}
