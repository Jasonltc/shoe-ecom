import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { socialMedia } from "../constant";
import { footerLinks } from "../constant";

export default function Footer() {
  return (
    <footer className="px-3 py-10">
      <div className="lg:flex justify-center items-start gap-10 xl:gap-32">
        <div className="mb-16 text-center lg:text-left">
          <a href="/" className="mb-8 block">
            <img
              src={footerLogo}
              alt="footer-log"
              width={150}
              height={46}
              className="mx-auto lg:mx-0"
            />
          </a>

          <p className="text-base leading-7 font-montserrat text-white-400 mb-8 md:max-w-lg md:mx-auto lg:max-w-sm">
            Get shoes ready for the new term at your nearest Niks store. Find
            your perfect Size In store. Get Rewards
          </p>

          <div className="flex justify-center items-center gap-5 lg:justify-start">
            {socialMedia.map((icon, index) => (
              <div
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
                key={index}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap justify-between gap-14 md:gap-20 mb-16 md:justify-center">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-monstserrat text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="mb-3 text-white font-montserrat text-base leading-normal hover:text-slate-gray"
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center gap-2 font-montserrat">
        <img
          src={copyrightSign}
          alt="copyright"
          width={20}
          height={20}
          className="rounded-full m-0"
        />
        <p className="text-white">Copyright. All rights reserved.</p>
      </div>
    </footer>
  );
}
