import { useEffect } from 'react';

function CertModal() {
  useEffect(() => {
    const modal = document.getElementById('certModal');
    const closeBtn = document.querySelector('.close-modal');

    const handleClose = () => {
      if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
          modal.style.display = 'none';
        }, 300);
      }
    };

    const handleClickOutside = (e) => {
      if (e.target === modal) {
        handleClose();
      }
    };

    if (closeBtn) closeBtn.addEventListener('click', handleClose);
    if (modal) modal.addEventListener('click', handleClickOutside);

    return () => {
      if (closeBtn) closeBtn.removeEventListener('click', handleClose);
      if (modal) modal.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div id="certModal" className="modal">
      <span className="close-modal">&times;</span>
      <img className="modal-content" id="certImage" alt="Sertifikat" />
    </div>
  );
}

export default CertModal;
