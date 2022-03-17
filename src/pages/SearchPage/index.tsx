/** @format */

import { useLocation } from 'react-router-dom';
import { SearchInput, Button } from '../../components';
import GithubLogo from '../../assets/logo.png'

const SearchPage = () => {
  const { state } = useLocation();
  const handleSearch = () => {};
  const handleClick = () => {

  };
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <div className="w-3/6 flex justify-center items-center flex-col">
        <img src={GithubLogo} alt="GithubLogo" className="mb-3" />
        <form className="w-full flex justify-center items-center flex-col">
          <SearchInput handleSearch={handleSearch} placeholder="search" />
          <div className="mt-3">
            <Button onClick={handleClick}>Search Github</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchPage;
