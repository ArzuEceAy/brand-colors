import React from 'react';
import Modal from 'react-modal';
import { useState } from 'react';
import { GrClose } from 'react-icons/gr';

Modal.setAppElement('#root');

const Sidebar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  return (
    <>
      <aside className="sidebar">
        <div className="logo">
          <a>
            Brand <b>Colors</b>
          </a>
        </div>
        <div className="description">
          The biggest collection of official brand color codes around. Curated
          by @brandcolors and friends.
        </div>
        <nav className="menu">
          <ul>
            <li>
              <a onClick={openModal}>About BrandColors</a>
            </li>
          </ul>
        </nav>
      </aside>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="about-modal"
        overlayClassName="about-modal-overlay"
      >
        <button className="modal-close-btn" onClick={closeModal}>
          <GrClose />
        </button>
        <h3>About BrandColors</h3>
        <p>
          BrandColors was created by{' '}
          <a href="https://www.designbombs.com/">
            <b>DesignBombs</b>
          </a>
          . The goal was to create a helpful reference for the brand color codes
          that are needed most often.
        </p>
        <p>
          It's been featured by Smashing Magazine, CSS-Tricks, Web Design Depot,
          Tuts+, and over <b>2 million pageviews</b>. There are now over{' '}
          <b>600 brands</b> with <b>1600 colors</b> and the collection is always
          growing.
        </p>
      </Modal>
    </>
  );
};

export default Sidebar;
