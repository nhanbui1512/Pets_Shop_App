function Editor({ contentRef = null }) {
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <div ref={contentRef} className="click2edit m-b-40">
              Click on Edite button and change the text then save it.
            </div>
            <div style={{ marginTop: 12 }}>
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
                style={{ marginLeft: 10 }}
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
    </div>
  );
}

export default Editor;
