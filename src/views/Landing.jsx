import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Header = styled.header`
    text-align: center;
`;

const FlexContainer = styled.div`
  display: flex;
`;

const FlexContainerDiv = styled.div`
  text-align: center;
`;

class Landing extends Component {
  state = {
    something: 'kdjkjf'
  }

  render() {
    return (
      <div className="landing">
        <Header>
          <h1>ShuffleTV</h1>
          <p>
            Shuffle through your favorite TV shows to find a new episode to watch.
          </p>
          <Link to='/categories'>View My Categories</Link>
        </Header>
        <main>
          <FlexContainer>
            <FlexContainerDiv>
              <h2>Categories</h2>
              <p>
                Organize your favorite TV shows by placing them in custom categories.
              </p>
            </FlexContainerDiv>
            <FlexContainerDiv>
              <h2>Search</h2>
              <p>
                Search for your favorite TV shows to find seasons and episodic information.
              </p>
            </FlexContainerDiv>
            <FlexContainerDiv>
              <h2>Shuffle</h2>
              <p>
                Shuffle to find a new TV show episode to watch. You can shuffle by category, TV show or season.
              </p>
            </FlexContainerDiv>
            <FlexContainerDiv>
              <h2>Watch</h2>
              <p>
                After watching an episode, mark it as watched so you can get a new episode each time you shuffle.
              </p>
            </FlexContainerDiv>
          </FlexContainer>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Landing;
