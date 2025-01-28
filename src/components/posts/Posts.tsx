import { PostItem } from './PostItem';

const posts = [
  {
    id: 1,
    source: '/post1.jpg',
    title: 'Orla do Guaíba',
    description:
      'A orla do Guaíba é o lugar perfeito para passear sem pressa e assistir ao pôr do sol em Porto Alegre. O trecho da avenida Beira-Rio entre a Usina do Gasômetro e o Parque Marinha do Brasil sempre foi ponto de lazer para os moradores, e depois de ter passado por uma super revitalização, virou o principal ponto turístico da cidade. O parque urbano conta com deques de madeira, mirantes, ciclovia, quadras esportivas, vários bares e um restaurante panorâmico. Uma das partes mais populares são as passarelas de metal vazadas sobre o Guaíba, que permitem ver as águas do lago sob os pés. ',
  },
  {
    id: 2,
    source: '/post2.jpg',
    title: 'Canions de Cambará do Sul',
    description:
      'Sem dúvida, os principais pontos turísticos de Cambará do Sul são os cânions gigantes, que dividem os estados de RS e SC. Esta região, junto com São José dos Ausentes e Bom Jardim da Serra, forma o maior conjunto de cânions da América do Sul. Ao contrário do que muita gente imagina, há vários desfiladeiros em Cambará do Sul, e não somente o Itaimbezinho e o Fortaleza. Porém, alguns deles são pouco conhecidos por ter acessos mais complicados, através de longas caminhadas ou acesso não permitido.',
  },
  {
    id: 3,
    source: '/post3.jpg',
    title: 'Gramado',
    description:
      'A pequena cidade brasileira de Gramado é um refúgio pitoresco e verdejante que abriga algumas surpresas encantadoras. Depois de se divertir bastante nos pedalinhos e nos bosques de pinheiros da Floresta Negra em torno do Lago Negro, faça uma visita ao Snowland, o único parque de neve Indoor da América Latina. As crianças vão adorar o Mini Mundo, um parque de miniaturas que contém réplicas minúsculas de paisagens conhecidas.',
  },
  {
    id: 4,
    source: '/post4.jpg',
    title: 'São Miguel das Missões',
    description:
      'Conhecer a Região das Missões é uma verdadeira viagem no tempo, à magia e aos mistérios desta terra. Andar por aqui é reviver a saga dos primeiros padres da Companhia de Jesus, os jesuítas, que em 1609 atravessaram o mundo para conviver com os índios guaranis dentro dos princípios da fé cristã. A região e reconhecida por Voltaire e Montesquieu, filósofos do Iluminismo, como a realização da utopia do Cristianismo: A Terra sem Males.',
  },
];

export default function Posts() {
  return (
    <section className="font-roboto flex flex-col gap-8 px-8">
      <h2 className="text-lg font-medium text-custom900 mt-8">
        Explore destinos populares no Rio Grande do Sul, Brasil
      </h2>
      <div className="grid grid-cols-auto-fit-minmax justify-around gap-4 mb-5">
        {posts.map((post) => (
          <PostItem
            title={post.title}
            key={post.id}
            description={post.description}
            source={post.source}
          />
        ))}
      </div>
    </section>
  );
}
