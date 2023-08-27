// import tents from "../../images/tents.png";
// import { Reveal2 } from "../utils/Reveal";
// import $ from 'jquery'

// const Contact = () => {
//   const [name, setName] = useState("");
//   const [result, setResult] = useState("");

//   const handleChange = (e) => {
//       setName(e.target.value);
//   };

//   const handleSubmit = (e) => {
//       e.preventDefault();
//       const form = $(e.target);
//       $.ajax({
//           type: "POST",
//           url: form.attr("action"),
//           data: form.serialize(),
//           success(data) {
//               setResult(data);
//           },
//       });
//   };

//   return (
//     <div className="bg-contact md:pl-20 pt-1 pb-20 md:pt-20 md:pb-20 bg-cover bg-right-bottom -mt-1">
//       <Reveal2>
//         <form
//           action="http://localhost:8000/form-to-email.php"
//           method="post"
//           onSubmit={(event) => handleSubmit(event)}
//           // name="myemailform"
//           class="bg-blue-200/40 shadow-md backdrop-blur-sm rounded-xl px-5 md:px-5 pt-6 pb-8 m-5 md:m-0 md:w-2/5 md:min-w-96 text-sm"
//         >
//           <h1 className="text-2xl text-center py-5"> CONTACT ME </h1>
//           <div class="mb-4">
//             <label class="block text-white text-md mb-2" for="username">
//               Full Name
//             </label>
//             <input
//               class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm "
//               id="username"
//               type="text"
//               placeholder="Squidward Tentacules"
//               name="username"
//             />
//           </div>
//           <div class="mb-4">
//             <label class="block text-white text-md mb-2" for="username">
//               Email
//             </label>
//             <input
//               class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
//               id="username"
//               type="text"
//               placeholder="squidtent@KrustyKrab.com"
//               name="email"
//             />
//           </div>
//           <div class="mb-4">
//             <label class="block text-white text-md mb-2" for="username">
//               Description
//             </label>
//             <textarea
//               class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm h-40  "
//               id="username"
//               type="text"
//               placeholder="Description..."
//               name="description"
//             />
//           </div>

//           <div class="flex items-center justify-center">
//             <button
//               type="submit"
//               class=" bg-orange-500 hover:bg-orange-700 text-white focus:outline-none focus:shadow-outline
//             p-3 px-8 rounded-xl ease-in duration-100 font-mono
//             "
//             >
//               SUBMIT
//             </button>
//           </div>
//         </form>
//       </Reveal2>
//       {/* <img src={tents} alt="" className=" -z-1 object-cover " /> */}
//     </div>
//   );
// };

// export default Contact;
import React from "react";
import linkedin from "../../images/linkedin.png";
import github from "../../images/github.png";
import email from "../../images/email.png";
import { Reveal3, Reveal4, Reveal5 } from "../utils/Reveal";
import { RevealTitle } from "../utils/RevealPort";
import lantern from "../../images/lantern.png";
import light from "../../images/light.png";

const Contact = () => {
  return (
    <div
      id="contact"
      className=" h-screen flex flex-col items-center justify-center text-center px-5 md:px-0 -mt-28 md:-mt-0 md:pb-20"
    >
      <div className="flex justify-center md:justify-end items-end md:p-4 mb-8">
        <img
          src={lantern}
          alt=""
          className="  -z-1 w-40 md:w-60 md:mt-0 animate-flicker "
        />
        <img
          src={light}
          alt=""
          className="absolute z-1 w-40 md:w-60 md:mt-0 float-right"
        />
      </div>
      <RevealTitle>
        <h1 className="pb-2 text-sm ">I bet you got a question for me,</h1>
      </RevealTitle>
      <Reveal3>
        <h1 className="text-4xl md:text-4xl">Let's Get in Touch</h1>
      </Reveal3>
      <div className="flex pt-7 gap-2 items-center justify-center">
        <a
          href="https://www.linkedin.com/in/hanson-liao-2031/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Reveal3>
            <img
              src={linkedin}
              alt=""
              className="absolute w-14 linear  hover:animate-ping"
            />
            <img src={linkedin} alt="" className="w-14 " />
          </Reveal3>
        </a>
        <a
          href="https://github.com/hansonliao98"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Reveal4>
            <img
              src={github}
              alt=""
              className="absolute w-14 linear  hover:animate-ping"
            />
            <img src={github} alt="" className="w-14 " />
          </Reveal4>
        </a>
        <a
          href="mailto: hansonliao982@gmail.com?subject = Feedback&body = Message"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Reveal5>
            <img
              src={email}
              alt=""
              className="absolute w-14 linear  hover:animate-ping"
            />
            <img src={email} alt="" className="w-14 " />
          </Reveal5>
        </a>
      </div>
    </div>
  );
};

export default Contact;
