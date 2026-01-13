import "./About.css"
import MarkdownViewer from "../../Components/Navbar/MarkdownViewer/Markdown";

const AboutPage = () => {

  return (
    <div className='about-container'>
      <MarkdownViewer url={'https://raw.githubusercontent.com/ArKG-Data/ArKG-docs/refs/heads/main/about.md'}/>
    </div>
  );
};


export default AboutPage;