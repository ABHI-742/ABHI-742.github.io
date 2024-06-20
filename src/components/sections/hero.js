import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-height: 130vh;
  padding: 100px 20px; /* Adjust padding as needed */
  text-align: left;
`;

const StyledOverline = styled.h1`
  margin-bottom: 30px;
  color: var(--green);
  font-family: var(--font-mono);
  font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
  font-weight: 400;

  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const StyledTitle = styled.h2`
  margin-bottom: 10px;
  font-size: clamp(40px, 8vw, 60px);
  color: var(--lightest-slate);
`;

const StyledSubtitle = styled.h3`
  margin-bottom: 20px;
  font-size: clamp(60px, 5vw, 40px);
  color: var(--slate);
  line-height: 1.2;
`;

const StyledDescription = styled.div`
  margin-bottom: 40px;
  max-width: 540px;
`;

const StyledEmailLink = styled.a`
  ${({ theme }) => theme.mixins.bigButton};
  margin-top: 30px;
`;

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(fileAbsolutePath: { regex: "/content/hero/" }) {
        frontmatter {
          title
          name
          subtitle
          buttonText
          email
        }
        html
      }
    }
  `);

  const { frontmatter, html } = data.markdownRemark;

  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsMounted(true); // Instantly set as mounted for reduced motion
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, [prefersReducedMotion]);

  const items = [
    <StyledOverline key="overline">{frontmatter.title}</StyledOverline>,
    <StyledTitle key="title">{frontmatter.name}.</StyledTitle>,
    <StyledSubtitle key="subtitle">{frontmatter.subtitle}</StyledSubtitle>,
    <StyledDescription key="description" dangerouslySetInnerHTML={{ __html: html }} />,
    <div key="button" style={{ transitionDelay: '500ms' }}>
      <StyledEmailLink href={`mailto:${frontmatter.email}`}>
        {frontmatter.buttonText}
      </StyledEmailLink>
    </div>,
  ];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        items.map((item, i) => <div key={i}>{item}</div>)
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${(i + 1) * 100}ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
