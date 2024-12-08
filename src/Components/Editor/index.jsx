import { Button } from "@mui/material";

function Editor({ contentRef = null }) {
  return (
    <div className="row border border-solid border-[#000]">
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <div ref={contentRef} className="click2edit m-b-40">
              Click on Edit button and change the text then save it.
            </div>
            <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
              <Button
                variant="contained"
                id="edit"
                onClick={() => {
                  window.edit();
                }}
              >
                Edit
              </Button>

              <Button
                color="success"
                variant="contained"
                onClick={() => {
                  window.save();
                }}
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editor;
