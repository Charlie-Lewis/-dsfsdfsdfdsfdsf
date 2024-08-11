import s from "./TestimonialsLink.module.scss";

const TestimonialsLink = ({ href, src, alt }) => {
  return (
    <>
      <a href={href} target="_blank">
        <img src={src} alt={alt} />
      </a>
    </>
  );
};

export default TestimonialsLink;
