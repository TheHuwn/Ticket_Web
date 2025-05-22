// import axios from 'axios';
// axios.defaults.withCredentials = true;

// const buildClient = ({ req }) => {
//   if (typeof window === 'undefined') {
//     // server
//     return axios.create({
//       headers: req.headers, // cookie and host from the request from browser
//       baseURL:
//         'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
//       withCredentials: true,
//     });
//   } else {
//     //  browser
//     return axios.create({
//       baseURL: '/',
//       withCredentials: true,
//     });
//   }
// };

// export default buildClient;
import axios from "axios";
axios.defaults.withCredentials = true;

const buildClient = ({ req }) => {
  if (typeof window === "undefined") {
    // server
    return axios.create({
      headers: {
        ...req.headers, // Giữ các header khác (cookie, etc.)
        Host: "ticketing.dev", // Đặt Host để khớp với ingress
      }, // cookie and host from the request from browser
      baseURL:
        "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local",
      withCredentials: true,
    });
  } else {
    // browser
    return axios.create({
      baseURL: "/",
      withCredentials: true,
    });
  }
};

export default buildClient;
