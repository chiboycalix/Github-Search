/** @format */

import LoginGithub from 'react-login-github';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const onSuccess = (response: { code: string }) => {
    const { code } = response;
    navigate(`/search`, { state: code, replace: true});
  };
  const onFailure = (response: any) => console.error(response);

  return (
    <div className="h-screen flex justify-center items-center">
      <LoginGithub
        className="rounded-md bg-dark-brown text-white px-8 py-3"
        clientId={process.env.REACT_APP_GITHUB_APP_CLIENT_ID}
        onSuccess={onSuccess}
        onFailure={onFailure}
        buttonText="Login to Github"
      />
    </div>
  );
};

export default LandingPage;
