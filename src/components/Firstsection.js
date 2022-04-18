import "../Assets/css/Firsts.css";
import mainimg from "../Assets/images/Image.png";
function Firstsection() {
  return (
    <div id="Features" className="div_firstsec">
      <div className="first_part">
        <span>
          {" "}
          <b>
            {" "}
            <mark> Transforming </mark> the <br /> way higher education <br />{" "}
            tranditionally works{" "}
          </b>{" "}
        </span>{" "}
        <br /> <br />
        Ever trought of how it would be if all the higer education is <br />
        transformed? Now just stop wondering and start experiencing <br />{" "}
        <br />
        <form>
          <div class="row">
            <div class="col col-8">
              <input type="text" class="form-control" placeholder="Email..." />
            </div>
            <div class="col col-2 me-3">
              <button type="button" className="btn btn-primary col-12">
                Submit
              </button>
            </div>
          </div>
        </form>
        Register yourself for beta test updates
      </div>

      <div className="second_part">
        <img src={mainimg} className="firstsec_img" />
      </div>
    </div>
  );
}

export default Firstsection;
