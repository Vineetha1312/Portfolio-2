
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Floatingsection = ({ githubLink, linkedinLink, emailLink }) => {
  return (
    <div className="fixed bottom-24 left-8 flex flex-col gap-4 z-50 bg-[#353233] ">
      {/* Github Link */}
      <a
        href={githubLink}
        className="p-3 rounded-full hover:bg-[#4a4a4a] transition-colors text-white  bg-gray-900"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={24} />
      </a>
      <a
        href={linkedinLink}
        className="p-3 rounded-full hover:bg-[#4a4a4a] transition-colors text-white bg-gray-900"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>
      {/* Email Link */}
      <a
        href={`mailto:${emailLink}`}
        className="p-3 rounded-full hover:bg-[#4a4a4a] transition-colors text-white bg-gray-900"
      >
        <MdEmail size={24} />
      </a>
    </div>
  );
};

export default Floatingsection;
