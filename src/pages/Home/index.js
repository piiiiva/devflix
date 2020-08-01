import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriesRepository from '../../repositories/categories';

function Home() {
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    // http://localhost:8080/categories?_embed=videos
    categoriesRepository.getAllWithVideos()
      .then((categoriesWithVideos) => {
        // console.log(categoriesWithVideos);
        setInitialData(categoriesWithVideos);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {initialData.length === 0 && (<div>Loading...</div>)}

      {initialData.map((category, indice) => {
        if (indice === 0) {
          return (
            <div key={category.id}>
              <BannerMain
                videoTitle={initialData[0].videos[0].title}
                url={initialData[0].videos[0].url}
                videoDescription="O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
              />

              <Carousel
                ignoreFirstVideo
                category={initialData[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={category.id}
            category={category}
          />
        );
      })}

    </PageDefault>
  );
}

export default Home;
