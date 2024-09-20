import React, { useState, useEffect } from 'react';
import styles from './index.module.css';
import { Card } from "../../components/Card";
import { Header } from '../../components/Header';
import { FloatButton } from '../../components/FloatButtton';

// https://www.booking.com/hotel/br/windsor-plaza-copacabana.pt-br.html?aid=311840&label=rent-megeve-EL_gAx4QcKTyil5EbVZ1nwS267187270521%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-297548737322%3Alp9198934%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YcLgEXIAJSu2ZjMcucyRMGI&sid=b09b61fe01a32454c1c903b70111eda7&all_sr_blocks=1946702_337991597_2_2_0;checkin=2024-10-05;checkout=2024-10-06;dest_id=1792;dest_type=district;dist=0;group_adults=2;group_children=0;hapos=1;highlighted_blocks=1946702_337991597_2_2_0;hpos=1;matching_block_id=1946702_337991597_2_2_0;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;sr_pri_blocks=1946702_337991597_2_2_0__42689;srepoch=1726716113;srpvid=88ec17a657b40037;type=total;ucfs=1&
// https://www.booking.com/hotel/br/intercity-cidade-baixa.pt-br.html?aid=311840&label=rent-megeve-EL_gAx4QcKTyil5EbVZ1nwS267187270521%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-297548737322%3Alp9198934%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YcLgEXIAJSu2ZjMcucyRMGI&sid=b09b61fe01a32454c1c903b70111eda7&all_sr_blocks=209033301_277951135_2_2_0;checkin=2024-10-05;checkout=2024-10-06;dest_id=-663509;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;highlighted_blocks=209033301_277951135_2_2_0;hpos=1;matching_block_id=209033301_277951135_2_2_0;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;sr_pri_blocks=209033301_277951135_2_2_0__30240;srepoch=1726716225;srpvid=013a00dd654202ff;type=total;ucfs=1&
// https://www.booking.com/hotel/br/viverone-moinhos.pt-br.html?aid=311840&label=rent-megeve-EL_gAx4QcKTyil5EbVZ1nwS267187270521%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-297548737322%3Alp9198934%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YcLgEXIAJSu2ZjMcucyRMGI&sid=b09b61fe01a32454c1c903b70111eda7&all_sr_blocks=68131701_164457661_0_1_0;checkin=2024-10-05;checkout=2024-10-06;dest_id=-663509;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=4;highlighted_blocks=68131701_164457661_0_1_0;hpos=4;matching_block_id=68131701_164457661_0_1_0;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;sr_pri_blocks=68131701_164457661_0_1_0__35802;srepoch=1726716597;srpvid=013a00dd654202ff;type=total;ucfs=1&
// https://www.booking.com/hotel/br/longboard-paradise-hostel-surf-club.pt-br.html?aid=311840&label=rent-megeve-EL_gAx4QcKTyil5EbVZ1nwS267187270521%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-297548737322%3Alp9198934%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YcLgEXIAJSu2ZjMcucyRMGI&sid=b09b61fe01a32454c1c903b70111eda7&all_sr_blocks=668057203_375676724_2_2_0;checkin=2024-10-05;checkout=2024-10-06;dest_id=-666610;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=2;highlighted_blocks=668057203_375676724_2_2_0;hpos=2;matching_block_id=668057203_375676724_2_2_0;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;sr_pri_blocks=668057203_375676724_2_2_0__26239;srepoch=1726717079;srpvid=2bf11989155e012d;type=total;ucfs=1&

