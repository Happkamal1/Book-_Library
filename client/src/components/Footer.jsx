import React from "react";

const Footer = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-18 dark:bg-white dark:text-black">
      <footer className="footer p-10 text-base-content flex flex-col md:flex-row md:justify-evenly gap-8">
        {/* Services Section */}
        <nav>
          <h6 className="footer-title text-xl font-bold mb-4">Services</h6>
          <ul className="space-y-2">
            <li>
              <a href="#" className="link link-hover text-lg font-semibold">
                Branding
              </a>
            </li>
            <li>
              <a href="#" className="link link-hover text-lg font-semibold">
                Design
              </a>
            </li>
            <li>
              <a href="#" className="link link-hover text-lg font-semibold">
                Marketing
              </a>
            </li>
            <li>
              <a href="#" className="link link-hover text-lg font-semibold">
                Advertisement
              </a>
            </li>
          </ul>
        </nav>

        {/* Company Section */}
        <nav>
          <h6 className="footer-title text-xl font-bold mb-4">Company</h6>
          <ul className="space-y-2">
            <li>
              <a href="#" className="link link-hover text-lg font-semibold">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="link link-hover text-lg font-semibold">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="link link-hover text-lg font-semibold">
                Jobs
              </a>
            </li>
            <li>
              <a href="#" className="link link-hover text-lg font-semibold">
                Press kit
              </a>
            </li>
          </ul>
        </nav>

        {/* Legal Section */}
        <nav>
          <h6 className="footer-title text-xl font-bold mb-4">Legal</h6>
          <ul className="space-y-2">
            <li>
              <a href="#" className="link link-hover text-lg font-semibold">
                Terms of use
              </a>
            </li>
            <li>
              <a href="#" className="link link-hover text-lg font-semibold">
                Privacy policy
              </a>
            </li>
            <li>
              <a href="#" className="link link-hover text-lg font-semibold">
                Cookie policy
              </a>
            </li>
          </ul>
        </nav>

        {/* Newsletter Section */}
        <form>
          <h6 className="footer-title text-xl font-bold mb-4">Newsletter</h6>
          <fieldset className="form-control w-80 space-y-2">
            <label htmlFor="email" className="label">
              <span className="label-text text-lg font-semibold">
                Enter your email address
              </span>
            </label>
            <div className="join">
              <input
                type="email"
                id="email"
                placeholder="username@site.com"
                className="input input-bordered join-item w-full"
                required
              />
              <button
                type="submit"
                className="btn btn-primary join-item text-lg font-semibold"
              >
                Join
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
};

export default Footer;
