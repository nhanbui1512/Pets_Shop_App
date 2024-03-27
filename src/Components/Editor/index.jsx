function Editor() {
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <div className="click2edit m-b-40">
              Click on Edite button and change the text then save it.
            </div>
            <button
              id="edit"
              className="btn btn-info btn-rounded"
              onClick={() => {
                window.edit();
              }}
              type="button"
            >
              Edit
            </button>
            <button
              id="save"
              className="btn btn-success btn-rounded"
              onClick={() => {
                window.save();
              }}
              type="button"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editor;
