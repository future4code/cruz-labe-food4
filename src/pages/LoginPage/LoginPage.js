import React from "react";
import {
  LogoImage,
  ScreenContainer,
  SingUpButtonContainer,
} from "./StyledLogin";
import logo from "../../assets/logo.png";
import useForm from "../../hooks/useForm";
import { Button } from "@material-ui/core";
import LoginForm from './LoginForm'
import { goToSingUpPage } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const history = useHistory()
  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <LoginForm />
      <SingUpButtonContainer>
        <Button
          onClick={() => goToSingUpPage(history)}
          type={"submit"}
          fullWidth
          variant={"text"}
          margin={"normal"}
        >
          Não possui cadastro? Clique aqui.
        </Button>
      </SingUpButtonContainer>
    </ScreenContainer>
  );
};

export default LoginPage;
