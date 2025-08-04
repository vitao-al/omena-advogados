export interface InstagramPost {
  id: number;
  imageUrl: string;
  caption: string;
  date: string;
  link: string;
}

export const instagramPosts: InstagramPost[] = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=400&q=80",
    caption: "Defendendo seus direitos com excelência e dedicação. #OmenaAdvogados #DireitoTrabalhista",
    date: "2024-01-15",
    link: "https://instagram.com/p/example1"
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1593115057322-e94b77572f20?auto=format&fit=crop&w=400&q=80",
    caption: "Nossa equipe está sempre pronta para atender você. Agende sua consulta! #Advocacia #Maceió",
    date: "2024-01-12",
    link: "https://instagram.com/p/example2"
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    caption: "Direito Civil: protegendo seus interesses em todas as situações. #DireitoCivil #Justiça",
    date: "2024-01-10",
    link: "https://instagram.com/p/example3"
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=400&q=80",
    caption: "Consultoria empresarial de qualidade para o crescimento do seu negócio. #DireitoEmpresarial",
    date: "2024-01-08",
    link: "https://instagram.com/p/example4"
  },
  {
    id: 5,
    imageUrl: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=400&q=80",
    caption: "Planejamento tributário eficiente para sua empresa. Fale conosco! #DireitoTributário",
    date: "2024-01-05",
    link: "https://instagram.com/p/example5"
  },
  {
    id: 6,
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=400&q=80",
    caption: "Contratos bem elaborados são a base de bons negócios. #DireitoContratual #Advocacia",
    date: "2024-01-03",
    link: "https://instagram.com/p/example6"
  }
];