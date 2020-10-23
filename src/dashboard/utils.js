// ES6 Modules or TypeScript
import Swal from "sweetalert2";

// CommonJS
// const Swal = require('sweetalert2')

const processMsgs = (msg) => {
  const regexAlert = /!/gu;
  const nowTime = new Date();
  const msgDate = new Date(msg.timestamp);
  let timeDelta = nowTime - msgDate;
  if (msg.message.match(regexAlert) && timeDelta < 5000) {
    console.log("new alert");
    Swal.fire({
      icon: "info",
      title: "ALERT!",
      text: `${msg.message}`,
    });
  }
};

export default processMsgs;
