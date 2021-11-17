import React from "react";
import { JumbotronContainer } from './containers/jumbotron';
import { FooterContainer } from "./containers/footer";
import { FaqsContainer } from "./containers/faqs";
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';

export default function App() {
  const user = null;
  return(
    <>
    <JumbotronContainer />
    <FooterContainer />
    <FaqsContainer />
    </>
  ); 
}