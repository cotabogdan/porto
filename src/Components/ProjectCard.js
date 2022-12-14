import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,link }) => {
  const openInNewTab= url=>{
    window.open(link,'_blank', 'noopener,noreferrer');
  };
  return (
  
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img  src={imgUrl} />
        <div onClick={()=>openInNewTab()} className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}