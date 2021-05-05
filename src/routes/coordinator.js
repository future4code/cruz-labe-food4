export const goToSplashPage = (history) => {
    history.push("/");
  };

export const goToLoginPage = (history) => {
    history.push('/login');
  };

export const goToSingUpPage = (history) => {
    history.push('/cadastro');
  };

export const goToProfilePage = (history) => {
    history.push('/perfil');
  };

export const goToFeedPage = (history) => {
    history.push('/feed');
  };

export const goToSearchPage = (history) => {
    history.push('/busca');
  };

export const goToRestaurantPage = (history, name) => {
    history.push(`/restaurante/${name}`);
  };

export const goToCartPage = (history) => {
    history.push('/carrinho');
  };

export const goToProgressPage = (history) => {
    history.push('/andamento');
  };

export const goToAdressPage = (history) => {
    history.push('/endereco');
  };

export const goToEditAdressPage = (history) => {
    history.push('/editar-endereco');
  };

export const goToEditRegisterPage = (history) => {
    history.push('/editar-perfil');
  };
