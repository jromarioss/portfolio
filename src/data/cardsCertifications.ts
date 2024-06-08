import certificado from "../assets/reactjs_rocketseat.png";
import certificado1 from "../assets/nodejs_rocketseat.png";
import certificado2 from "../assets/reactnative_rocketseat.png";

interface CertificatiosProps {
  id: number;
  link: string;
  img: any;
}

export const cardsCertifications: CertificatiosProps[] = [
  {
    id: 1,
    link: "https://app.rocketseat.com.br/api/certificates/pdf/46840e24-5709-42a7-ab78-9a93aac103f4",
    img: certificado
  },
  {
    id: 2,
    link: "https://app.rocketseat.com.br/api/certificates/pdf/46840e24-5709-42a7-ab78-9a93aac103f4",
    img: certificado1
  },
  {
    id: 3,
    link: "https://app.rocketseat.com.br/api/certificates/pdf/46840e24-5709-42a7-ab78-9a93aac103f4",
    img: certificado2
  },
  {
    id: 4,
    link: "https://alunos.b7web.com.br/media/certificates/certificado_4059818.jpg",
    img: "https://alunos.b7web.com.br/media/certificates/certificado_4059818.jpg"
  },
  {
    id: 5,
    link: "https://alunos.b7web.com.br/media/certificates/certificado_6650549.jpg",
    img: "https://alunos.b7web.com.br/media/certificates/certificado_6650549.jpg"
  },
  {
    id: 6,
    link: "https://alunos.b7web.com.br/media/certificates/certificado_4859136.jpg",
    img: "https://alunos.b7web.com.br/media/certificates/certificado_4859136.jpg"
  },
  {
    id: 7,
    link: "https://alunos.b7web.com.br/media/certificates/certificado_8759359.jpg",
    img: "https://alunos.b7web.com.br/media/certificates/certificado_8759359.jpg"
  },
  {
    id: 8,
    link: "https://alunos.b7web.com.br/media/certificates/certificado_7990837.jpg",
    img: "https://alunos.b7web.com.br/media/certificates/certificado_7990837.jpg"
  },
  {
    id: 9,
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-a57fd99d-23c7-4c3a-bb88-a287662408fa.jpg?v=1646755739000",
    img: "https://udemy-certificate.s3.amazonaws.com/image/UC-a57fd99d-23c7-4c3a-bb88-a287662408fa.jpg?v=1646755739000"
  },
  {
    id: 10,
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-c072c2c7-d979-41a3-a8a9-e9b480921435.jpg?v=1604680395000",
    img: "https://udemy-certificate.s3.amazonaws.com/image/UC-c072c2c7-d979-41a3-a8a9-e9b480921435.jpg?v=1604680395000"
  },
  {
    id: 11,
    link: "https://www.udemy.com/certificate/UC-d2d04a4a-7289-495b-afbb-f7e9bc496cb5/",
    img: "https://udemy-certificate.s3.amazonaws.com/image/UC-d2d04a4a-7289-495b-afbb-f7e9bc496cb5.jpg?v=1688123457000"
  },
  {
    id: 12,
    link: "https://www.udemy.com/certificate/UC-dddeac20-5954-4c62-bd8c-a7ae3a376097/",
    img: "https://udemy-certificate.s3.amazonaws.com/image/UC-dddeac20-5954-4c62-bd8c-a7ae3a376097.jpg?v=1707324646000"
  },
  {
    id: 13,
    link: "https://www.udemy.com/certificate/UC-3d7cc08f-a32e-476f-ae9d-02f360355191/",
    img: "https://udemy-certificate.s3.amazonaws.com/image/UC-3d7cc08f-a32e-476f-ae9d-02f360355191.jpg?v=1707744173000"
  }
];