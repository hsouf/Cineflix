import React from 'react';
import { BrowseContainer } from '../containers/browse';
import { useContent } from '../hooks';
import { selectionFilter } from '../utils';
import { Card, Header, Loading, Player } from '../components';
export default function Browse() {
  const slideRows = [
    {
      title: 'Popular Now ',
      id: '1',
      category: 'Films',
      data: [
        {
          category: 'films',
          genre: 'thriller',
          slug: 'joker',
          description: 'hbruerbfcuebfubucbubd',
          docId: '34',
          title: 'joker',
        },
        {
          category: 'films',
          genre: 'romance',
          slug: 'titanic',
          description: 'hbruerbfcuebfubucbubd',
          docId: '45',
          title: 'joker',
        },
        {
          category: 'films',
          genre: 'romance',
          slug: 'a-star-is-born',
          description: 'hbruerbfcuebfubucbubd',
          docId: '0',
          title: 'joker',
        },
        {
          category: 'films',
          genre: 'romance',
          slug: 'la-la-land',
          description: 'hbruerbfcuebfubucbubd',
          docId: '9',
        },
        {
          category: 'films',
          genre: 'thriller',
          slug: 'the-silence-of-the-lambs',
          description: 'hbruerbfcuebfubucbubd',
          docId: '5',
          title: 'joker',
        },
        {
          category: 'films',
          genre: 'thriller',
          slug: 'a-quiet-place',
          description: 'hbruerbfcuebfubucbubd',
          docId: '1',
          title: 'joker',
        },
        {
          category: 'films',
          genre: 'thriller',
          slug: 'black-swan',
          description: 'hbruerbfcuebfubucbubd',
          docId: '2',
          title: 'joker',
        },
        {
          category: 'films',
          genre: 'thriller',
          slug: 'nightcrawler',
          description: 'hbruerbfcuebfubucbubd',
          docId: '3',
          title: 'joker',
        },
      ],
    },
  ];

  return (
    <Card.Group>
      {slideRows.map((slideItem) => (
        <Card key={slideItem.id}>
          <Card.Title>{slideItem.title}</Card.Title>
          <Card.Entities>
            {slideItem.data.map((item) => (
              <Card.Item key={item.docId} item={item}>
                <Card.Image
                  src={`/images/${item.category}/${item.genre}/${item.slug}/small.jpg`}
                />
                <Card.Meta>
                  <Card.SubTitle>{item.title}</Card.SubTitle>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Meta>
              </Card.Item>
            ))}
          </Card.Entities>
          <Card.Feature category={slideItem.category}>
            <Player>
              <Player.Button />
              <Player.Video src="/videos/bunny.mp4" />
            </Player>
          </Card.Feature>
        </Card>
      ))}
    </Card.Group>
  );
}
