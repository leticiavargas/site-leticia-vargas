import Image from 'next/image';
import './styles.css';

import logo from '@images/logo.webp';
import { Icon } from '@components';

const Header = () => { 
  return (
    <header className='headerContainer'>
      <Image src={logo} alt="Marca Letícia Vargas" width={118} />
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Artigos</a></li>
          <li><a href="#">Projetos</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>
      <section className='social'>
        <Icon iconName= "instagram"/>
        <Icon iconName= "github"/>
        <Icon iconName= "linkedin"/>
        <Icon iconName= "youtube"/>
      </section>
    </header>
  );
};

export { Header };