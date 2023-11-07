import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import { AnimateIn } from "@/components";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <AnimateIn delay={1.2}>
      <section id="hero" className="hero d-flex flex-column justify-content-center align-items-center">
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="mb-3 fw-bold  display-1">Oops!</div>
              <h1
                className="lh-base"
                style={{
                  fontWeight: 900,
                  marginBottom: -4,
                }}
              >
                404 - PAGE NOT FOUND
              </h1>
              <p className="lh-base text-uppercase">We are sorry, but the page you requested was not found</p>
              <Link to="/" className="btn-get-started">
                Go to home
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="my-5 pt-2" />
    </AnimateIn>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
