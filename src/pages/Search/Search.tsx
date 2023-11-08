import React, { useEffect, useState } from 'react';
import StoryItem from '../../components/StoryItem/StoryItem';
import Section, { SectionHeading, SectionTitle } from '../../components/Section/Section';
import { queryStore } from '../../store/queryStore';
import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
//import { getStoriesByName } from '../../data/api';
import { Story } from '../../models/Story';

function Search() {
  const query = queryStore((state) => state?.query);
  const { data: stories, refetch } = useQuery<Story[], AxiosError>(
    ['search-stories', query],
    // async () => {
    //   const result = await getStoriesByName({ search: query });
    //   return result;
    // },
  );

  useEffect(() => {
    refetch();
  }, [query]);

  return (
    <>
      <span className="imgHero"></span>

      <div className="main">
        <div className="container">
          <div className="main-content">
            <div className="d-flex">
              <Section>
                <SectionHeading>
                  <h4 className="section-title">Kết quả</h4>
                </SectionHeading>
                <SectionTitle>
                  <div className="list-story">
                    {stories?.map((data, index) => <StoryItem key={index} data={data} />)}
                  </div>
                </SectionTitle>
              </Section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
