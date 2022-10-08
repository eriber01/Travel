

export const Footer = () => {

  return (
    <div style={{ height: '40vh' }} className="footer">
      <div className="contact">
        <h4>Contacts</h4>
        <span>Cel. 809-433-9691</span>
        <span>eriber01@gmail.com</span>
        <span>Tel. 809-414-9228</span>
      </div>

      <div className="red-social">
        <h4>Red Social</h4>
        <br />
        <div className="social-ico">
          <div className="facebook">

            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/eriber.tejedaamparo">
              <img src="img/ico/facebook.png" alt="" />
            </a>
          </div>

          <div className="instagram">

            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/eribertejeda/">
              <img src="img/ico/instagram.png" alt="" />
            </a>
          </div>

          <div className="git">

            <a target="_blank" rel="noreferrer" href="https://github.com/eriber01">
              <img src="img/ico/git.png" alt="" />
            </a>
          </div>

          <div className="linkedin">

            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/eriber-tejeda-amparo-7a495614a/">
              <img src="img/ico/linkedin.png" alt="" />
            </a>
          </div>
        </div>
      </div>

      <div className="working-hours">
        <h4>Working Hours</h4>

        <span>Monday at Friday</span>
        <span>8:00 Am at 5:00 Pm</span>
        <hr />
        <span>Saturday</span>
        <span>9:00 Am at 12:00 Pm</span>
      </div>
    </div>
  )
}