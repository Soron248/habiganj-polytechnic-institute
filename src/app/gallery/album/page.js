"use client";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Modal from "react-modal"; // Import the Modal component
import { useSearchParams } from "next/navigation";

const page = () => {
  const search = useSearchParams();
  const id = search.get("id");
  const [album, setAlbum] = useState([]);
  const [asset, setAsset] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false); // Track modal state
  const [selectedImageIndex, setSelectedImageIndex] = useState(0); // Track selected image index

  const api = `https://dschool2.appsosis.com/api/viewAlbum/${id}`;

  const fetchapi = async (url) => {
    const req = await fetch(url);
    const res = await req.json();
    setAlbum(res.data.gallery);
    setAsset(res.asseturl);
  };

  useEffect(() => {
    fetchapi(api);
  }, []);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const goToNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % album.length);
  };

  const goToPrevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? album.length - 1 : prevIndex - 1
    );
  };

  return (
    <main className="max-w-sm md:max-w-6xl m-auto px-5 bg-white flex flex-col md:grid md:grid-cols-4 gap-4">
      <div className="w-full md:col-span-3 flex  flex-col items-center md:items-start md:flex-row gap-4">
        {album &&
          album.map((data, index) => {
            return (
              <div
                key={data.gi_id}
                className="w-52 h-fit cursor-pointer m-5 md:my-0"
                onClick={() => openModal(index)}
              >
                <Image
                  src={asset + "/" + data.gi_image}
                  alt="image"
                  width={500}
                  height={500}
                  className="rounded-lg"
                />
              </div>
            );
          })}
      </div>
      <Sidebar />
      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay"
        shouldCloseOnOverlayClick={true}
        ariaHideApp={false}
      >
        <div className=" modal-slider">
          <Image
            src={asset + "/" + album[selectedImageIndex]?.gi_image}
            alt="image"
            className="w-fit"
            width={500}
            height={500}
          />
          <div className="flex justify-between">
            <button
              className="w-10 modal-slider-btn rounded-full mt-5"
              onClick={goToNextImage}
            >
              &gt;
            </button>
            <button
              className="w-10 modal-slider-btn rounded-full mt-5"
              onClick={goToPrevImage}
            >
              &lt;
            </button>
          </div>
        </div>
      </Modal>
    </main>
  );
};

export default page;
