import styles from './Prato.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import cardapio from 'data/cardapio.json';
import TagsPrato from 'components/TagsPrato';
import NotFound from 'pages/NotFound';

export default function Prato() {
  //pegando prato do state (da problema se o usuario acessar direto pelo link)
  // const { state } = useLocation();
  // const { prato } = state as { prato: typeof cardapio[0]};

  //pegando com o id do useParams
  const { id } = useParams();
  const prato = cardapio.find(item => item.id === Number(id));
  if(!prato) {
    return <NotFound />;
  }

  const navigate = useNavigate();

  return (
    <>
      <button className={styles.voltar} onClick={() => navigate(-1)}>{'< Voltar'}</button>
      <section className={styles.container}>
        <h1 className={styles.titulo}>{prato.title}</h1>
        <div className={styles.imagem}>
          <img src={prato.photo} alt={prato.title} />
        </div>
        <div className={styles.conteudo}>
          <p className={styles.conteudo__descricao}>{prato.description}</p>
        </div>
        <TagsPrato {...prato}/>
      </section>
    </>
  );
}