// const mock = [
//   {
//     id: 1,
//     nome: "Windsor Plaza",
//     rating: 4,
//     cidade: "Copacabana",
//     estado: "Rio de Janeiro",
//     diaria: 427,
//     descricao: [
//       "Situado a menos de 300 m da animada Praia de Copacabana, o Windsor Plaza Hotel dispõe de uma piscina relaxante na cobertura e sauna. O Wi-Fi gratuito está à sua disposição.",
//       "Os quartos possuem ar-condicionado, TV de tela plana a cabo e frigobar. O banheiro privativo conta com chuveiro e secador de cabelo.",
//       "O terraço do hotel apresenta uma academia bem equipada e bar americano.",
//       "O Windsor Plaza oferece ambientes 4 estrelas e restaurante no saguão, onde você pode saborear pratos típicos da cozinha nacional nos finais de semana. A equipe experiente pode fornecer serviços turísticos e informações sobre a cidade.",
//       "O Windsor Plaza fica a 800 m da Estação de Metrô Cardeal Arcoverde A Arena de voleibol de praia a 300 metros, e o Aeroporto Santos Dumont fica a uma distância de 7 km.",
//       "Casais particularmente gostam da localização — eles deram nota 8,8 para viagem a dois.",
//       "A distância na descrição da acomodação é calculada pelo © OpenStreetMap",
//       "Principais comodidades:",
//       "Piscina ao ar livre",
//       "Quartos para não fumantes",
//       "Serviço de quarto",
//       "Academia",
//       "Instalações para pessoas com deficiência",
//       "Estacionamento privativo"
//     ],
//     url_img1: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470446586.jpg?k=3dc50651323e6035d0ca839c613492fd3249e7833954d42fdb6fac8cb3223cab&o=&hp=1",
//     url_img2: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/436915136.jpg?k=e4c72e33f42007a5558d53bd8900003430a7dcb2b7c9bdca9684f327d2c7f853&o=&hp=1",
//     url_img3: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/489771629.jpg?k=0385a9533da94af5dfaf7cde1aaa3facfd5d6314bcd008f1409e34563f8ac081&o=&hp=1",
//     url_img4: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/489771733.jpg?k=56268d64f5b3348ace38aa4bf176c642d9fa7a874ab0202771ffaf3b34463126&o=&hp=1",
//     url_img5: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/436908486.jpg?k=0ba0f3aeb718eb83f643b8f221ec970c278811f2d11faf50090153fff1148615&o=&hp=1",
//   },
//   {
//    id: 2,
//    nome: "Intercity",
//    rating: 3,
//    cidade: "Porto Alegre",
//    estado: "Rio Gande do Sul",
//    diaria: 302,
//    descricaoDetalhada: [
//       "Você se qualifica para um desconto Genius em Intercity Porto Alegre Cidade Baixa! Para economizar nesta acomodação, basta fazer o login.",
//       "O Intercity Cidade Baixa está localizado em Porto Alegre, a 900 metros do Mercado Público Central. Você pode usufruir de um restaurante no local. O Wi-Fi gratuito está à sua disposição em todas as áreas.",
//       "Os quartos apresentam ar-condicionado, TV de tela plana, mesa de trabalho, frigobar e um banheiro privativo. Para sua comodidade, produtos de banho gratuitos e secador de cabelo são fornecidos.",
//       "Você pode contar com uma recepção 24 horas, academia e com um business center.",
//       "O Estadio do Beira Rio fica a 3,7 km do Intercity Cidade Baixa, enquanto a Universidade Federal do Rio Grande do Sul está a 300 metros. Já o Aeroporto Salgado Filho fica a 7 km.",
//       "Casais particularmente gostam da localização — eles deram nota 8,8 para viagem a dois.",
//       "A distância na descrição da acomodação é calculada pelo © OpenStreetMap",
//       "Principais comodidades:",
//       "Quartos para não fumantes",
//       "Serviço de quarto",
//       "Academia",
//       "Instalações para pessoas com deficiência",
//       "Estacionamento privativo",
//       "Restaurante",
//       "Wi-Fi gratuito",
//       "Recepção 24 horas",
//       "Elevador",
//       "Café da manhã muito bom"
//     ],
//    url_img1: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/107463403.jpg?k=10186b2cc39123250b7f4e70c6e8ebb30e80a634053a9f7ebe1f461f2d8a185c&o=&hp=1",
//    url_img2: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/107459766.jpg?k=d15933d378004f341751a5466ef64bde2f1a55c0f51a2b3664a6238b74f28d70&o=&hp=1",
//    url_img3: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/107634858.jpg?k=6ad201fe94d3b8c0d131749b79cea332758a0a5571651f6ce02896bf4c424769&o=&hp=1",
//    url_img4: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/107633738.jpg?k=f34cf80a5586e4ae876f14f16030ff53a0f0e2d7aa0e6e790a35ef886e2fd9c1&o=&hp=1",
//    url_img5: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/107634846.jpg?k=21ba474a288217b0859d5af63e8ba8ef76fc01109c26484ff99b3ed926c5682a&o=&hp=1",
//    },
//   {
//    id: 3,
//    nome: "Hotel Laghetto Moinhos",
//    rating: 4,
//    cidade: "Porto Alegre",
//    estado: "Rio Gande do Sul",
//    diaria: 358,
//    descricao: [
//       "Localizado a apenas 3 km do centro da cidade, o Hotel Laghetto Moinhos dispõe de uma piscina na cobertura com deck, uma academia e instalações para reuniões.",
//       "Todos os quartos do Hotel Laghetto Moinhos apresentam ar-condicionado e decoração moderna. As unidades incluem TV de tela plana, frigobar e banheiro privativo com chuveiro de água quente. O Wi-Fi grátis está à sua disposição.",
//       "Você pode saborear um buffet de café da manhã, com diversas frutas da estação, pães e frios, servido diariamente. Além disso, você pode desfrutar de especialidades regionais e internacionais e de uma seleção de bebidas no restaurante e bar do hotel.",
//       "Um estacionamento privativo está disponível por uma taxa extra. Essa propriedade fica a 1 km do Parque Moinho de Vento, a 3 km da Arena Gasômetro e a 6 km do Aeroporto Salgado Filho.",
//       "Por favor, observe que é permitido apenas 1 animal por apartamento.",
//       "Casais particularmente gostam da localização — eles deram nota 9,4 para viagem a dois.",
//       "A distância na descrição da acomodação é calculada pelo © OpenStreetMap",
//       "Principais comodidades:",
//       "Piscina ao ar livre",
//       "Quartos para não fumantes",
//       "Serviço de quarto",
//       "Academia",
//       "Instalações para pessoas com deficiência",
//       "Estacionamento privativo",
//       "Restaurante",
//       "Wi-Fi gratuito",
//       "Bar",
//       "Café da manhã bom"
//     ],
//    url_img1: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/557975446.jpg?k=b3cbdbadb54b108966cf89c09dbab039e5ac22356776c384edf73c6dd6f19ed5&o=&hp=1",
//    url_img2: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/174526501.jpg?k=c2d4661e7377dc728fdc7f7b9ecee6e3d6424a9315d0b63f2b15a8811da967fb&o=&hp=1",
//    url_img3: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/477438484.jpg?k=d3694d22a1f66d6df992989c2f0ffb81fe2924f0a4088310d06925324860de59&o=&hp=1",
//    url_img4: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/51360325.jpg?k=51ceada099e24cd6e8be0418f6802df1161f0cf64c83db78fb9b62c151e860a9&o=&hp=1",
//    url_img5: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/149637040.jpg?k=03c8bac8aeba68d044e465922cd0e889a5e3ceb328685c700be9dc49c1b5cd04&o=&hp=1",
//  },
//  {
//   id: 4,
//   nome: "Longboard Paradise Surf Club",
//   rating: 3,
//   cidade: "Recreio dos Bandeirantes",
//   estado: "São Paulo",
//   diaria: 262,
//   descricao: [
//     "Você se qualifica para um desconto Genius em Longboard Paradise Surf Club! Para economizar nesta acomodação, basta fazer o login.",
//     "Situado no Rio de Janeiro, o Longboard Paradise Surf Club oferece jardim, lounge compartilhado, bar e Wi-Fi gratuito em todas as áreas. A propriedade fica a cerca de 32 km do Jardim Botânico do Rio de Janeiro, a 34 km da Lagoa Rodrigo de Freitas e a 36 km do Parque Nacional da Floresta da Tijuca. A acomodação dispõe de cozinha compartilhada e recepção 24 horas.",
//     "Alguns quartos também possuem cozinha compacta com geladeira. Todos os quartos incluem roupa de cama.",
//     "O albergue serve café da manhã à la carte e continental diariamente.",
//     "A área é famosa para trilhas a pé, e o aluguel de bicicletas está disponível no Longboard Paradise Surf Club.",
//     "Os pontos de interesse famosos próximos à acomodação incluem a Praia do Pontal, a Praia da Macumba e o Recreio dos Bandeirantes. O aeroporto mais próximo é o Aeroporto Internacional do Galeão/Rio de Janeiro, a 43 km do Longboard Paradise Surf Club.",
//     "Casais particularmente gostam da localização — eles deram nota 9,3 para viagem a dois.",
//     "A distância na descrição da acomodação é calculada pelo © OpenStreetMap",
//     "Principais comodidades:",
//     "Wi-Fi gratuito",
//     "Recepção 24 horas",
//     "Bar",
//     "Jardim",
//     "Café da manhã"
//   ],
//   url_img1: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/514753247.jpg?k=e72d9d30caca71bf4ac26cfcfd6b1e198cd04dbf730b5cb46b1e47024e68165d&o=&hp=1",
//   url_img2: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/405362159.jpg?k=4a80bccc0c56b6b90f76be9debec26d77a82a2f06ac24fa41120940669178771&o=&hp=1",
//   url_img3: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/514753249.jpg?k=c06594ab36b586521be568fcbdd1ed1fc0d4fc0d668c09eceb5697332be22abe&o=&hp=1",
//   url_img4: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/405365907.jpg?k=9000ca5ddece7e7c36634c4e902b2742b4b908380e7a7b80f9b51dd8f9d93c14&o=&hp=1",
//   url_img5: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/514749948.jpg?k=f9068e1b58d82ea361916ae746d85509ee2d399d9f77fd0ca55a59265ebc32b6&o=&hp=1",
//  },
// ]

