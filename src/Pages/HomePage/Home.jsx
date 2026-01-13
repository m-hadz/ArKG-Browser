import fondo from '../../assets/fondo.jpg'
import "./Home.css"
import 'github-markdown-css/github-markdown-light.css';
import MarkdownViewer from '../../Components/Navbar/MarkdownViewer/Markdown';



const HomePage = () => {

  

  return (
    <div className='HomePage-container'>

      <div className='img-container'>
        <img src={fondo}></img>
      </div>

      <MarkdownViewer url={'https://raw.githubusercontent.com/ArKG-Data/ArKG-docs/refs/heads/main/what-is-arkg.md'}/>
      

    </div>
  );
}


export default HomePage;