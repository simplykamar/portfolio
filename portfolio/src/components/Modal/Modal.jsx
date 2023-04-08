import './Modal.css';


const Modal = () => {
	return(
    <div style={{}}>
<div className="modal " loading="lazy" id="myModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog ">
    <div className="modal-content">
    <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <div className="modal-body">
        <h1>Frontend technology</h1>
      </div>

    </div>
  </div>
</div>
</div>

		)
}

export default Modal;