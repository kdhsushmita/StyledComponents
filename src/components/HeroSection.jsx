import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import PropTypes from "prop-types";

const HeroSection = (props) => {
  const { name, image } = props;
  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data">Welcome to</p>
          <h1 className="hero-heading">{name}</h1>
          <p className="hero-para">
            dolor sit amet consectetur adipisicing elit. Deleniti modi obcaecati
            veritatis tempore perferendis quaerat optio, fugiat reiciendis
            minima harum illo illum incidunt esse molestias blanditiis iure
            libero nobis aut sint quia?
          </p>
          <Button className="btn hireme-btn">
            <NavLink to="/contact">hire me</NavLink>
          </Button>
        </div>
        <div className="section-hero-image">
          <picture>
            <img src={image} alt="" className="hero-img" />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

HeroSection.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

const Wrapper = styled.section`
  padding: 9rem 0;
  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .btn {
    max-width: 16rem;
  }
  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }
  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }
  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }
  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  picture {
    text-align: center;
  }
  .hero-img {
    max-width: 80%;
  }
`;
export default HeroSection;
