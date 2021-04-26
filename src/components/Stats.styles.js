import styled from "styled-components";
import headerBgMobile from "../images/image-header-mobile.jpg";
import headerBgDesktop from "../images/image-header-desktop.jpg";

export const StatsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  border-radius: 0.5rem;
  background-color: var(--dark-blue);
`;

export const StatsHeader = styled.header`
  background: url(${headerBgDesktop}) no-repeat top/cover;
  height: 50vh;
  width: 100%;
  position: relative;
  border-radius: 0.5rem 0.5rem 0 0;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: var(--soft-violet);
    opacity: 0.6;
    border-radius: 0.5rem 0.5rem 0 0;
  }

  @media screen and (min-width: 769px) {
    background: url(${headerBgDesktop}) no-repeat top/cover;
    width: 50%;
    height: auto;

    border-radius: 0 0.5rem 0.5rem 0;

    &::after {
      border-radius: 0 0.5rem 0.5rem 0;
    }
  }
`;

export const StatsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem;

  @media screen and (min-width: 769px) {
    width: 50%;
    padding: 4rem;
  }
`;

export const StatsContentHeading = styled.h1`
  font-size: 2rem;
  text-align: center;
  line-height: 3rem;
  font-family: var(--lexend-dec-font);
  color: var(--white);
`;

export const StatsContentHeadingSpan = styled.span`
  color: var(--soft-violet);
`;

export const StatsContentDescription = styled.p`
  color: var(--slightly1);
  line-height: 1.5;
  text-align: center;
  margin: 2rem 0;
`;

export const StatsDetailsList = styled.ul`
  color: var(--white);
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1rem;

  @media screen and (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const StatsDetailsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;

  @media screen and (min-width: 769px) {
    align-items: initial;
  }
`;

export const StatsDetailsValue = styled.span`
  font-size: 1.6rem;
  text-transform: uppercase;
  font-weight: bold;
`;

export const StatsDetailsLabel = styled.span`
  color: var(--slightly1);
  text-transform: uppercase;
  margin-top: 0.5rem;
  letter-spacing: 2px;
  font-size: 0.7rem;
`;
