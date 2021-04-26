import React from "react";
import {
  StatsContainer,
  StatsContent,
  StatsContentDescription,
  StatsContentHeading,
  StatsContentHeadingSpan,
  StatsDetailsItem,
  StatsDetailsLabel,
  StatsDetailsList,
  StatsDetailsValue,
  StatsHeader,
} from "./Stats.styles";

const Stats = () => {
  return (
    <StatsContainer>
      <StatsHeader></StatsHeader>
      <StatsContent>
        <StatsContentHeading>
          Get <StatsContentHeadingSpan>insights</StatsContentHeadingSpan> that
          help your business grow.
        </StatsContentHeading>

        <StatsContentDescription>
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </StatsContentDescription>

        <StatsDetailsList>
          <StatsDetailsItem>
            <StatsDetailsValue>10k+</StatsDetailsValue>
            <StatsDetailsLabel>companies</StatsDetailsLabel>
          </StatsDetailsItem>

          <StatsDetailsItem>
            <StatsDetailsValue>314</StatsDetailsValue>
            <StatsDetailsLabel>templates</StatsDetailsLabel>
          </StatsDetailsItem>

          <StatsDetailsItem>
            <StatsDetailsValue>12m+</StatsDetailsValue>
            <StatsDetailsLabel>queries</StatsDetailsLabel>
          </StatsDetailsItem>
        </StatsDetailsList>
      </StatsContent>
    </StatsContainer>
  );
};
export default Stats;
