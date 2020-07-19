import React from "react";
import styled from "styled-components";

export const App = () => {
  return (
    <AppCotainer>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </AppCotainer>
  );
};

const AppCotainer = styled.div`
  font-family: sans-serif;
  text-align: center;
`;
