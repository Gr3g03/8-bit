import '../../../src/nes.css';
type props = {
  setModal: any;
};
const Modal: React.FC<props> = (props: any) => {
  return (
    <>
      <div className="modal-wrapper" onClick={() => props.setModal(false)}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <div className="nes-container-modal is-rounded is-yellow ">
            <p>Css</p>
            <p>Is</p>
            <p className="change-position">Awesome</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