export function Home(){
    // Estado para armazenar os itens do local storage
    const [hoteis, setHoteis] = useState([]);

    function carregarHoteis() {
      const itensCarregados = localStorage.getItem("@hoteis");

      if (itensCarregados) {
        const itensConvertidos = JSON.parse(itensCarregados);
        setHoteis(itensConvertidos);
      }
    }

   function salvarLocal(item){
      const itensSalvos = JSON.parse(localStorage.getItem("@hoteis")) || [];

      // Adiciona o novo item à lista
      const novaLista = [...itensSalvos, item];
      localStorage.setItem("@hoteis", JSON.stringify(novaLista));
   }

   function removerLocal(id){
      const itensFiltrados = hoteis.filter((item) => item.id !== id);

      setHoteis(itensFiltrados);

      localStorage.setItem("@hoteis", JSON.stringify(itensFiltrados));
   }

   useEffect(() => {
      carregarHoteis();
    }, []);

   return (
      <div >
         <Header />

         <div  className={styles.container}>
            <h1 className={styles.titulo}>Hotéis</h1>
            <div className={styles.produtos}>
               {hoteis.map((item, index) => (
                  <div key={item.id}>
                     <Card
                        key={item.id}
                        produto={item} />

                     <button onClick={() => salvarLocal(item)}>Salvar</button>
                     <button onClick={() => removerLocal(item.id)}>Apagar</button>
                  </div>
               ))}
            </div>

            <FloatButton
               setHoteis={setHoteis}
            />
         </div>
      </div>
   )
}
